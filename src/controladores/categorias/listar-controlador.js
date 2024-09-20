const repositorioCategoria = require('../../repositorios/categorias-repositorio')

async function listarCategorias(request, response) {
  try {
    const categorias = await repositorioCategoria.encontrar()

    return response.json(categorias)
  } catch (err) {
    console.log(err)

    return response.status(500).json({ mensagem: 'Erro interno no servidor.' })
  }
}

module.exports = { listarCategorias }
