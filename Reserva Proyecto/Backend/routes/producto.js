/*--------------------------------------IMPORTS----------------------------------*/
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/*---------------------------------------CRUD------------------------------------*/
router.post('/registro', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:filter/:value1/:value2', productoController.filtrarProductos);
router.get('/:idP', productoController.obtenerProducto);
router.put('/:idP', productoController.actualizarProducto);
router.delete('/:idP', productoController.eliminarProducto);

/*-------------------------------------------------------------------------------*/
module.exports = router;