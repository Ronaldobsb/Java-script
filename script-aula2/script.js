function sesenao(){
    // se (condicao) faça, fimse se (condiçao) senao
    if(false){
        console.log("estou no if")
        }else{
        console.log("estou no else")

        }
        var idade = Number (prompt("digite a sua idade"));
        console.log(idade);

        if(idade >= 18){
            alert("seja bem vindo!");

        }else{
            location.href = "https://www.google.com.br"

        }
    }




function caso(){
    let escolha = prompt("escolha uma opcao de A a D")
    // defaut = caso seja nenhum dos casos mostra invalido
        switch(escolha){
        case "A":
            alert("voce escolheu A");
            break
        case "B":
            alert("voce escolheu B"); 
            break
        case "D":
            alert("voce escolheu C");
            break
        case "D":
            alert("voce escolheu D"); 
            break  
        default:
            alert("operador e invalido")                   
    }

}

function teste(){

}