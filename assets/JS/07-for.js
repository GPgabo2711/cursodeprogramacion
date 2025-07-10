let x=10;
let text ="";
for (let x=0; x<=100; x++){ //ciclo for es primero declaro la variable se suele inicializar en cero, despues viene la condicion que se va a cumplir, se incrementa ++ o se descrementa --//
    console.log("El alumno tiene el codigo =" + x) + "<br>"; // luego si la instruccion que va --//
}

//*Array/
const alumnos=["Petra","Roscio","Carlos", "Christian"];
for(let i=0; i<alumnos.length; i++){
    console.log("El alumno " + alumnos[i] + " esta raspado " + "<br>");
    text += "El alumno " + alumnos[i]+ " esta raspado " + "<br>";
    
}
document.getElementById("alumnos").innerHTML = text;

const Frutas=["Banana","Guayaba","Fresas", "Duraznos"];
for(let x=0; x<Frutas.length; x++){
    console.log(" La Fruta " + Frutas[x] + " esta riquisima " + "<br>");
    text2 += "La Fruta " + Frutas[x] + " esta riquisima " + "<br>";
}
document.getElementById("Frutas").innerHTML = text2;

//const Frutas=["Banana","Guayaba","Fresas", "Duraznos"];
//for(let x=0; x<Frutas[4])//
