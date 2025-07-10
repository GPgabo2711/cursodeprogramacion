'user strict';
function porConsola(n1,n2){
    console.log("La suma de dos numeros es", (n1 +n2));
    console.log("La multiplicacion de dos numeros es", (n1 *n2));
    console.log("La division de dos numeros es", (n1 /n2));
    console.log("La resta de dos numeros es", (n1 -n2));
}
porConsola(15,20);

suma = "";
function porPantalla (n1,n2){
    suma+= "La suma de dos numeros es " + (n1 +n2) + "</br>";
    document.getElementById("suma").innerHTML= suma;
}
porPantalla(15,20);

function carros(marca, anio){
    console.log("Me quiero comprar un carro de la marca", marca, anio);
}
carros("Toyota",2025);

