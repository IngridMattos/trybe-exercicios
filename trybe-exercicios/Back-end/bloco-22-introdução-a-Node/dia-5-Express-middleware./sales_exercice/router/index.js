//  Configurações iniciais do servidor:

// importando o express, o body-parser e o crypto:
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

//importando a validação do productName
const validateProductName = require('../middlewares/validationProductName');

//importando validação de infos:
const validateInfos = require('../middlewares/validationInfos');

//importando validação de saledate
const validateSaleDate = require('../middlewares/validationSaleDate');

//importando validação de warrantyPeriod 
const validateWarrantyPeriod = require('../middlewares/validationWarrantyPeriod');

//instanciando o express:
const app = express();

app.use(bodyParser.json());

// criando a porta: POST http://localhost:3001/sales,
// necessário criar meddleware de validação na pasta middleware!
// a ordem dos middleware importam, é necessario validar primeiro se o objeto existe e só depois o seu conteúdo.
app.post('/sales', validateProductName, validateInfos, validateSaleDate, (req, res) => (
    res.status(201).json({ message: 'sale criado com sucesso'})
));

app.listen(3001, () => {
    console.log('App na porta 3001')
});