const { db } = require('../config/db')

async function cadastrar(dados) {
  const { tipo, descricao, valor, data, categoria_id, usuarioId } = dados

  const query = `
    INSERT INTO transacoes
    (tipo, descricao, valor, data, categoria_id, usuario_id)
    VALUES
    ($1, $2 , $3, $4, $5, $6)
    RETURNING *
  `

  const { rows } = await db.query(query, [
    tipo,
    descricao,
    valor,
    data,
    categoria_id,
    usuarioId,
  ])

  return rows[0]
}

async function encontrar(usuarioId) {
  const query = `
    SELECT t.*,
      c.descricao AS categoria_nome
    FROM transacoes t
    LEFT JOIN categorias c
    ON c.id = t.categoria_id
    WHERE usuario_id = $1
  `

  const { rows } = await db.query(query, [usuarioId])
  return rows
}

async function encontrarComFiltro(usuarioId, filtro) {
  const query = `
   SELECT t.*,
    c.descricao AS categoria_nome
   FROM transacoes t
   LEFT JOIN categorias c
   ON c.id = t.categoria_id
   WHERE usuario_id = $1
   AND LOWER(c.descricao) = any($2)
  `
  const { rows } = await db.query(query, [usuarioId, filtro])

  return rows
}

async function encontrarPeloId(id, usuarioId) {
  const query = `
    SELECT t.*,
      c.descricao AS categoria_nome
    FROM transacoes t
    LEFT JOIN categorias c
    ON c.id = t.categoria_id
    WHERE t.id = $1
    AND t.usuario_id = $2
  `

  const { rows } = await db.query(query, [id, usuarioId])

  return rows[0]
}

async function editar(id, descricao, valor, data, categoria_id, tipo) {
  const query = `
    UPDATE transacoes
    SET descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5
    WHERE id = $6
    RETURNING *
  `
  const { rows } = await db.query(query, [descricao, valor, data, categoria_id, tipo, id])

  return rows[0]
}

async function deletar(id) {
  const query = `
    DELETE FROM transacoes
    WHERE id = $1
  `
  await db.query(query, [id])
}

async function extrato(usuarioId) {
  const query = `
    SELECT *
    FROM transacoes
    WHERE usuario_id = $1
  `
  const { rows } = await db.query(query, [usuarioId])

  return rows
}

module.exports = {
  cadastrar,
  encontrarPeloId,
  editar,
  deletar,
  extrato,
  encontrar,
  encontrarComFiltro,
}
