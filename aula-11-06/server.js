const express = require('express');
const fraseRouter = require('./routes/frases');

const app = express();

app.use(express.json());
app.use('/', fraseRouter);

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});
