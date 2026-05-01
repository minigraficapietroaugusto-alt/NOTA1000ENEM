CREATE DATABASE IF NOT EXISTS nota1000enem;
USE nota1000enem;

-- Tabela para salvar as anotações pessoais do usuário
CREATE TABLE IF NOT EXISTS anotacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para salvar o histórico de redações praticadas
CREATE TABLE IF NOT EXISTS redacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT NOT NULL,
    nota_estimada INT,
    feedback TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela opcional para o usuário adicionar seus próprios repertórios futuramente
CREATE TABLE IF NOT EXISTS repertorios_pessoais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    tipo VARCHAR(100),
    autor VARCHAR(150),
    aplicacao TEXT,
    exemplo TEXT
);
