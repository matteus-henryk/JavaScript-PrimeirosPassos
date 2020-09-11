console.log(`Trabalhando com Listas`);

// const savador = `Salvador`;
// const saoPoulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
  `Salvador`, 
  `São Paulo`, 
  `Rio de Janeiro`,
  `Curitiba`
);

listaDeDestinos.push(`Piauí`);//adicionando um item na lista

console.log('Destinos possíveis: ');
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[3]);