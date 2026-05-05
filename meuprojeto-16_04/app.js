const express = require('express')
const app = express()

app.use(express.json())

const itensRoutes = require('./src/routes/itensRoutes')

app.use('/itens', itensRoutes)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`)
})