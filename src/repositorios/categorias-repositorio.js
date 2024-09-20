const { db } = require('../config/db')

async function encontrarPeloId(id) {
  const query = `
    SELECT *
    FROM categorias
    WHERE id = $1
  `
  const { rows } = await db.query(query, [id])

  return rows[0]
}

async function encontrar() {
  const query = `
    SELECT * 
    FROM categorias
  `

  const { rows } = await db.query(query)

  return rows
}

module.exports = { encontrar, encontrarPeloId }
