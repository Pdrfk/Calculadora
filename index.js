botao.addEventListener('click' , function(){

 var a = parseInt (valor1.value);
 var b = parseInt (valor2.value);
var op = operacao.value;

if(op == 1){
    resultado.innerHTML="Resultado: " + (a+b);

}
if(op == 2){
    resultado.innerHTML="Resultado: " + (a-b)

}
if(op == 3){
    resultado.innerHTML="Resultado: " + (a*b)

}
if(op == 4){
    resultado.innerHTML="Resultado: " + (a/b)

}





//alert (a+b);

});