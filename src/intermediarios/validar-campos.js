function validarCampos(req, res, next) {
  const { descricao, valor, data, categoria_id, tipo } = req.body

  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    return res
      .status(400)
      .json({ mensagem: 'Todos os campos obrigatórios devem ser informados.' })
  }

  next()
}

module.exports = { validarCampos }
