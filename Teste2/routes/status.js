const status = require ("express").Router();

status.get("/", (req,res)=>{
    res.json({
        mensagen: "Bem vindo a api!!"

    });
})

module.exports = status;