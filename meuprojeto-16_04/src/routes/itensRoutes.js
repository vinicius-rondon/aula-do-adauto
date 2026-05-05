const express = require('express')
const router = express.Router()

const controller = require('../db/connection')

router.get('/', controller.listar)
router.get('/:id', controller.buscarPorId)
router.post('/', controller.criar)
router.put('/:id', controller.atualizar)
router.put('/:id/devolver', controller.devolver)
router.delete('/:id', controller.deletar)

module.exports = router