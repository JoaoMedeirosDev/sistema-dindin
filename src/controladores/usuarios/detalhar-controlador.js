const repositorioUsuario = require('../../repositorios/usuarios-repositorio')

const detalharUsuario = async (req, res) => {
  const usuarioAutenticado = req.usuario

  const usuario = await repositorioUsuario.encontrarPeloId(usuarioAutenticado.id)

  const { id, nome, email } = usuario

  res.status(200).json({ id, nome, email })
}

module.exports = { detalharUsuario }
