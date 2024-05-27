//var clientenome = "leo";
//var clienteconta = 1;
//var clientesaldo = 0
//var clientepagamentos = ["pix","credito"]
//var clientecpf = 99999999
//var clienterg = 88888

//var clienter1 = ["nome","conta","pagamento"]

// poo(programaçao orientada a objeto)
// class e um moude de objeto
class Cliente{
    nome;
    conta;
    saldo = 0;
    pagamento;
    cpf;
    rg;
    datadenacimento;

}

// new class = um novo objeto baseado pelo molde, o class
var clienter1 = new Cliente;
clienter1.nome = "leo";
clienter1.conta = 1;
clienter1.pagamento = ["pix","debito"];
clienter1.cpf = 999999
clienter1.rg = 888888
clienter1.datadenacimento = "13/02/2021"
var clienter2 = new Cliente;