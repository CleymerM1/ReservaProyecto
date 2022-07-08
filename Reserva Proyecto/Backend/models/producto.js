const { json } = require('express');
const conexion = require('../config/conexion');
/*------------------------------------------Creacion de clases---------------------------------------------*/ 
const Producto = function(objProducto){
    this.categoria = objProducto.categoria;
    this.nombre = objProducto.nombre;
    this.costo = objProducto.costo;
    this.estado = objProducto.estado;
    this.descripcion = objProducto.descripcion;
    this.ubicacion = objProducto.ubicacion;
};
/*---------------------------------------------Funciones---------------------------------------------------*/
/*--------Crear Producto---------*/
Producto.crear = (newObjProducto, res)=>{
    //SE DEBE DE MANDAR LAS FOTOS A SU TABLA ESPECIFICA, RECORDAR QUE SON VARIAS Y SE DEBE DE ITERAR
    let insertQuery =   `insert into producto (idCategoria, nombre, costo, estado, descripcion, ubicacion) 
                VALUES ('${newObjProducto.categoria}', '${newObjProducto.nombre}', '${newObjProducto.costo}',
                '${newObjProducto.estado}','${newObjProducto.descripcion}','${newObjProducto.ubicacion}')`;
    conexion.query(insertQuery,(err, resRegistrarProducto)=>{
        if (err) return res({msj: 'El producto no pudo ser registrado'+err}, null)

        return res(null,{msj: 'El producto fue registrado correctamente'})
    })
  
};



/*-------Obtener Productos------*/
Producto.obtenerTodos = (resultado)=>{
    conexion.query("select * from producto", (err, rows)=>{
        if(err) throw err;
        resultado(null, rows);
    });
};


/*--------Obtener un Producto------*/
Producto.obtenerUno = (resultado, res) => {
    let searchQuery = `select * from producto where idProducto = '${resultado}'`
    conexion.query(searchQuery, (err, rows) => {
        if(err) return res({msj: 'Hubo un error' + err}, null);

        return res(null, rows);
    })
}

/**HPOR HACER */
Producto.actualizarProducto = (objectProducto, res)=>{
    
}

module.exports = Producto;