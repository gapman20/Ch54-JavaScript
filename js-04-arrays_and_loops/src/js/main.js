
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}



// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */
const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

// Imprimir en consola cada uno de los cantantes usando for of

const imprimirEnConsola = (listaDeCantantes) =>{

    for (const cantante of listaDeCantantes){
        console.log(cantante);
    }
};

imprimirEnConsola(cantantes);



// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }

}

// Ejercicios mentales 

let myIteration; // undefined
for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); //  0, 1, 2
    if (myIteration === 2) break;    
}
console.log("Final", myIteration); // 2




// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.


for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
}

for (let i = 0 ; i <= 5; i++ ){
    if ( i !== 3){ 
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
    }
}



// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){
        sentencias;
    }

*/

/* 
    Pregunta al usuario si quiere que se genere su número de la suerte.
    Si la respuesta es "si", genera de forma aleatoria un número
    En caso contrario, despedirse 
*/


/* while( confirm("Quieres tu número de la suerte?") ){
    const numeroSuerte = Math.random();
    console.log(`Tu número de la suerte es: ${numeroSuerte}`);
    
} */

// for loop vs while loop

for (let i = 0; i < 5; i++) {
    console.log("For loop", i);
}

let numIteracion = 0;
while (numIteracion < 5) {
    console.log("While loop", numIteracion );
    numIteracion++;
}

/* 
    Uso de Math.random();
    Generar 5 número aleatorios.
    Los número deben de estar entre el 0.0 y 10.0 (sin incluir 10.0)
*/

const generarNumeroAleatorios = (cantidad) =>{
    for (let i = 0; i < cantidad; i++){
        const numeroAleatorio = Math.random() * 10;
        console.log(`Número aleatorio ${numeroAleatorio}`);
    }
    
}

generarNumeroAleatorios(5);
/* 
    Uso de Math.random();
    Generar 5 número aleatorios.
    Los número deben de estar entre el 0.0 y 10.0 (sin incluir 10.0)
    Solo número enteros
*/

const generarNumeroAleatorios2 = (cantidad, minNum = 0, maxNum = 10) =>{
    for (let i = 0; i < cantidad; i++){
        const numeroAleatorio = Math.random() * ((maxNum -minNum) + 1);
        const numerosEntero = Math.floor(numeroAleatorio + minNum);
        console.log(`Número aleatorio ${numerosEntero}`);
    }
    
}

generarNumeroAleatorios2(5);
console.log('10 Numeros Aleatorios');
generarNumeroAleatorios2(10, 50, 60);

/* 
    Melate Chocolate
    1. Al pulsar el botón Generar mis números de la suerte.
    2. Generar 6 números aleatorios entre el 1 y el 54.
    3. Mostrar el resultado en el DOM.
*/

/**
 * Genera un número aleatorio entre un rango de números
 * @param {number} minNum 
 * @param {number} maxNum 
 */
const generarNumeroAleatorio = (minNum, maxNum) =>{
    const numeroAleatorio = Math.random() * ((maxNum -minNum) + 1);
    const numeroEntero = Math.floor(numeroAleatorio + minNum);
    return numeroEntero;
};

const elNumeroExisteEnArreglo = (arreglo, numero) =>{
    return arreglo.includes(numero);
}

const imprimirMelateChocolate = ( numeros ) => {
    const referencia = document.getElementById("melate-chocolate");
    referencia.innerHTML = `${numeros.join(' - ')}`;
}

const generarNumerosDeLaSuerte = (size = 6, minNum = 1, maxNum = 54) => {
    const numeros = [];

    while( numeros.length < size ){
        const numeroAleatorio = generarNumeroAleatorio(minNum,maxNum);
        if(!elNumeroExisteEnArreglo(numeros,numeroAleatorio)){
            numeros.push(numeroAleatorio);
        }
        console.log(iteracion, numeros, numeroAleatorio);
        iteracion++;
        
    }
    imprimirMelateChocolate(numeros);
}

// --------------- Uso del método sort()-------------
const numerosIniciales = [5, 33, 8, 100, 4, 2, 7, 6];

const compararNumeros = (a, b) =>{
    if( a < b) return -1;
    if( a > b) return 1;
    return 0;
};

const compararNumeros2 = (a,b) => a - b;

const compararNumerosOrdenDescendente = (a,b)=>{
    if ( a < b ) return 1;
    if ( a > b ) return -1;
    return 0;
}

const compararNumerosOrdenDescendente2 = (a,b)=> b - a;

const ordenarNumeros = (numerosDesordenados, tipoOrden) =>{
    const numerosOredenados = numerosDesordenados.slice();
    numerosOredenados.sort( tipoOrden );

    return numerosOredenados;
};

console.log(numerosIniciales);
console.log(ordenarNumeros(numerosIniciales, compararNumeros));
console.log(numerosIniciales);
console.log(ordenarNumeros([28,37,99,52,5], compararNumeros));
console.log(ordenarNumeros([28,37,99,52,5], compararNumerosOrdenDescendente));
console.log(ordenarNumeros([28,37,99,52,5], compararNumerosOrdenDescendente2));
console.log(ordenarNumeros( [28,37,99,52,5], (a,b) => b-a ) );

