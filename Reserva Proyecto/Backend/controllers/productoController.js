const { json } = require('express');
const Producto = require('../models/producto');

/*---------------Crear Producto---------------*/
exports.crearProducto = (req,res)=>{
    if(!req.body){
        return res.status(400).send({msj: 'Error del cliente'})
    }
    console.log(req.body);
    const producto = new Producto({
        categoria: req.body.categoria,
        nombre: req.body.nombre,
        costo: req.body.costo,
        estado: req.body.estado,
        descripcion: req.body.descripcion,
        ubicacion: req.body.ubicacion
    })

    /*----Llamdo de la funcion crear en models----*/
    Producto.crear(producto, (err, data)=>{
        if(err){
            return res.status(500).send({
                mensaje: err.mensaje || "Error al guardar en la base de datos",
                error: err
            });
        }
        if(data.error){
            console.log(data)
            return res.status(502).send({msj: data.error})
        }else{
            return res.status(200).json({msj:'El producto se registro correctamente'})
        }
    })    
};

/*--------Obtener Todos los Productos--------*/
exports.obtenerProductos = (req,res)=>{
    Producto.obtenerTodos((err, data) => {
        if(err)
            return res.status(404).send({msj: err.msj || 'Error al buscar en la base d datos'})
        else if(data.error)
            return res.status(502).send({msj: data.error})
        else
            return res.status(200).json(data)
    })
};

/*---------Obtener un solo producto----------*/
exports.obtenerProducto = (req, res) =>{
    let id = req.params.idP
    if(!id)
        return res.status(404).send({msj: 'Error del cliente'})
    else
        Producto.obtenerPorId(id, (err, data) => {
            if(err)
                return res.status(404).send({msj: 'Error del servidor'})
            else if(err.data)
                return res.status(502).send({msj: `Error encontrando el producto con el id = '${id}'`})
            else
                return res.json(data)
        })
}

/*-------------Actualizar por id-------------*/
exports.actualizarProducto = (req, res) => {
    let id = req.params.idP
    if(!id)
        return res.status(404).send({msj: 'Error del cliente'})
    else
        Producto.actualizarPorId(id, (err, data) => {
            if(err.data)
                return res.status(502).send({msj: `Error encontrando el producto con el id = '${id}' para actualizarlo`})
            else
                return res.json(data)
        })
}

/*--------------Eliminar por id--------------*/
exports.eliminarProducto = (req, res) => {
    let id = req.params.idP
        if(!id)
            return res.status(404).send({msj: 'Error del cliente'})
        else
            Producto.eliminarPorId(id, (err, data) => {
                if(err.data)
                    return res.status(502).send({msj: `Error al eliminar el producto con el id = '${id}'`})
                else
                    return res.json(data)
            })
}

/*---------Eliminar todos por usuario--------
exports.eliminarTodoPorUsuario = (req, res) => {
    Producto.eliminarTodosPorUsuario((err, data) => {})
}*/
