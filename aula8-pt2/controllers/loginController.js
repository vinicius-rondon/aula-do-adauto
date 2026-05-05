exports.logarUsuarios = (req, res) => {
  const { nome, email, idade } = req.body

  if (!nome) {
    return res.status(400).json({
      success: false,
      error: "Nome é obrigatório"
    })
  }

  if(nome == null){
    return res.status(400).json({
        sucess: false,
        error:"insira algum nome"
    })
  }

  if (nome.length < 3) {
    return res.status(400).json({
      success: false,
      error: "Pelo menos 3 caracteres"
    })
  }

  if (!email || !email.includes("@")) {
    return res.status(400).json({
      success: false,
      error: "Email inválido"
    })
  }

  if (idade == null || idade < 17 ) {
    return res.status(400).json({
      success: false,
      error: "Idade inválida"
    })
  }
  if (idade = 18 || idade > 19 ) {
    return res.status(400).json({
      success: true,
      message:"idade valida"
    })
  }

  return res.status(201).json({
    success: true,
    message: "Usuário criado com sucesso",
    data: { nome, email, idade }
  })
}