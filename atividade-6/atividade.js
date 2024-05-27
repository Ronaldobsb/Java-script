const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Preto",
    velocidadeMaxima: 200,
    velocidadeAtual: 0,
    acelerar: function(aceleracao) {
        this.velocidadeAtual += aceleracao;
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeMaxima;
            console.log("Velocidade máxima atingida!");
        }
    }
};

// Exemplo de uso do método acelerar
console.log("Velocidade atual:", carro.velocidadeAtual); // Saída: 0
carro.acelerar(50); // Acelera em 50 km/h
console.log("Velocidade atual:", carro.velocidadeAtual); // Saída: 50
carro.acelerar(200); // Acelera em mais 200 km/h
console.log("Velocidade atual:", carro.velocidadeAtual); // Saída: 200
carro.acelerar(100); // Tentativa de acelerar em mais 100 km/h além da velocidade máxima
console.log("Velocidade atual:", carro.velocidadeAtual); // Saída: 200 (não ultrapassa a velocidade máxima