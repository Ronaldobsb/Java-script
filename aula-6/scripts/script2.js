class Clientevip {
    //constructor = recebe os valores e atributos 
    constructor(nomep,cpfp,pagamentosp){
        this.nome;
        this.saldo;
        this.cpf;
        this.pagamentos = pagamentosp;
         }
        sacar(valor){
      if(this.saldo < valor){
        return`òperaçao nao autorizada`
      }else{
        this.saldo -= valor
        return `o saque do valor r$ ${valor} foi efetuado
        com sucesso`
      }
    
        }
        deposirtar(valor){
    
        }
        verificarsaldo(){
            return this.saldo
        }
    }

    
//quando trabalhado com constructor podemos passar os valores dentro dos 
//parenteses ao inves de passar por linha (metodo padrao

var vip1 = new Clientevip("davinci",999999,["pix"])
var vip1 = new Clientevip("alessandra",999999,["pix","cartao"])