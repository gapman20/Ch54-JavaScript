
function cambiarNombre(element){
    nombre = prompt("¿Cual es tu nombre?");
    element.innerHTML =  `<h1> Hola ${nombre} </h1>` ;
}