const conexion = require('../config/conexion');

const Categoria = function(objCategoria){
    this.nombre = objCategoria.nombre;
    this.descripcion = objCategoria.descripcion;
    this.imagen = objCategoria.imagen;
};

//CREAMOS UNA CATEGORIA
Categoria.crear = (newObjCategoria, res)=>{


    let agregaCategoria = `insert into categoria (nombreCategoria, descripcion, imagen) VALUES ('${newObjCategoria.nombre}','${newObjCategoria.descripcion}','${newObjCategoria.imagen}')`;
    
    conexion.query(agregaCategoria,(err, resultado)=>{
        if (err) return res({msj: 'Ha ocurrido un error'+err}, null)
        
        return res(null,{msj: 'La categoria fue agregada correctamente'})
    })
};

Categoria.obtener = (resultado) =>{
    conexion.query("select * from categoria", (err, rows)=>{
        if(err) throw err;

        rows = rows.map( categoria => {
            categoria.imagen = categoria.imagen.toString('ascii')
            return categoria;
        } )

        resultado(null, rows);
    });
};

Categoria.eliminar = (id, res) =>{
    let eliminar = `delete from categoria where idCategoria='${id}'`
    conexion.query(eliminar, (err, data)=>{
        if(err) return res(error,null)
        return res(null,{msj:'Categoria eliminada'})
    })
};

Categoria.obtenerPorId = (id, resultado) =>{
    conexion.query(`select * from categoria where idCategoria = ${id}`, (err, rows)=>{
        if(err) throw err;

        rows = rows.map( categoria => {
            categoria.imagen = categoria.imagen.toString('ascii')
            return categoria;
        } )

        resultado(null, rows);
    });
}


        
module.exports = Categoria;
