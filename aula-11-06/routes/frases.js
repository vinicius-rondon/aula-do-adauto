
const express = require('express');
const router = express.Router();
const require = require('./routes/frases');


router.get('/frase', (req, res) => {
    res.json({
        frase: 'ESCOLHA SUA FRASE SECRETA AQUI'
    });
});



module.exports = router;

