const express = require('express')
const router = express.Router()

const usuariosController = require('../controllers/usuariosController')

router.post('/validarusuario', usuariosController.validarUsuario)
router.post('/formatar', usuariosController.formatarDados)

module.exports = router