const express = require('express')
const router = express.Router()
const loginUsuarios = require('../controllers/loginController')

router.post('/', loginUsuarios.logarUsuarios)

module.exports = router