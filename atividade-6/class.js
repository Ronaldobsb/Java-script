class Carro{
    constructor(marca,modelo,cor,velmax){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.velmax = velmax
        this.ano = 2024
        this.velatual = 0

    }

    acelerar(km){
        if(km + this.velatual <= this.velmax){
            this.velatual += km
            alert("vece acelerou o carro!")
        }else{
            this.velatual = this.velmax
            alert("operaçao nao autorizada!velocidade maxima atingida");
        }
    }
}


var teste = new Carro("fiat","gol","vermelho",120)