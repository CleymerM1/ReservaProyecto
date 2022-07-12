/*--------------------------------------IMPORTS----------------------------------*/
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/*---------------------------------------CRUD------------------------------------*/
router.post('/registro', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:filter/:value1', productoController.filtrarProductos);
router.get('/:id', ProductoController.obtenerPorCategoria);
router.put('/actualizar/:id', productoController.actualizarProducto);
router.delete('/:idP', productoController.eliminarProducto);
router.put('/contador/:id', ProductoController.actualizarContador);


/*-------------------------------------------------------------------------------*/
module.exports = router;
