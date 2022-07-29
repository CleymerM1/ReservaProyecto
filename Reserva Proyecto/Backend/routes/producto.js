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

router.post('/aniadirDeseos', productoController.aniadirFavoritos);
router.get('/lista-de-deseos/:idUsuario', productoController.obtenerFavoritos);
router.delete('/eliminarDeseos/:idUsuario/:idProducto', productoController.eliminarFavorito);

//router.post('/anuncio', productoController.crearAnuncios)       este era para probar en el postman
router.get('/obtenerAnuncios', productoController.obtenerAnuncios)
router.delete('/eliminarAnuncio/:idProducto/:idUsuario', productoController.eliminarAnuncio)

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

