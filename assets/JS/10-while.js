let text= "";
let texto = "";
var num1= parseInt(prompt("Introduce un numero ",0));
var num2= parseInt(prompt("Introduce el segundo numero ",0));


let resultado = num1 +num2;
texto = " El resultado de la suma es: " + resultado;


while( resultado <= 100) { //mientras esta condicion se cumpla
    console.log(resultado);
    text+= "el numero a imprimir es " + resultado + "<br>";
    resultado++; // se incrementa el resultado
}

document.getElementById("text").innerHTML= text;
document.getElementById("resul").innerHTML= texto;