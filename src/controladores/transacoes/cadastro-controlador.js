const repositorioTransacao = require('../../repositorios/transacoes-repositorio')

async function cadastrarTransacao(request, response) {
  const { descricao, valor, data, categoria_id, tipo } = request.body
  const { id: usuarioId } = request.usuario

  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    return response
      .status(400)
      .json({ mensagem: 'Todos os campos obrigatórios devem ser informados.' })
  }

  try {
    const transacao = await repositorioTransacao.cadastrar({
      descricao,
      valor,
      data,
      categoria_id,
      tipo,
      usuarioId,
    })

    const transacaoDetalhada = await repositorioTransacao.encontrarPeloId(
      transacao.id,
      usuarioId,
    )

    return response.status(201).json(transacaoDetalhada)
  } catch (err) {
    console.error(err)

    return response.status(500).json({ mensagem: 'Erro interno no servidor.' })
  }
}

module.exports = { cadastrarTransacao }
