const { sql } = require('../db/dbConexao')

async function listarFilmes(req, res) {

   try {

      const resultado = await sql.query(`
         SELECT * FROM dbo.cinema_filmes
      `)

      res.json(resultado.recordset)

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function criarFilme(req, res) {

   try {

      const {
         titulo,
         classificacao,
         duracao_minutos,
         genero
      } = req.body

      await sql.query(`
         INSERT INTO dbo.cinema_filmes
         (
            titulo,
            classificacao,
            duracao_minutos,
            genero
         )

         VALUES

         (
            '${titulo}',
            ${classificacao},
            ${duracao_minutos},
            '${genero}'
         )
      `)

      res.json({
         mensagem: 'Filme criado'
      })

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function listarClientes(req, res) {

   try {

      const resultado = await sql.query(`
         SELECT * FROM dbo.cinema_clientes
      `)

      res.json(resultado.recordset)

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function criarCliente(req, res) {

   try {

      const {
         nome,
         cpf,
         email
      } = req.body

      await sql.query(`
         INSERT INTO dbo.cinema_clientes
         (
            nome,
            cpf,
            email
         )

         VALUES

         (
            '${nome}',
            '${cpf}',
            '${email}'
         )
      `)

      res.json({
         mensagem: 'Cliente criado'
      })

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function listarSalas(req, res) {

   try {

      const resultado = await sql.query(`
         SELECT * FROM dbo.cinema_salas
      `)

      res.json(resultado.recordset)

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function criarSala(req, res) {

   try {

      const {
         nome,
         capacidade,
         tipo
      } = req.body

      await sql.query(`
         INSERT INTO dbo.cinema_salas
         (
            nome,
            capacidade,
            tipo
         )

         VALUES

         (
            '${nome}',
            ${capacidade},
            '${tipo}'
         )
      `)

      res.json({
         mensagem: 'Sala criada'
      })

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function listarSessoes(req, res) {

   try {

      const resultado = await sql.query(`
         SELECT * FROM dbo.cinema_sessoes
      `)

      res.json(resultado.recordset)

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function criarSessao(req, res) {

   try {

      const {
         filme_id,
         sala_id,
         data_hora,
         valor_ingresso,
         status
      } = req.body

      await sql.query(`
         INSERT INTO dbo.cinema_sessoes
         (
            filme_id,
            sala_id,
            data_hora,
            valor_ingresso,
            status
         )

         VALUES

         (
            ${filme_id},
            ${sala_id},
            '${data_hora}',
            ${valor_ingresso},
            '${status}'
         )
      `)

      res.json({
         mensagem: 'Sessão criada'
      })

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function listarIngressos(req, res) {

   try {

      const resultado = await sql.query(`
         SELECT * FROM dbo.cinema_ingressos
      `)

      res.json(resultado.recordset)

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function venderIngresso(req, res) {

   try {

      const {
         sessao_id,
         cliente_id,
         assento,
         valor_pago,
         status
      } = req.body

      await sql.query(`
         INSERT INTO dbo.cinema_ingressos
         (
            sessao_id,
            cliente_id,
            assento,
            valor_pago,
            status
         )

         VALUES

         (
            ${sessao_id},
            ${cliente_id},
            '${assento}',
            ${valor_pago},
            '${status}'
         )
      `)

      res.json({
         mensagem: 'Ingresso vendido'
      })

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

async function resumoSessao(req, res) {

   try {

      const id = req.params.id

      const resultado = await sql.query(`

         SELECT

         s.id as sessao,

         f.titulo as filme,

         sa.nome as sala,

         sa.capacidade,

         COUNT(i.id) as ingressosVendidos,

         sa.capacidade - COUNT(i.id)
         as lugaresDisponiveis,

         SUM(i.valor_pago)
         as faturamento,

         s.status

         FROM dbo.cinema_sessoes s

         JOIN dbo.cinema_filmes f
         ON s.filme_id = f.id

         JOIN dbo.cinema_salas sa
         ON s.sala_id = sa.id

         LEFT JOIN dbo.cinema_ingressos i
         ON i.sessao_id = s.id

         WHERE s.id = ${id}

         GROUP BY

         s.id,
         f.titulo,
         sa.nome,
         sa.capacidade,
         s.status

      `)

      res.json(resultado.recordset[0])

   } catch (erro) {

      console.log(erro.message)

      res.status(500).json({
         erro: erro.message
      })

   }

}

module.exports = {

   listarFilmes,
   criarFilme,

   listarClientes,
   criarCliente,

   listarSalas,
   criarSala,

   listarSessoes,
   criarSessao,

   listarIngressos,
   venderIngresso,

   resumoSessao

}