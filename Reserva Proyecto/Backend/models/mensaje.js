const { json } = require('express');
const { JSONB } = require('sequelize');
const { JSON } = require('sequelize');
const conexion = require('../config/conexion');

const Mensaje = function(objMensaje){
    this.mensaje = objMensaje.mensaje;
    this.emisor = objMensaje.emisor;
    this.receptor = objMensaje.receptor;
    
}

Mensaje.crear = (req,res) =>{
    console.log(req);
    let {mensaje,emisor, receptor } = req;
    let buscarConversacion = `select * from conversacion where (usuario1_id = ${emisor} and usuario2_id = ${receptor}) or (usuario2_id = ${receptor} and usuario1_id = ${emisor}); `
    console.log(mensaje)
    
    conexion.query(buscarConversacion, (err, rowsConversacion)=>{
        
        if(err) return res(err, null)
        if(!rowsConversacion.length){
            let insertConversacion = `INSERT INTO conversacion (usuario1_id, usuario2_id ) VALUES (${emisor}, ${receptor});`
        
            conexion.query(insertConversacion, (errInsert, rows)=>{
                console.log(errInsert)
                //console.log(Object.values(JSON.parse(JSON.stringify(rows))))
                console.log(rows)
                
                let insertMensaje = `INSERT INTO mensaje (conversacion_id, mensaje, emisor_id, receptor_id, fecha) VALUES (
                    ${rows.insertId}, '${mensaje}',${emisor}, ${receptor}, NOW()
                );`
                
                
                conexion.query(insertMensaje, (err, rowsMensaje)=>{
                    if(err) return res(err, null)
                    
                    return res(null, {msj:'Mensaje agregado correctamente'})
                    
                })
            })
        }else{
            console.log(rowsConversacion[0])
            
            let insertMensaje = `INSERT INTO mensaje (conversacion_id, mensaje, emisor_id, receptor_id, fecha) VALUES (
                ${rowsConversacion[0].id}, '${mensaje}',${emisor}, ${receptor}, NOW()
            );`
            conexion.query(insertMensaje, (err, rows)=>{
                if(err) return res(err, null)
                
                return res(null, {msj:'Mensaje agregado correctamente'})
                
            })
        }
    })
    
}

module.exports= Mensaje;