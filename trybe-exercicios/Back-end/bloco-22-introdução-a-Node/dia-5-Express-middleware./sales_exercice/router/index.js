//  Configurações iniciais do servidor:
// importando o express e o body-parser:
const express = require('express');
const bodyParser = require('body-parser');

//instanciando o express:
const app = express();

// criando a porta: POST http://localhost:3001/sales,
// necessário criar meddleware de validação na pasta middleware!
app.post('/sales', (req, res) => (
    res.status(201).json({ message: 'sale criado com sucesso'})
));

app.listen(3001, () => {
    console.log('App na porta 3001')
});