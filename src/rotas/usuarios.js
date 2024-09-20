const express = require('express')
const { login } = require('../controladores/usuarios/login-controlador')
const { cadastrarUsuario } = require('../controladores/usuarios/cadastrar-controlador')
const { validarJwt } = require('../intermediarios/validar-jwt')
const { detalharUsuario } = require('../controladores/usuarios/detalhar-controlador')
const { atualizarUsuario } = require('../controladores/usuarios/atualizar-controlador')

const usuarioRotas = express()

usuarioRotas.post('/login', login)
usuarioRotas.post('/usuario', cadastrarUsuario)

usuarioRotas.use(validarJwt)
usuarioRotas.get('/usuario', detalharUsuario)
usuarioRotas.put('/usuario', atualizarUsuario)

module.exports = { usuarioRotas }
