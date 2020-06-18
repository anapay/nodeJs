--entrando no mysql pelo shel;
mysql -u root -p;

-- criando banco;
CREATE DATABASE LojaDoces;

-- criando tabela;
CREATE TABLE usuarios(
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone INT,
    mensagem VARCHAR(255)

);
--listando bancos do sistema;
SHOW DATABASE;
--listamdo tabelas;
SHOW TABLE;

--inserindo dados na tabela;
INSERT INTO usuarios(nome, email, telefone, mensagem) VALUES(
    "joao Souza",
    "Joao@email.com",
    983653323,
    "Gostaria de ser socio entre em contato por favor"

);
INSERT INTO usuarios(nome, email, telefone, mensagem) VALUES(
    "Andre Souza",
    "Andre@email.com",
    983653323,
    "Gostaria de ser socio entre em contato por favor"

);
INSERT INTO usuarios(nome, email, telefone, mensagem) VALUES(
    "Renato Souza",
    "Renato@email.com",
    983653323,
    "Gostaria de ser socio entre em contato por favor"

);
--visualizando todos os dados;
SELECT * FROM usuarios ;

--fazendo busca especifica;
SELECT * FROM usuarios WHERE nome = "joao";
SELECT * FROM usuarios WHERE nome >= 18;

--para verificar a estrutura da tabela;
DESCRIBE usuarios;

--deletando todo os dados de uma tabela;
DELETE FROM usuarios;
--deletando um dado especifico;
DELETE FROM  ususarios WHERE nome = "joao";
--estou dizendo que na tabela usuarios na registro nome delete o registro que tem o nome joao;

--Atualizando tabela;
UPDATE usuarios SET nome = "ANA" WHERE nome = "Anna";
--atualize a coluna nome dentro da tabela usuarios do dado que tem o nome ANA;
UPDATE usuarios SET nome = "ANA" WHERE nome = "Anna", email = "asdlflgkkjhj" WHERE email = "ASDECRGSHHDK";
--Atualizando mais de um registro;