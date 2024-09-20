const repositorioUsuario = require('../../repositorios/usuarios-repositorio')
const { hash } = require('bcrypt')

const atualizarUsuario = async (req, res) => {
  try {
    const usuarioAutenticado = req.usuario
    const { nome, email, senha } = req.body

    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' })
    }
    const verificarEmail = await repositorioUsuario.encontrarPeloEmail(email)

    if (verificarEmail && verificarEmail.id !== usuarioAutenticado.id) {
      return res.status(400).json({
        mensagem: 'O e-mail informado já está sendo utilizado por outro usuário.',
      })
    }
    const senhaCriptografada = await hash(senha, 10)

    const usuarioAtualizado = await repositorioUsuario.atualizar(
      usuarioAutenticado.id,
      nome,
      email,
      senhaCriptografada,
    )

    delete usuarioAtualizado.senha

    res.status(200).json(usuarioAtualizado)
  } catch (err) {
    console.log(err.message)

    res.status(500).json({ mensagem: 'Erro interno do servidor.' })
  }
}

module.exports = { atualizarUsuario }
