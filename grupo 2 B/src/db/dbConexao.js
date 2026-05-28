const sql = require('mssql')

const config = {
  user: "web",
  password: "123456",
  server: "187.85.207.115",
  database: "aula",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

async function conectar() {

   try {

      await sql.connect(config)

      console.log('Banco conectado')

   } catch (erro) {

      console.log(erro.message)

   }

}

module.exports = {
   sql,
   conectar
}