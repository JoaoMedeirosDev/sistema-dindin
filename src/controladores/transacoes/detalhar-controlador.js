const repositorioTransacao = require('../../repositorios/transacoes-repositorio')

async function detalharTransacao(request, response) {
  const { id: usuarioId } = request.usuario
  const { transacaoId } = request.params

  try {
    const transacao = await repositorioTransacao.encontrarPeloId(transacaoId, usuarioId)

    if (!transacao) {
      return response.status(404).json({ mensagem: 'Transação não encontrada.' })
    }

    return response.json(transacao)
  } catch (err) {
    console.error(err)

    return response.status(500).json({ mensagem: 'Erro interno no servidor.', err })
  }
}

module.exports = { detalharTransacao }
