const express = require('express')

const router = express.Router()

const controllerCinema = require('../controllers/controllerCinema')

router.get('/', controllerCinema.listarFilmes)

router.post('/', controllerCinema.criarFilme)

module.exports = router