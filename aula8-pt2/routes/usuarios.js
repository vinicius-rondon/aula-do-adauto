const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')

router.post('/', usuariosController.criarUsuarios)

module.exports = router

