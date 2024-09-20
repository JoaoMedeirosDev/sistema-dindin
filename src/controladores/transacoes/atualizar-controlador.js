const repositorioTransacao = require('../../repositorios/transacoes-repositorio')

const atualizarTransacao = async (req, res) => {
  try {
    const usuarioAutenticado = req.usuario
    const { id } = req.params
    const { descricao, valor, data, categoria_id, tipo } = req.body

    const transacaoAtualizada = await repositorioTransacao.editar(
      id,
      descricao,
      valor,
      data,
      categoria_id,
      tipo,
    )

    if (!transacaoAtualizada) {
      return res.status(404).json({ mensagem: 'Transação não encontrada.' })
    }

    if (transacaoAtualizada.usuario_id !== usuarioAutenticado.id) {
      return res
        .status(403)
        .json({ mensagem: 'Sem permissão para atualizar esta transação.' })
    }

    res.status(204).send()
  } catch (err) {
    console.error(err)
    res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

module.exports = { atualizarTransacao }
