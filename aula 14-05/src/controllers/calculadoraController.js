function somar(req, res) {

  const { numero1, numero2 } = req.body

  const resultado = numero1 + numero2

  res.json({
    operacao: 'soma',
    resultado: resultado
  })

}

function subtrair(req, res) {
    const { numero1, numero2 } = req.body

    const resultado = numero1 - numero2

    res.json({
    operacao: 'subtracao',
    resultado: resultado
  })
}
function multiplicar(req, res) {
    const { numero1, numero2 } = req.body

    const resultado = numero1 * numero2  

    res.json({
    operacao: 'multiplicacao',
    resultado: resultado
  }) 
}
function dividir(req, res) {
    const { numero1, numero2 } = req.body

    const resultado = numero1 / numero2

    res.json({
    operacao: 'divisao',
    resultado: resultado
  })

}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir
}