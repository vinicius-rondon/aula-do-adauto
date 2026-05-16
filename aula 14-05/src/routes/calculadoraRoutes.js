const express = require('express')

const router = express.Router()

const calculadoraController = require('../controllers/calculadoraController')

router.post('/somar', calculadoraController.somar)
router.post('/subtrair', calculadoraController.subtrair)
router.post('/multiplicar', calculadoraController.multiplicar)
router.post('/multiplicar', calculadoraController.dividir)
module.exports = router