//CONDICIONALES

let dato = false
if (dato == false){
    console.log("es true")
}else{
    console.log("es false")
}

//otro ejercicio
let lenguaje = "javascript";

if( lenguaje === "javascript"){
    console.log("Estoy aprendiendo")
}else{
    console.log("Lo aprenderé más adelante")
}

//Otro ejercicio

function puedePasar(nombre){
    if(nombre === "Cosme Fulanito"){
    return false
 }else{
     return true
 }
 }
 console.log(puedePasar("Cosme Fulanito"))

 let colores = ["blanco", "negro", "azul"];

 colores.push("rojo", "amarillo");
 colores.pop()

console.log(colores)
