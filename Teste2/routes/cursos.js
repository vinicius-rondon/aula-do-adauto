const cursos = require ("express").Router();

cursos.get('/', (req,res)=>{
    res.json({
     curso: 'desenvolvimento de sistemas',
     carga_horária: '120hrs',
    });
})

module.exports = cursos;