var valortotal = 0;

function adicionaraocarrinho(produto,valor){

    if(produto == '' || valor <= 0){
        // && -e as duas condiçoes deverao ser verdadeiras
        //|| - ou (basta uma condiçao ser verdadeiro para que o bloco seja executado)
        // = atribuiçao
        // ==comparaçao de conteudo
        // === comparaçao de conteudo e tipo 
        alert("opçao invaloida ou nao funciona!");
    }else{
    valortotal += valor;
    alert(`o produto : ${produto} foi adicionado`);
    totalcarrinho();


    }

    
}

function totalcarrinho(){
    alert(` total da compra $: ${valortotal}`)
}