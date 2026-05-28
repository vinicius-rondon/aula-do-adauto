const express = require('express')

const router = express.Router()

const controllerCinema = require('../controllers/controllerCinema')

router.get('/', controllerCinema.listarIngressos)

router.post('/', controllerCinema.venderIngresso)

module.exports = router