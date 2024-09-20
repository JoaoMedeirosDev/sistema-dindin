const express = require('express')
const { cadastrarTransacao } = require('../controladores/transacoes/cadastro-controlador')
const { validarCategoria } = require('../intermediarios/validar-categoria')
const { validarTipoTransacao } = require('../intermediarios/validar-tipo-transacao')
const { validarCampos } = require('../intermediarios/validar-campos')
const { listarTransacoes } = require('../controladores/transacoes/listar-controlador')
const { detalharTransacao } = require('../controladores/transacoes/detalhar-controlador')
const {
  atualizarTransacao,
} = require('../controladores/transacoes/atualizar-controlador')
const { excluirTransacao } = require('../controladores/transacoes/excluir-controlador')
const { obterExtrato } = require('../controladores/transacoes/extrato-controlador')

const transacaoRotas = express()

transacaoRotas.post(
  '/transacao',
  validarCampos,
  validarCategoria,
  validarTipoTransacao,
  cadastrarTransacao,
)
transacaoRotas.get('/transacao', listarTransacoes)
transacaoRotas.get('/transacao/extrato', obterExtrato)
transacaoRotas.get('/transacao/:transacaoId', detalharTransacao)
transacaoRotas.put(
  '/transacao/:id',
  validarCampos,
  validarCategoria,
  validarTipoTransacao,
  atualizarTransacao,
)
transacaoRotas.delete('/transacao/:id', excluirTransacao)

module.exports = { transacaoRotas }
