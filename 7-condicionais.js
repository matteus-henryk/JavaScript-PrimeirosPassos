console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
  `Salvador`, 
  `São Paulo`, 
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 15;
const estaAcompanhada = false;//Boolean
const temPassagemComprada = true;

console.log('Destinos possíveis: ');
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//   console.log('Comprador maior de idade');
//   listaDeDestinos.splice(1, 1);//removendo item

// }else if(estaAcompanhada){
//     console.log('Comprador está acompanhado');
//     listaDeDestinos.splice(1, 1);
// }else {
//     console.log('Não é maior de idade e não posso vender');
// }

if(idadeComprador >= 18 || estaAcompanhada) {
  console.log('Boa viagems');
  listaDeDestinos.splice(1, 1);//removendo item

}else {
    console.log('Não é maior de idade, não posso vender');
}

console.log('Embarque: \n\n')

if(idadeComprador >= 18 && temPassagemComprada || temPassagemComprada && estaAcompanhada) {
  console.log('Boa viagem')
}else {
  console.log('Você não pode embarcar')
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
// console.log(idadeComprador != 18);
// console.log(idadeComprador === 18);
// console.log(idadeComprador !== 18);
