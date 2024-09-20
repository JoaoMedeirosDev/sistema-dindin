const repositorioCategoria = require('../repositorios/categorias-repositorio')

async function validarCategoria(request, response, next) {
  const { categoria_id } = request.body

  const categoria = await repositorioCategoria.encontrarPeloId(categoria_id)

  if (!categoria) {
    return response.status(404).json({ mensagem: 'Categoria não encontrada.' })
  }

  next()
}

module.exports = { validarCategoria }
