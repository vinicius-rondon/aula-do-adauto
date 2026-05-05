const express = require('express')
const app = express()

app.use(express.json())

const usuariosRoutes = require('./routes/usuarios')
const loginUsarios = require('./routes/login')

app.use('/usuarios', usuariosRoutes)
app.use('/login',loginUsarios)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})