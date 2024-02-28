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

//calcular....
function resultado(){

    let result = tela.innerHTML;
    let operadores = result.split("+", "-", "*", "/", "^", "%");
    let numeros = result.replace(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    let primeiro;
    let segundo;
    let a;

        for(i = 0 ; i < result.length; i++){
            if(operadores[i] === "*" || operadores === "/" || operadores === "^" || operadores === "%"){
                primeiro = numeros[i];
                segundo = numeros[i++];
            }

            if (isNaN(segundo)) continue;
            
            switch(operadores[i]){
                case "*":
                    a *= segundo;
                break;
                case "/":
                    a /= segundo;
                break;
                case "^":
                    a = Math.pow(a, segundo);
                break;
                case "%":
                    a = (a / 100) * segundo;
                break;
                }
                console.log(a, operador, segundo);
            }
            console.log(a);
            
        }

        for(i = 0 ; i < result.length; i++){
            if (isNaN(segundo)) continue;
            
            switch(operadores[i]){
                case "+":
                    a += segundo;
                break;
                case "-":
                    a -= segundo;
                break;
                }
                console.log(a, operador, segundo);

        }
            console.log(a);   
        