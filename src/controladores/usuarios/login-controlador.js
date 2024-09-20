const repositorioUsuario = require('../../repositorios/usuarios-repositorio')
const { compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
require('dotenv/config')

async function login(request, response) {
  const { email, senha } = request.body

  if (!email || !senha) {
    return response.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' })
  }

  try {
    const usuario = await repositorioUsuario.encontrarPeloEmail(email)

    if (!usuario) {
      return response.status(401).json({ mensagem: 'Usuário e/ou senha inválido(s).' })
    }

    const senhaEstaCorreta = await compare(senha, usuario.senha)

    if (!senhaEstaCorreta) {
      return response.status(401).json({ mensagem: 'Usuário e/ou senha inválido(s).' })
    }

    const JWT_SECRET = process.env.JWT_SECRET

    const token = sign(
      {
        id: usuario.id,
      },
      JWT_SECRET,
      {
        expiresIn: '7d',
      },
    )

    delete usuario.senha

    return response.json({ usuario, token })
  } catch (err) {
    console.error(err.message)
  }
}

module.exports = { login }
