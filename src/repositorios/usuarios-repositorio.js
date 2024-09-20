const { db } = require('../config/db')

async function encontrarPeloId(id) {
  const query = `
    SELECT * 
    FROM usuarios
    WHERE id = $1
  `

  const { rows } = await db.query(query, [id])

  return rows[0]
}

const encontrarPeloEmail = async (email) => {
  const result = await db.query('SELECT * FROM usuarios WHERE email = $1', [email])
  return result.rows[0]
}

const cadastrar = async (dadosDoUsuario) => {
  const { nome, email, senhaCriptografada } = dadosDoUsuario
  return db.query(
    `
        INSERT INTO usuarios (nome, email, senha)
        VALUES ($1, $2, $3)
        RETURNING *
    `,
    [nome, email, senhaCriptografada],
  )
}

async function atualizar(id, nome, email, senhaCriptografada) {
  const query = `
    UPDATE usuarios
    SET nome = $1, email = $2, senha = $3
    WHERE id = $4
    RETURNING *
  `
  const { rows } = await db.query(query, [nome, email, senhaCriptografada, id])

  return rows[0]
}

module.exports = {
  encontrarPeloEmail,
  cadastrar,
  encontrarPeloId,
  atualizar,
}
