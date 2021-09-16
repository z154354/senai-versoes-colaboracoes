const quantidadedeAlunos = 14

for(let index = 0; index <= quantidadedeAlunos; index++) {
    if (index === 0) {
        console.log('o numero é zero');
    } else if (index % 2 === 0) {
        console.log(' o numero é par' + index);
    } else {
    
       console.log('o numero é impar' + index);
    }
}