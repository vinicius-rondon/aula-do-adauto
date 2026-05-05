const db = require('../../db/connection')

// LISTAR
exports.listar = (req, res) => {
    db.query('SELECT * FROM itens', (err, results) => {
        if (err) return res.status(500).json(err)
        res.status(200).json(results)
    })
}

// BUSCAR POR ID
exports.buscarPorId = (req, res) => {
    const { id } = req.params

    db.query('SELECT * FROM itens WHERE id = ?', [id], (err, results) => {
        if (results.length === 0) {
            return res.status(404).json({ erro: 'Item não encontrado' })
        }
        res.status(200).json(results[0])
    })
}

// CRIAR
exports.criar = (req, res) => {
    const { nome, descricao, local_encontrado, data_encontro } = req.body

    if (!nome || !descricao || !local_encontrado || !data_encontro) {
        return res.status(400).json({ erro: 'Campos obrigatórios' })
    }

    const sql = `
        INSERT INTO itens (nome, descricao, local_encontrado, data_encontro)
        VALUES (?, ?, ?, ?)
    `

    db.query(sql, [nome, descricao, local_encontrado, data_encontro], (err) => {
        if (err) return res.status(500).json(err)

        res.status(201).json({ mensagem: 'Item cadastrado' })
    })
}

// ATUALIZAR
exports.atualizar = (req, res) => {
    const { id } = req.params
    const { nome, descricao, local_encontrado, data_encontro } = req.body

    const sql = `
        UPDATE itens
        SET nome=?, descricao=?, local_encontrado=?, data_encontro=?
        WHERE id=?
    `

    db.query(sql, [nome, descricao, local_encontrado, data_encontro, id], (err, result) => {
        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: 'Item não encontrado' })
        }

        res.status(200).json({ mensagem: 'Atualizado com sucesso' })
    })
}

// DEVOLVER
exports.devolver = (req, res) => {
    const { id } = req.params

    db.query(
        'UPDATE itens SET status="devolvido" WHERE id=?',
        [id],
        (err, result) => {
            if (result.affectedRows === 0) {
                return res.status(404).json({ erro: 'Item não encontrado' })
            }

            res.status(200).json({ mensagem: 'Item devolvido' })
        }
    )
}

// DELETE
exports.deletar = (req, res) => {
    const { id } = req.params

    db.query('DELETE FROM itens WHERE id=?', [id], (err, result) => {
        if (result.affectedRows === 0) {
            return res.status(404).json({ erro: 'Item não encontrado' })
        }

        res.status(200).json({ mensagem: 'Item deletado' })
    })
}