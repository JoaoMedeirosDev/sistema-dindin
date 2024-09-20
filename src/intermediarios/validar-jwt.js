const { verify } = require('jsonwebtoken')
const repositorioUsuario = require('../repositorios/usuarios-repositorio')
require('dotenv/config')

async function validarJwt(request, response, next) {
  if (!request.headers.authorization) {
    return response.status(401).json({ mensagem: 'Token de acesso necessário.' })
  }

  const [_, token] = request.headers.authorization.split(' ')

  let decodificado

  try {
    decodificado = verify(token, process.env.JWT_SECRET)
  } catch (err) {
    return response.status(401).json({ mensagem: 'Token inválido.' })
  }

  const { id } = decodificado

  try {
    const usuario = await repositorioUsuario.encontrarPeloId(id)

    if (!usuario) {
      return response.status(401).json({ mensagem: 'Usuário inválido.' })
    }

    delete usuario.senha

    request.usuario = usuario

    next()
  } catch (err) {
    console.error(err.message)

    return response.status(500).json({ mensagem: 'Erro Interno no servidor.' })
  }
}

module.exports = { validarJwt }
