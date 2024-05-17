function faxetaria(){
    let idade = Number(prompt("digite qual idade"))
    console.log(idade)

    if(idade > 0 && idade < 15){
        alert(`criança`)

        
    }else if(idade >= 15 && idade < 30){
        alert(`jovem`)
    }else if(idade >= 30 && idade < 60){
        alert(`adulto`)

    }else if(idade >= 60){
        alert(`idoso`)
    }else{
        alert(`error`)
        
    }
   
     
    
    
}

function ex(){
    let dolares = Number(prompt("insira os dolars"));
    const cota = 5.10

    let reais = dolares * cota
    alert(` o valor em reais e de : ${reais}`)
}



