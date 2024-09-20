const repositorioTransacao = require('../../repositorios/transacoes-repositorio')

async function listarTransacoes(request, response) {
  const { id: usuarioId } = request.usuario

  try {
    let transacoes

    if (request.query.filtro) {
      const { filtro } = request.query

      if (!Array.isArray(filtro)) {
        return response
          .status(400)
          .json({ mensagem: 'O filtro solicitado precisa ser um array.' })
      }

      transacoes = await repositorioTransacao.encontrarComFiltro(usuarioId, filtro)
    } else {
      transacoes = await repositorioTransacao.encontrar(usuarioId)
    }

    if (!transacoes) {
      transacoes = []
    }

    return response.json(transacoes)
  } catch (err) {
    console.error(err)

    return response.status(500).json({ message: 'Erro interno no servidor.' })
  }
}

module.exports = { listarTransacoes }
