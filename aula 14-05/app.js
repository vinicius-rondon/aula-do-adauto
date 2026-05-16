const express = require('express')

const app = express()

const calculadoraRoutes = require('./src/routes/calculadoraRoutes')

app.use(express.json())

app.use('/', calculadoraRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 🚀')
})

