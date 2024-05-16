// o function exercicio1 eçe tem funçao coletar quantor cientes e quanto a mesa gastou 
// e divide o valor para cada pessoa 
// input = quantidadeclientes, valortotalmesa
// output = valordividido
function exercicio1(){
let quantidadeclientes = Number(prompt("insira a quantidade de clientes na mesa :"));
let valortotalmesa = Number(prompt("insira qual valor total da mesa:R$"));

let valordividido = valortotalmesa/quantidadeclientes;

alert(`o valor para cada cliente sera de R$: ${valordividido.toFixed(2)}`);

}

// function exercicio2 ele tem como funçao coletar um numero e logo e m seguida demostra em ordem o antercessor
// o numro em si e seu sucessor
// imput:numero
// output : antecessor,numero,sucessor

function exercicio2(){
let numero = Number(prompt("digite o numero desejado"));

let antecessor = numero -1
let sucessor = numero + 1

alert(`o antercessor e : ${antecessor},onumero escolhido e : ${numero}, e o sucessor : ${sucessor}`)


}

