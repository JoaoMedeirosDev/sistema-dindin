const repositorioTransacao = require('../../repositorios/transacoes-repositorio')

const obterExtrato = async (req, res) => {
  const { id: usuarioId } = req.usuario
  try {
    const extrato = await repositorioTransacao.encontrar(usuarioId)

    let entrada = 0
    let saida = 0

    extrato.forEach((transacao) => {
      if (transacao.tipo === 'entrada') {
        entrada += transacao.valor
      } else if (transacao.tipo === 'saida') {
        saida += transacao.valor
      }
    })
    const valores = {
      entrada,
      saida,
    }
    res.status(200).json(valores)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

module.exports = { obterExtrato }
