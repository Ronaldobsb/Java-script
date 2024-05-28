document.querySelector("#cadastrarbtn").addEventListener("click", cadastrarcarro)

var carro

function listarcarro(){
    document.querySelector("#principal").innerHTML = `
    <div id="carro" class="${carro.cor}"> 
    <div id="janelas">  
     <div class="janela"></div> 
     </div> 
     <div id="rodas"> 
        <div class="roda"></div>  
        <div class="roda"></div>
      </div> 
    </div>
      <h3> marca do carro </h3>
       

      <input onfocusout="acelerar()" type="number" id="acelerar" min="0" max="${carro.velmax}"placeholder="incira o valor para acelerar">
    
    `
   
}

function cadastrarcarro(){
    let marca = document.querySelector("#marca").value
    let modelo = document.querySelector("#modelo").value
    let cor = document.querySelector("#cor").value
    let velmax = Number(document.querySelector("#velmax").value)
        
    carro = new Carro(marca,modelo,cor,velmax)
    listarcarro()

    


}



function acelerar(){
    let km = Number(document.querySelector("#acelerar").value)
    carro.acelerar(km)
    listarcarro()

}



