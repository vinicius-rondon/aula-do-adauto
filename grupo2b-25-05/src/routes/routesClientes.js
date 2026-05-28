const express = require('express')

const router = express.Router()

const controllerCinema = require('../controllers/controllerCinema')

router.get('/', controllerCinema.listarClientes)

router.post('/', controllerCinema.criarCliente)

module.exports = router