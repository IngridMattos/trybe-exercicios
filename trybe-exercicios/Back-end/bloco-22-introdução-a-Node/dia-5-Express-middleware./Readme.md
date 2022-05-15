Exercício proposto pela TRYBE:

Exercício 1 🚀

Crie uma rota POST /sales que receba uma requisição que envie productName e infos no body da requisição, como na imagem abaixo.
Copiar
{
  "productName": "SmarTV",
  "infos": {
    "saleDate": "19/02/2022",
    "warrantyPeriod": 3
  }
}
As seguintes validações deverão ser realizadas:

productName deve ser obrigatório e ter mais de 4 caracteres.

Caso o campo productName não seja passado, deve ser retornado o código status 400 e um JSON com a mensagem { "message": "O campo productName é obrigatório" } ;

Caso o campo productName possua menos de 4 caracteres, deve ser retornado o código status 400 e um JSON com a mensagem { "message": "O campo productName deve ter pelo menos 4 caracteres" };

infos deve ser um objeto obrigatório contendo duas chaves: saleDate e warrantyPeriod;

Caso o campo infos não seja passado, deve ser retornado o código status 400 e um JSON com a mensagem { "message": "O campo infos é obrigatório" } ;

saleDate deve conter uma data válida no padrão dd/mm/aaaa;

Caso o campo saleDate não seja passado, deve ser retornado o código status 400 e um JSON com a mensagem { "message": "O campo saleDate é obrigatório" } ;

Caso o campo saleDate não seja uma data válida no formato dd/mm/aaaa, deve ser retornado o código status 400 e um JSON com a mensagem { "message": "O campo saleDate não é uma data válida" } ;

warrantyPeriod deve ser um número inteiro entre 1 e 3;
Caso o campo warrantyPeriod não seja passado, deve ser retornado o código status 400 e um JSON com a mensagem { "message": "O campo warrantyPeriod é obrigatório" } ;

Caso o campo warrantyPeriod não seja um número entre 1 e 3, deve ser retornado o código status 400 e um JSON com a mensagem { "message": "O campo warrantyPeriod precisa estar entre 1 e 3" } ;

Caso todos os campos sejam válidos, deverá ser retornado uma resposta com o código de status 201 e um JSON contendo uma mensagem de sucesso { "message": "Venda cadastrada com sucesso" };
