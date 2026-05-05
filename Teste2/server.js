const express = require('express')
const app = express()
app.use(express.json())

const status = require("./routes/status")
app.use("/status", status)

const cursos = require("./routes/cursos")
        app.use("/cursos", cursos)

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`API rodando em http://localhost:${PORT}`);
    });




