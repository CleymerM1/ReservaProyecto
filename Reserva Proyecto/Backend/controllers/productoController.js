const conexion = require('../config/conexion');
const Producto = require('../models/producto');


exports.crearProducto = (req,res)=>{
    console.log(req.body);
    const producto = new Producto({
        categoria: req.body.categoria,
        nombre: req.body.nombre,
        costo: req.body.costo,
        estado: req.body.estado,
        descripcion: req.body.descripcion,
        ubicacion: req.body.ubicacion
    })

    Producto.crear(producto, (err, data)=>{
        if(err){
            console.log(err)
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

exports.obtenerProductos = (req,res)=>{
    Producto.obtenerTodos((error,data)=>{
        if(error){
            res.status(404).json({mensaje: 'No se pudieron obtener los datos'})
        }else{
            res.status(200).json(data);
        }
    });
};

exports.obtenerProducto = (req, res) =>{
    Producto.obtenerUno(id, (error, data) =>{
        if(error){
            res.status(404).json({msj: 'Hubo un problema al obtener el producto' + error})
        }else{
            res.status(200).json(data)
        }
    })
};


/* Actualizar un producto */

exports.actualizarProducto = (req,res)=>{
    //mando a llamar la funcion en model
};


/* Eliminar un producto */

exports.eliminarProducto = (req,res)=>{
    //mandar a llamar la funcion en model
}