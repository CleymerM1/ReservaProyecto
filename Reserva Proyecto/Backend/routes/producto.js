/*--------------------------------------IMPORTS----------------------------------*/
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/*---------------------------------------CRUD------------------------------------*/
router.post('/registro', productoController.crearProducto);
router.post('/denuncia/:idP/:idU', productoController.denunciarUsuario);
router.get('/', productoController.obtenerProductos);
router.get('/:filter/:value1', productoController.filtrarProductos);
router.get('/:id', productoController.obtenerPorCategoria);
router.put('/actualizar/:id', productoController.actualizarProducto);
router.delete('/:idP', productoController.eliminarProducto);
router.put('/contador/:id', productoController.actualizarContador);



/*-------------------------------------------------------------------------------*/
module.exports = router;
