const express = require('express')

const router = express.Router()

const controllerCinema = require('../controllers/controllerCinema')

router.get('/', controllerCinema.listarSalas)

router.post('/', controllerCinema.criarSala)

module.exports = router