const conexion = require('../config/conexion');
const Categoria= require('../models/categoria');


exports.crearCategoria = (req,res)=>{


    const categoria = new Categoria({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen
    })


    Categoria.crear(categoria, (err, data)=>{
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
            return res.status(200).json({msj:'La categoria se agregó correctamente'})

        }
    })    
};


exports.obtenerCategorias = (req,res)=>{
    Categoria.obtener((error,data)=>{
        if(error){
            res.status(404).json({mensaje: 'No se pudieron obtener los datos'})
        }else{
            res.status(200).json(data);
        }
    });
};
exports.obtenerCategoria = (req,res)=>{
    Categoria.obtenerPorId(req.params.id,(error,data)=>{
        if(error){
            res.status(404).json({mensaje: 'No se pudo obtener los datos'})
        }else{
            res.status(200).json(data[0]);
        }
    });
}
