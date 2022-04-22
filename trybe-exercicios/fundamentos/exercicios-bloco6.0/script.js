function states(){
    const findeStates = document.querySelector('#state');
    const stateOpitions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    for (let i = 0; i < stateOpitions.length; i += 1) {
    const creatingOptions = document.createElement('option');
    creatingOptions.innerText = stateOpitions[i]
    creatingOptions.value = stateOpitions[i];
    findeStates.appendChild(creatingOptions);
    }
}

function holdButton (event) {
event.preventDefault();
let validation = true;
const name = document.querySelector('[name=name]');
if (name.value.length > 40 || name.value.length === 0) {
    alert('Nome invalido!')
    validation = false;
}
const email = document.querySelector('[name=email]');
if (email.value.length > 50 || email.value.length === 0) {
    alert('Email inválido!!')
}
const cpf = document.querySelector('[name=cpf]');
if (cpf.value.length > 11 || cpf.value.length === 0) {
    alert('cpf inválido!!')
}
const endereço = document.querySelector('[name=address]');
if (address.value.length > 200 || address.value.length === 0) {
    alert('endereço inválido!!')
}
const cidade = document.querySelector('[name=city]');
if (cidade.value.length > 28 || cidade.value.length === 0) {
    alert('cidade inválida!!')
}
const estado = document.querySelector('[name=state]');
if (estado.value === 'Selecione seu estado') {
    alert('estado inválida!!')
}
const imovel = document.querySelector('[name=houseType]')
if (imovel.value === false) {
    alert('imóvel inválido')
}
if (validation === true) {
addDiv = document.createElement('div');
findeBody = document.getElementsByTagName('body');
findeBody.appendChild(addDiv);
addP = documento.createElement('p');
addP.innerText = `${name.value} ${email.value}`
} else {
    alert('deu ruim playboy')
}
};

window.onload = function () {
    states();

const findeBtb = document.querySelector('.submitBtn');
findeBtb.addEventListener('click', holdButton);
}    