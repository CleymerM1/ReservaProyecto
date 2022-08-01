const express =require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const dotenv=require('dotenv');
app.use(express.json());
dotenv.config();
const conexion = require('./config/conexion');
var cron = require('node-cron');
const Categoria = require('./models/categoria.js');

app.use(express.json({limit: '50mb'}));

//Configurar CORS
/*const whiteList = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: function(origin, callback ) {
        if(whiteList.includes(origin)){
            // Puede consultar la API
            callback(null, true)
        }else {
            // No esta permitido
            callback( new Error('Error de CORS'))
        }
    }
}*/


//MANDA UN CORREO AL USUARIO SUSCRITO A UNA CATEGORIA

 // Ejecutar una tarea cada minuto
 /*
 cron.schedule('* * * * *', () => {
     Categoria.generarPdf( (err, data) => {
         if(err){
             console.log(err)
         }else{
             console.log("Se envio el correo")
         }
     } )

})
para probar la creacion de nuevos anuncios
cron.schedule('1 * 1-28 * *', () => {
    Producto.crearAnuncios((err, data) => {
        if(err)
            console.log(err)
        else
            console.log("se crearon nuevos anuncios")
    })
})*/

// Ejecutar una tarea todos los lunes a las 7 de la mañana
cron.schedule('0 7 * * 1', () => {
    Categoria.generarPdf( (err, data) => {
        if(err){
            console.log(err)
        }else{
            console.log("Se envio el correo")
        }
    } )
})

//Elimina los viejos anuncios y crea nuevos anuncios cada 60 dias
cron.schedule('* * 20 January,March,May,July,September,November *', () => {
    Producto.crearAnuncios((err, data) => {
        if(err)
            console.log(err)
        else
            console.log("se crearon nuevos anuncios")
    })
})

//rutas
app.use(cors())
app.use('/usuario', require('./routes/usuario'))
app.use('/categoria',require('./routes/categoria'))
app.use('/producto',require('./routes/producto'))
app.use('/mensaje', require('./routes/mensajeRoutes'))



const port= (process.env.port || 3000);

//iniciar servidor
app.listen(port,()=>{
    console.log('Dentro'+ port);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
