 const express = require("express");

const app = express();
app.use(express.json());

const status = require("./src/routes/status");
app.use("/status", status)

const PORT = 3000
app.listen(PORT,( ) => {
    console.log(`API rodando em http://localhost:${PORT}`);
    });




