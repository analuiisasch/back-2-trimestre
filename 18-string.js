//É possivel utilizar alguns métodos de array e laços de repetição para acessar 
//e alterar strings:

const nome = "Ana"; //Variável string e não array
let nomeMaíusculas = ""; //inicialização 

for(let i = 0; i < nome.length; i++){
    nomeMaíusculas = nomeMaíusculas + nome[i].toLocaleUpperCase()
}
console.log(nomeMaíusculas)//ana
