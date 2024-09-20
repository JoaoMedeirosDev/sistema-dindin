const repositorioTransacao = require('../../repositorios/transacoes-repositorio')

const excluirTransacao = async (req, res) => {
  try {
    const { id } = req.params
    const { id: usuarioId } = req.usuario

    const transacao = await repositorioTransacao.encontrarPeloId(id, usuarioId)

    if (!transacao || transacao.usuario_id !== usuarioId) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' })
    }

    await repositorioTransacao.deletar(id)
    res.status(204).end()
  } catch (err) {
    console.error(err)
    res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

module.exports = { excluirTransacao }
