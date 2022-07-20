
const express =require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config();
const conexion = require('./config/conexion');
const cors = require('cors')
path = require("path")

app.use(express.json({limit: '50mb'}));

//Configurar CORS
const whiteList = [process.env.FRONTEND_URL]
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
}

//rutas
app.use(cors())
app.use(express.json());
app.use('/usuario', require('./routes/usuario'))
app.use('/categoria',require('./routes/categoria'))
app.use('/producto',require('./routes/producto'))


const port= (process.env.port || 3000);

//iniciar servidor
app.listen(port,()=>{
    console.log('Dentro'+ port);
});
