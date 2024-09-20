const bcrypt = require('bcrypt')
const repositorioUsuario = require('../../repositorios/usuarios-repositorio')

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body
  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })
  }
  try {
    const verificarEmail = await repositorioUsuario.encontrarPeloEmail(email)

    if (verificarEmail) {
      return res.status(400).json({
        mensagem: 'Já existe usuário cadastrado com o e-mail informado.',
      })
    }
    const senhaCriptografada = await bcrypt.hash(senha, 10)

    const usuarioNovo = await repositorioUsuario.cadastrar({
      nome,
      email,
      senhaCriptografada,
    })

    delete usuarioNovo.rows[0].senha

    res.status(201).json(usuarioNovo.rows[0])
  } catch (err) {
    console.error(err.message)

    res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

module.exports = { cadastrarUsuario }
