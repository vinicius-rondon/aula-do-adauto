const express = require('express')

const router = express.Router()

const controllerCinema = require('../controllers/controllerCinema')

router.get('/', controllerCinema.listarSessoes)

router.post('/', controllerCinema.criarSessao)

router.get('/:id/resumo', controllerCinema.resumoSessao)

module.exports = router