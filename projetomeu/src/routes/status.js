const status = require ("express").Router()

status.get("/", (req,res)=>{
    res.json({
        status: "vai toma no cu caralho",
        versao:'6.9.6.9'
    });

}); 

module.exports = status;

