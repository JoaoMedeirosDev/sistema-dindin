const app = require('./app')
const PORTA = 3000

app.listen(PORTA, () => {
  console.log(`Rodando na porta ${PORTA}`)
})
