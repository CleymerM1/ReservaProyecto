/*-------------------------------Import para la conexion con la base de datos------------------------------*/
const conexion = require('../config/conexion');


/*------------------------------------------Creacion de clases---------------------------------------------*/
const Producto = function (objProducto) {
    this.categoria = objProducto.categoria;
    this.idProducto = objProducto.idProducto;
    this.nombre = objProducto.nombre;
    this.costo = objProducto.costo;
    this.estado = objProducto.estado;
    this.descripcion = objProducto.descripcion;
    this.ubicacion = objProducto.ubicacion;
    this.idUsuario = objProducto.idUsuario;
    this.imagen = objProducto.imagen;
};

/*---------------------------------------------Funciones---------------------------------------------------*/
/*--------Crear Producto---------*/
Producto.crear = (newObjProducto, res) => {
    //SE DEBE DE MANDAR LAS FOTOS A SU TABLA ESPECIFICA, RECORDAR QUE SON VARIAS Y SE DEBE DE ITERAR
    let insertQuery = `insert into producto (idCategoria, nombre, costo, estado, descripcion, ubicacion, idUsuario,imagen) 
                VALUES ( '${newObjProducto.categoria}','${newObjProducto.nombre}','${newObjProducto.costo}',
                '${newObjProducto.estado}','${newObjProducto.descripcion}','${newObjProducto.ubicacion}','${newObjProducto.idUsuario}', '${newObjProducto.imagen}')`;
    conexion.query(insertQuery, (err, resRegistrarProducto) => {
        if (err) return res({ msj: 'El producto no pudo ser registrado' + err }, null)

        return res(null, { msj: 'El producto fue registrado correctamente' })
    })
};

/*-------Obtener Productos------*/
Producto.obtenerTodos = (resultado)=>{
    conexion.query("select * from producto", (err, obj1)=>{
        if(err) throw err;
        rows = rows.map( producto => {
            producto.imagen = producto.imagen?.toString('ascii')
            return producto;
        } )
        resultado(null, rows);
    });
};

/*--------------------Funciones de Busqueda--------------------*/
Producto.obtenerPorId = (id, resultado) => {
    let obtenerQuery = `select * from producto where idProducto = ${id}`
    conexion.query(obtenerQuery, (err, res) => {
        if (err) 
            return resultado({ msj: 'Hubo un error' + err }, null)
        else
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
    console.log(obtenerQuery)
    conexion.query(obtenerQuery, (err, rows) => {
        if (err) throw err
        rows = rows.map( producto => {
            producto.imagen = producto.imagen?.toString('ascii')
            return producto;
        } )
        resultado(null, rows)
    });
};
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

//Estas funciones son para contabilizar los productos mas visitados
Producto.actualizarContador = (res) => {
    let updateQuery = `update producto set contador = contador + 1`
    conexion.query(updateQuery, (err, rows) => {
        if(err) return res({msj: 'Hubo un error' + err}, null);

        return res(null, rows);
    }
    )
};

Producto.obtenerDiezProductosMasVisitados = (idCategoria, departamento, res) => {
    let searchQuery = `SELECT categoria.idCategoria, nombreCategoria, departamento, contador FROM categoria JOIN usuario ON idUsuario = usuario.idUsuario JOIN producto on producto.idCategoria = categoria.idCategoria WHERE (departamento = '${departamento}' AND categoria.idCategoria = ${idCategoria}) order by contador desc limit 10;`
    conexion.query(searchQuery, (err, rows) => {
        if(err) return res({msj: 'Hubo un error' + err}, null);

        return res(null, rows);
    }
    )
};

/*Funciones para las denuncias*/
Producto.crearDenuncia = (obj1, obj2, res) => {
    let fecha = new Date();
    let fechaActual = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear()
    console.log(fechaActual)
    let insertQuery = `insert into denuncias (  idDenunciado, nombreDenunciado, apellidoDenunciado, correoDenunciado, idDenunciante, 
                                                nombreDenunciante, apellidoDenunciante, correoDenunciante, idProducto, nombreProducto, fecha) 
                                                values (${obj1.idU}, '${obj1.nombre}', '${obj1.apellido}', '${obj1.correo}',
                                                        ${obj2.idUsuario}, '${obj2.nombre}', '${obj2.apellido}', '${obj2.correo}',
                                                        ${obj1.idP}, '${obj1.nombreP}', ${fechaActual})`
    conexion.query(insertQuery, (err, data) => {
        if(err)
            return res({msj:err}, null)
        else
            return res(null, {msj:'Se pudo registrar la denuncia'})
    })
}
/*idP es el id del producto
  Cada columna tiene su nombre propio nombre porque al solo dejarlas llamadas hay columnas que el select no trae*/
Producto.denuncia = (idP, idU, res) => {
    //este obtiene datos del producto y su vendedor
    let obtenerQuery = `select usuario.idUsuario idU, usuario.nombre nombre, usuario.apellido apellido, usuario.correo correo, producto.idProducto idP, producto.nombre nombreP from producto 
                        inner join usuario on producto.idUsuario = usuario.idUsuario where producto.idProducto = ${idP}`
    //este obtiene datos del comprador que esta denunciando
    let obtenerUsuario = `select idUsuario, nombre, apellido, correo from usuario where idUsuario = ${idU}`
    conexion.query(obtenerQuery, (err, obj1) => {
        if(err)
            return res(err, null)
        else
            conexion.query(obtenerUsuario, (err, obj2) => {
                if(err)
                    return res(err, null)
                else
                    return res(null, [obj1[0], obj2[0]])
            })
    })
}
module.exports = Producto;
