const express = require('express')
const { listarCategorias } = require('../controladores/categorias/listar-controlador')
const categoriaRotas = express()

categoriaRotas.get('/categoria', listarCategorias)

module.exports = { categoriaRotas }
