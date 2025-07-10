/*var ciudad= prompt("Introduce la ciudad donde vives");
console.log("La Ciudad donde vivo es " + ciudad );*/

var n1= parseInt(prompt("Introduce un numero 1",0));
var n2= parseInt(prompt("Introduce un numero 2",0));
var suma =n1+n2;

console.log("El primer numero es " + n1 + " y el segundo numero es " +n2)
console.log(" La suma de " + n1 + " y" + n2 + " es" + suma);

if (n1>n2){
    console.log("El numeros " +n1+ " es mayor que" +n2);
}
else if(n1 ==n2){
    console.log("los numeros " +n1+ " y " +n2+ " son iguales");
}
 else{
    console.log("El numero " +n1+ " es menor que " +n2);
 }
