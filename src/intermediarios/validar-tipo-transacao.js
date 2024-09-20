function validarTipoTransacao(request, response, next) {
  const { tipo } = request.body

  const tipos = ['entrada', 'saida']

  if (!tipos.includes(tipo)) {
    return response.status(400).json({ mensagem: 'Tipo de transação inválido.' })
  }

  next()
}

module.exports = { validarTipoTransacao }
