const Mensaje = require('../models/mensaje');



exports.crearMensaje = (req,res) =>{
    console.log(req)
    const mensaje = new Mensaje({
        mensaje : req.body.mensaje,
        emisor : req.body.emisor,
        receptor : req.body.receptor   
    })

    Mensaje.crear(mensaje, (err, data)=>{
        if(err) return res.status(500).send(err);
        return res.status(202).json({msj:'Creado exitosamente'})
    })


}
