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

Categoria.eliminar = (newObjCat, res) =>{
    let buscarCat =`selec idCategoria from categoria where nombreCategoria = '${newObjCat.nombre}'`;
    conexion.query(buscarCat, (err, data)=>{
        if(err) return res(error, null)
        if(data.lenght){
            let idCat = Object.values(JSON.parse(JSON.stringify(data[0])))
            let eliminarC = `delete from categoria where idCategoria = '${idCat}'`;
            conexion.query(eliminarC, (error, respuesta)=>{
                if(error) return res({msj: 'La categoria no pudo ser eliminada' + error})
                return res({msj:'Categoria eliminada'})
            })
        }
    })
};

        
module.exports = Categoria;
