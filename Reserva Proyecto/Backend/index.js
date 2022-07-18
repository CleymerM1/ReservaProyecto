
const express =require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config();
const conexion = require('./config/conexion');
const cors = require('cors');
var cron = require('node-cron');
const Categoria = require('./models/categoria.js');
path = require("path")
fs = require("fs");
const {v4: uuidv4} = require("uuid")

app.use(express.json({limit: '50mb'}));

/*// Configurar CORS
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
*/


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



//VER PRODUCTO
const indiceDeProducto = (idProducto) => {
   
  }
  const existeProducto = ( producto) => {
    return indiceDeProducto(producto.id) !== -1;
  }
  
  
  const DOMINIO_PERMITIDO_CORS = "http://localhost:4200",
    DIRECTORIO_FOTOS = path.join(__dirname, "fotos_productos"),
    DIRECTORIO_DIST = path.join(__dirname, "dist"),
    PUERTO = 3000;

  // Fotos
  app.use("/foto_producto", express.static(DIRECTORIO_FOTOS));
  // Estático
  app.use("/", express.static(DIRECTORIO_DIST));
  
  if (!fs.existsSync(DIRECTORIO_FOTOS)) {
    fs.mkdirSync(DIRECTORIO_FOTOS);
  }
  app.use((req, res, next) => {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", DOMINIO_PERMITIDO_CORS);
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "DELETE");
    next();
  });
  app.delete("/producto", async (req, res) => {
  
    if (!req.query.id) {
      res.end("Not found");
      return;
    }
    const idProducto = req.query.id;
    await productoModel.eliminar(idProducto);
    res.json(true);
  });

  app.post('/fotos_producto', (req, res) => {
    const form = formidable({
      multiples: true,
      uploadDir: DIRECTORIO_FOTOS,
    });
  
    form.parse(req, async (err, fields, files) => {
      const idProducto = fields.idProducto;
      for (let clave in files) {
        const file = files[clave];
        const nombreArchivo = file.name;
        await productoModel.agregarFoto(idProducto, nombreArchivo)
      }
    });
  
    form.on("fileBegin", (name, file) => {
      const extension = path.extname(file.name);
      const nuevoNombre = uuidv4().concat(extension);
      file.path = path.join(DIRECTORIO_FOTOS, nuevoNombre);
      file.name = nuevoNombre;
    })
  
    form.on("end", () => {
      res.json({
        respuesta: true,
      })
    })
  
  });

  
