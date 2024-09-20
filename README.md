# Sistema Dindin 💰

Um sistema para gerenciamento de finanças pessoais, permitindo o registro de transações, categorias e usuários.

## 📂 Estrutura do Projeto
sistema-dindin/ ├── src/ │ ├── rotas/ │ │ ├── usuarios.js │ │ ├── transacoes.js │ │ └── categorias.js │ ├── app.js │ └── servidor.js ├── .env ├── .env.example ├── .eslintrc.js ├── .gitignore ├── dump.sql ├── package.json └── package-lock.json


## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados.
- **JWT**: Autenticação via JSON Web Tokens.
- **Bcrypt**: Hashing de senhas.

## ⚙️ Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/JoaoMedeirosDev/sistema-dindin.git

2. **Navegue até a pasta do projeto:**
   ```bash
   cd sistema-dindin

3. **Instale as dependências:**
   ```bash
   npm install
4. **Configure as variáveis de ambiente**: Preencha o arquivo ```.env``` com as informações do seu banco de dados e chave secreta JWT.

## 🗄️ Estrutura do Banco de Dados

O banco de dados é criado através do script ```dump.sql```, que inclui:

- **Usuários**: Tabela para armazenar dados de usuários.
- **Categorias**: Tabela para diferentes categorias de transações.
- **Transações**: Tabela para registrar entradas e saídas financeiras.

## 💻 Executando o Projeto

Para iniciar o servidor, utilize o seguinte comando:
  ```bash
  npm run dev
```
O servidor irá rodar na porta 3000. Acesse a API através do http://localhost:3000.

## Endpoints Disponíveis

### Usuários
- **GET /usuarios**
  - Descrição: Lista todos os usuários.
  
- **POST /usuarios**
  - Descrição: Cria um novo usuário.
  - Exemplo de corpo da requisição:
    ```json
    {
      "nome": "Nome do Usuário",
      "email": "email@exemplo.com",
      "senha": "senhaSecreta"
    }
    ```

### Transações
- **GET /transacoes**
  - Descrição: Lista todas as transações.

- **POST /transacoes**
  - Descrição: Adiciona uma nova transação.
  - Exemplo de corpo da requisição:
    ```json
    {
      "descricao": "Descrição da Transação",
      "valor": 100,
      "data": "2023-09-20T12:00:00Z",
      "categoria_id": 1,
      "usuario_id": 1,
      "tipo": "entrada" // ou "saída"
    }
    ```

### Categorias
- **GET /categorias**
  - Descrição: Lista todas as categorias.

- **POST /categorias**
  - Descrição: Cria uma nova categoria.
  - Exemplo de corpo da requisição:
    ```json
    {
      "descricao": "Descrição da Categoria"
    }
    ```
# 📧 Contato
Para dúvidas ou sugestões, entre em contato comigo:

<a href= "mailto:joaov.lac.medeiros@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>  

