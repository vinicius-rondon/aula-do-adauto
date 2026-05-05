exports.validarUsuario = (req, res) => {
  const { nome, email, idade } = req.body

  let erros = []

  if (!nome) {
    erros.push("Nome é obrigatório")
  }

  if (!email || !email.includes("@")) {
    erros.push("Email inválido")
  }

  if (idade == null || idade < 18) {
    erros.push("Usuário deve ser maior de idade")
  }

  if (erros.length > 0) {
    return res.status(400).json({
      valido: false,
      erros: erros
    })
  }

  return res.status(200).json({
    valido: true,
    erros: []
  })
}
exports.formatarDados = (req, res) => {
  const { nome, telefone } = req.body

  const nomeFormatado = nome.toUpperCase()

  const ddd = telefone.slice(0, 2)
  const parte1 = telefone.slice(2, 7)
  const parte2 = telefone.slice(7, 11)

  const telefoneFormatado = `(${ddd}) ${parte1}-${parte2}`

  return res.json({
    nomeFormatado,
    telefoneFormatado
  })
}