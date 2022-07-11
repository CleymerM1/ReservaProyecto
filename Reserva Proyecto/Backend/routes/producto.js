/*--------------------------------------IMPORTS----------------------------------*/
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/*---------------------------------------CRUD------------------------------------*/
router.post('/registro', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:filter/:value1/:value2', productoController.filtrarProductos);
router.get('/:id', productoController.obtenerProducto);
router.put('/actualizar/:id', productoController.actualizarProducto);
router.delete('/:idP', productoController.eliminarProducto);

/*-------------------------------------------------------------------------------*/
module.exports = router;