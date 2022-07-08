const express = require('express');
const conexion = require('../config/conexion');
const router = express.Router();
const ProductoController = require('../controllers/productoController');


router.post('/registro', ProductoController.crearProducto);
router.get('/', ProductoController.obtenerProductos);



module.exports = router;