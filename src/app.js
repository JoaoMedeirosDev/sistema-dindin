const express = require('express')
const { usuarioRotas } = require('./rotas/usuarios')
const { transacaoRotas } = require('./rotas/transacoes')
const { categoriaRotas } = require('./rotas/categorias')

const app = express()

app.use(express.json())

app.use(usuarioRotas)
app.use(transacaoRotas)
app.use(categoriaRotas)

module.exports = app
