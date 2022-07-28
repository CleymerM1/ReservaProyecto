const express = require('express');
const mensajeController = require('../controllers/mensajeController');
const router = express.Router();

router.post('/crearMensaje',mensajeController.crearMensaje);


module.exports = router;