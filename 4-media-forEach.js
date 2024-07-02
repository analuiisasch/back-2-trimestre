const notas=[10,30,45,78]
let somaDasNotas = 0;
notas.forEach(function (nota){
    somaDasNotas =+ nota;
});
const media= somaDasNotas / notas.length;
console.log(`A média das notas é ${media}.`);
//podemos perceber que o forEach tem uma lógica
//parecida com o for of, ele fornece diretamente o valor
// do elemento do array , qur nesse caso nomeamos de nota,
//e ele também smepre vai do inicio ao fim do array.