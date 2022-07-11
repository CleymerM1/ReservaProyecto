/*-------------------------------Import para la conexion con la base de datos------------------------------*/
const conexion = require('../config/conexion');



/*------------------------------------------Creacion de clases---------------------------------------------*/
const Producto = function (objProducto) {
    this.idProducto = objProducto.idProducto;
    this.idCategoria = objProducto.idCategoria;
    this.nombre = objProducto.nombre;
    this.costo = objProducto.costo;
    //this.foto = objProducto.foto;
    this.estado = objProducto.estado;
    this.descripcion = objProducto.descripcion;
    this.ubicacion = objProducto.ubicacion;
};

/*---------------------------------------------Funciones---------------------------------------------------*/
/*--------Crear Producto---------*/
Producto.crear = (newObjProducto, res) => {
    //SE DEBE DE MANDAR LAS FOTOS A SU TABLA ESPECIFICA, RECORDAR QUE SON VARIAS Y SE DEBE DE ITERAR
    let insertQuery = `insert into producto (idCategoria, nombre, costo, estado, descripcion, ubicacion) 
                VALUES ('${newObjProducto.categoria}', '${newObjProducto.nombre}', '${newObjProducto.costo}',
                '${newObjProducto.estado}','${newObjProducto.descripcion}','${newObjProducto.ubicacion}')`;
    conexion.query(insertQuery, (err, resRegistrarProducto) => {
        if (err) return res({ msj: 'El producto no pudo ser registrado' + err }, null)

        return res(null, { msj: 'El producto fue registrado correctamente' })
    })
};

/*-------Obtener Productos------*/
Producto.obtenerTodos = (resultado) => {
    conexion.query("select * from producto", (err, res) => {
        if (err) throw err;
        return resultado(null, res);
    });
};

/*--------------------Funciones de Busqueda--------------------*/
Producto.obtenerPorId = (id, resultado) => {
    let obtenerQuery = `select * from producto where idProducto = ${id}`
    conexion.query(obtenerQuery, (err, res) => {
        if (err) return resultado({ msj: 'Hubo un error' + err }, null)

        return resultado(null, res)
    })
}
Producto.obtenerPorUbi = (departamento, resultado) => {
    let obtenerQuery = `select * from producto where ubicacion = '${departamento}'`  //Hay que definir que columnas se quieren de la tabla producto
    conexion.query(obtenerQuery, (err, res) => {
        if (err)
            return resultado({ msj: 'Hubo un error' + err }, null)
        else if (res)
            return resultado(null, res)
        else
            return resultado({ msj: 'Productos no encontrado' }, null)
    })
}
Producto.obtenerPorCat = (idC, resultado) => {
    let obtenerQuery = `select * from producto where idCategoria = '${idC}'`  //Hay que definir que columnas se quieren de la tabla producto
    conexion.query(obtenerQuery, (err, res) => {
        if (err)
            return resultado({ msj: 'Hubo un error' + err }, null)
        else if (res)
            return resultado(null, res)
        else
            return resultado({ msj: 'Productos no encontrado' }, null)
    })
}
Producto.obtenerPorCosto = (inter1, inter2, resultado) => {
    let obtenerQuery = `select * from producto where costo BETWEEN ${inter1} AND ${inter2}`  //Hay que definir que columnas se quieren de la tabla producto
    conexion.query(obtenerQuery, (err, res) => {
        if (err)
            return resultado({ msj: 'Hubo un error' + err }, null)
        else if (res)
            return resultado(null, res)
        else
            return resultado({ msj: 'Productos no encontrado' }, null)
    })
}
/*-------------------------------------------------------------*/

/*-------Actualizar por id------*/
Producto.actualizarPorId = (id, newObjProducto, resultado) => {
console.log("Id",id)
console.log("Esto recibe de frontend ",newObjProducto)
//SE QUITO IDCATEGORIA PARA QUE FUNCIONE EL ACTUALIZAR
    let actualizarQuery = `UPDATE producto SET nombre = '${newObjProducto.nombre}', 
                            costo = '${newObjProducto.costo}', estado = '${newObjProducto.estado}', descripcion = '${newObjProducto.descripcion}', 
                            ubicacion = '${newObjProducto.ubicacion}' WHERE idProducto = '${id}'`
    conexion.query(actualizarQuery, (err, res) => {
        if (err) throw err;
        /*changedRows consigue el numero de filas que hayan sido cambiadas en sus valores en un UPDATE de la base de datos*/
        //else if (res.changedRows == 0)
        //  return resultado(null, { msj: 'No hubo cambios' }, null)

        return resultado(null, res)
        }
    )
}

/*-----Eliminar un producto-----*/
Producto.eliminarPorId = (id, resultado) => {
    let eliminarQuery = `DELETE FROM producto WHERE idProducto = '${id}'`
    conexion.query(eliminarQuery, (err, res) => {
        if (err)
            return resultado({ msj: `Hubo un error '${err}'` }, null)
        /*affectedRows consigue el numero de filas afectadas 
        en un INSERT, UPDATE o DELETE de la base de datos*/
        else if (res.affectedRows == 0)
            return resultado({ msj: 'No se elimino ningun producto' }, null)
        else
            /*return resultado(null, res)*/
            return resultado(null, { msj: 'Producto eliminado' })
    })
}

/*Eliminar todos los productos(debe cambiarse con respecto al usuario)*/
Producto.eliminarTodosPorUsuario = (resultado) => {                                               // Importante cambiar
    let eliminarQuery = 'DELETE FROM producto'                                                    // Importante cambiar        
    conexion.query(eliminarQuery, (err, res) => {                                                 // Importante cambiar            
        if (err)                                                                                   // Importante cambiar
            return resultado({ msj: `Hubo un error '${err}'` }, null)                               // Importante cambiar                            
        else if (res.affectedRows == 0)                                                            // Importante cambiar
            return resultado({ msj: 'No se elimino ningun producto' }, null)                        // Importante cambiar                                                            
        else                                                                                      // Importante cambiar
            return resultado(null, { msj: `Numero de productos eliminados '${res.affectedRows}'` }) // Importante cambiar                                                                    
    })                                                                                            // Importante cambiar    
}                                                                                                 // Importante cambiar

module.exports = Producto;
