Vamos praticar #1

Vamos colocar em prática tudo o que aprendemos até aqui. Primeiro, crie a tabela Books usando o SQL abaixo:

CREATE TABLE books (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(90) NOT NULL,
	author_id INT(11) NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO books (title, author_id)
VALUES
	('A Game of Thrones', 1),
	('A Clash of Kings', 1),
	('A Storm of Swords', 1),
	('The Lord of The Rings - The Fellowship of the Ring', 2),
	('The Lord of The Rings - The Two Towers', 2),
	('The Lord of The Rings - The Return of The King', 2),
	('Foundation', 3);


Depois de criar a tabela no banco de dados, faça as seguintes implementações.

1) Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros;
2) Crie uma rota /books para trazer a lista de todos os livros;
3) Crie um método getByAuthorId no modelo Book, para retornar apenas livros associados com um determinado author_id. Altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id, e retornar apenas os livros associados.


praticar #2

Continuando o exercício anterior faça o seguinte.

1) Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' }.
   

Vamos praticar #3

Ainda usando a tabela books como referência crie uma rota books do tipo POST. Faça as seguintes validações:

1) Título não pode ser vazio;
1.1) Título precisa ter pelo menos três caracteres;
1.2) O campo author_id não pode ser vazio;
1.3) O campo author_id só é válido se existir uma pessoa autora com esse id;

2) Se algum dos requisitos anteriores não for atendido, retornar um json no formato abaixo, com status 400.
   
   {
	message: 'Dados inválidos'
}
 Caso contrário, insira o livro na tabela books e retorne o json no formato abaixo, com o status 201.

{
	message: 'Livro criado com sucesso!'
}
