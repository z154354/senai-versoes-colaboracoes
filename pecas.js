const listadepecas = ['peça de teste' , 'AB' , 'peca B']

console.log('quantidade de peças')

if (listadepecas.length <= 10) {
    console.log('as peças podem ser cadastradas');
}

console.log('quantidade de caracteres')

for (let index = 0; index < listadepecas.length; index++) {
    const pecaAtual = listadepecas[index];
    if (pecaAtual.lenght < 3) {
        console.log(pecaAtual + ': a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    } else {
        console.log(pecaAtual + ': a peça pode ser cadastrada.')
    }
}

console.log('peso da peça')

const pesodapecaemgramas = 150;

if (pesodapecaemgramas >= 100) {
    console.log('peso suficiente.')
} else {
    console.log('valor insuficiente')
}
