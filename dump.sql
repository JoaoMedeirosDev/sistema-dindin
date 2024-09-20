CREATE DATABASE dindin;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  senha TEXT NOT NULL
);

DROP TABLE IF EXISTS categorias;

CREATE TABLE categorias (
	id SERIAL PRIMARY KEY,
  descricao TEXT NOT NULL
);

DROP TABLE IF EXISTS transacoes;

CREATE TABLE transacoes (
	id SERIAL PRIMARY KEY,
  descricao TEXT NOT NULL,
  valor INT NOT NULL,
  data TIMESTAMP NOT NULL,
  categoria_id INT REFERENCES categorias(id) ON DELETE CASCADE,
  usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
  tipo TEXT NOT NULL
);

INSERT INTO categorias
(descricao)
VALUES
('Alimentação'),
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras receitas'),
('Outras despesas');
























