const nomes = ["Evaldo", "Mari", "Camis"];

 nomes.forEach(function (nome){
 console.log (nome)
 })
 //modo mais ultilizado = arrow function (flecha
  nomes.forEach((nome)=>{
    console.log(nome)
  })
  //duas formas iguais de escrever
  nomes.forEach(function (){})
  nomes.forEach(()=>{})
  function imprimeNome(nome) {
    console.log(nome)
  }
  nomes.forEach(imprimeNome);