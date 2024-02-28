let tela = document.getElementById('tela');
const botoes = document.querySelectorAll('.botao');
const resultado = document.getElementById('resultado');

//funcionalidade dos botoes
for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener('click', function(e){

        tela.innerHTML += e.target.value;
        console.log(e.target.value);
    })
}
//--------------------------------------------------------

//limpar calculadora
function limpar(){
    tela.innerHTML = "";
}
//--------------------------------------------------------

//apagar ultimo digito
function apagar(){
    let result  = tela.innerHTML;
    tela.innerHTML = result.substring(0, result.length -1);
}
//--------------------------------------------------------




