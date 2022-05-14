// const sayHello = require('./hello');
// sayHello('Ingrid')

const readline = require('readline-sync');

const imc = require('./imc');

const askName = () => {

     return readline.question('qual seu nome?');

}

const askHeight = () => {
    return readline.questionFloat('qual sua altura?');
}

const askWeight = () => {
    return readline.questionFloat( 'qual seu peso?');
}

const name = askName();
const height = askHeight();
const weight = askWeight();

const result = imc(height)