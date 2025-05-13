/*
 Objetivo:
 Crear un formulario simple donde el usuario 
 ingrese su edad en años y, al hacer clic en un 
 botón, se muestre su edad en meses.
 Requisitos:
   - Crear un input para que el usuario ingrese su edad (en años).
   - Crear un botón "Calcular".
   - Al hacer clic, mostrar un mensaje con la edad en meses.
   - Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300
*/


function obtenerEdad(){
    const edad = Number(document.getElementById('birthdate').value);
    return edad
}

function calcularEdad(edadEnMeses){
    meses = edadEnMeses * 12;
    return meses
}

function imprimirMeses(element){
    meses = calcularEdad(obtenerEdad());
    element.innerHTML = `<p> Tu edad en meses son ${meses}</p>`;
}

