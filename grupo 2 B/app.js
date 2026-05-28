const express = require('express')

const app = express()

app.use(express.json())

const { conectar } = require('./src/db/dbConexao')

conectar()

const filmesRoutes = require('./src/routes/routesFilmes')
const clientesRoutes = require('./src/routes/routesClientes')
const salasRoutes = require('./src/routes/routeSala')
const sessoesRoutes = require('./src/routes/routesSessoes')
const ingressosRoutes = require('./src/routes/routesIngresso')

app.use('/filmes', filmesRoutes)

app.use('/clientes', clientesRoutes)

app.use('/salas', salasRoutes)

app.use('/sessoes', sessoesRoutes)

app.use('/ingressos', ingressosRoutes)

app.listen(3000, () => {

   console.log('Servidor rodando')

})