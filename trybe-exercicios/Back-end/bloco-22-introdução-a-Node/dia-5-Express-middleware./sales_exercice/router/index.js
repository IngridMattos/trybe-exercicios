//  Configurações iniciais do servidor:

// importando o express e o body-parser:
const express = require('express');
const bodyParser = require('body-parser');

//importando a validação do productName
const validateProductName = require('../middlewares/validationProductName');

//importando validação de infos:
const validateInfos = require('../middlewares/validationInfos');

//instanciando o express:
const app = express();

app.use(bodyParser.json());

// criando a porta: POST http://localhost:3001/sales,
// necessário criar meddleware de validação na pasta middleware!
app.post('/sales', validateProductName, validateInfos, (req, res) => (
    res.status(201).json({ message: 'sale criado com sucesso'})
));

app.listen(3001, () => {
    console.log('App na porta 3001')
});