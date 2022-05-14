Exercicios de fixação.
OBS: Os comandos seguintes foram execultados no MySQL Workbench:

Exercício de fixação proposto: "Para fixar melhor, que tal explorar na prática o que cada comando faz? Execute cada um deles no MySQL Workbench e veja os resultados."

Para converte o texto da string para CAIXA ALTA:
SELECT UCASE('Oi, eu sou uma string');

Para converte o texto da string para CAIXA BAIXA:
SELECT LCASE('Oi, eu sou uma string');

Para substitui as ocorrências de uma substring em uma string:
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

Para retornar etorna a parte da esquerda de uma string de acordo com o número de caracteres especificado: 
SELECT LEFT('Oi, eu sou uma string', 3);

Para retorna a parte da direita de uma string de acordo com o número de caracteres especificado:
SELECT RIGHT('Oi, eu sou uma string', 6);

Para exibir o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
SELECT CHAR_LENGTH('Oi, eu sou uma string');

Para extrai parte de uma string de acordo com o índice de um caractere inicial e a quantidade de caracteres a extrair:
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);

Se a quantidade de caracteres a extrair não for definida, então a string será extraída do índice inicial definido, até o seu final:
SELECT SUBSTRING('Oi, eu sou uma string', 5);

Exercício de fixação proposto: "Para testar, execute o código abaixo no seu ambiente local."

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;]

EXERCÍCIOS PRINCIPAIS DE FIXAÇÃO:
-Gabarito no doc: respostasFixação.txt

1) Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
2) Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?' .
3) Utilizando uma query , encontre quantos caracteres temos em 'Uma frase qualquer' .
4) Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas' .
5) Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.


