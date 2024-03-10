let tela = document.getElementById('tela');
const botoes = document.querySelectorAll('.botao'); 

//funcionalidade dos botoes
for(let i = 0; i < botoes.length; i++){

    botoes[i].addEventListener('click', function(e){
        tela.innerHTML += e.target.value;
    
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

//calcular...
function resultado(){

    let result = tela.innerHTML;
    let operadores = ["+", "-", "*", "/", "^", "%"];
    let resultado = 0;

    for(i = 0; i < result.length; i++){

        if(i === 1){
            if(result[i] === operadores[0]){

                resultado += parseFloat(result[i-1]) + parseFloat(result[i+1]);
            }
    
            else if(result[i] === operadores[1]){
    
                resultado += parseFloat(result[i-1]) - parseFloat(result[i+1]);
            }
    
            else if(result[i] === operadores[2]){
    
                resultado += parseFloat(result[i-1]) * parseFloat(result[i+1]);
            }
    
            else if(result[i] === operadores[3]){
    
                resultado += parseFloat(result[i-1]) / parseFloat(result[i+1]);
            }
    
            else if(result[i] === operadores[4]){
    
                resultado += Math.pow(parseFloat(result[i-1]), parseFloat(result[i+1]));
            }
        }else{

            if(result[i] === operadores[0]){

                resultado += parseFloat(result[i+1]);
            }
    
            else if(result[i] === operadores[1]){
    
                resultado -= parseFloat(result[i+1]);
            }
    
            else if(result[i] === operadores[2]){
    
                resultado *= parseFloat(result[i+1]);
            }
    
            else if(result[i] === operadores[3]){
    
                resultado /=  parseFloat(result[i+1]);
            }
    
            else if(result[i] === operadores[4]){
    
                resultado = Math.pow(parseFloat(resultado), parseFloat(result[i+1]));
            }
        }
    };
    tela.innerHTML = resultado;
    console.log(resultado);
}
        