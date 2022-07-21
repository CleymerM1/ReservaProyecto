/*--------------------------------------IMPORTS----------------------------------*/
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

/*---------------------------------------CRUD------------------------------------*/
router.post('/registro', productoController.crearProducto);
router.post('/denuncia/:id',productoController.denunciarUsuario);
router.get('/', productoController.obtenerProductos);
router.get('/detalle/:id', productoController.obtenerProducto);
//router.get('/:filter/:value1', productoController.filtrarProductos);
router.get('/:id', productoController.obtenerPorCategoria);
router.put('/actualizar/:id', productoController.actualizarProducto);
router.delete('/:idP', productoController.eliminarProducto);
router.put('/contador/:id', productoController.actualizarContador);
router.post('/subir-imagen', productoController.subirImagen);
router.get('/imagenes/:idProducto', productoController.obtenerImagenes);
router.post('/calificar', productoController.calificarProducto);
router.get('/calificar/obtener-calificacion/:idProducto/:idUsuario/', productoController.obtenerCalificacionUsuario);
router.get('/calificar/obtener-calificacion/:idProducto', productoController.obtenerCalificacionProducto);
router.get('/denuncia/obtenerDenuncias', productoController.obtenerDenuncias);
router.delete('/denuncia/eliminar/:id', productoController.eliminarDenuncia);


/*-------------------------------------------------------------------------------*/
module.exports = router;

