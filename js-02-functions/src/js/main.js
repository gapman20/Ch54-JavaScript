console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/





// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/


function saludar( nombre ){
  console.log("Qué te gustaría de regalo de cumpleaños " + nombre);
  
}

saludar("Jen");


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darRegalo = function ( nombre, regalo ){
  console.log(`Felicidades ${nombre}, te traje ${regalo}`);
};

darRegalo("Jen", "Sopa Nisin");

/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/

function sumaDeDosNumeros(num1, num2) {
  return console.log(`La suma de ${num1} y ${num2} es de = ${num1 + num2}`);
}

const restaDeDosNumeros = function (numero1, numero2){
  return console.log(`La sera de ${numero1} y ${numero2} es de = ${numero1 - numero2}`);
};

sumaDeDosNumeros(1,10);

restaDeDosNumeros(10,2);


/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp( data ) {
  console.log("Configuración inicial de la aplicación");
  console.log(`Valor de data ${data}`);
})(18);
//setUp();



/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule el área de un triangulo
// La función debe retornar el resultado.

function areaDelTriangulo(base, altura){
  return (base * altura) / 2;
}
console.log(`El área del triangulo con una altura de 2 y una base de 5 es de  ${areaDelTriangulo(2,5)}`);

// Realizar una función expresada que calcule el área de un triangulo
// La función debe retornar el resultado.

const areaTriangulo = function(base,altura){
  return ( base * altura )/2;
}

console.log(`El área del triangulo con una altura de 2 y una base de 5 usando la función expresada es de ${areaTriangulo(2,5)}`);

// Realizar una función arrowfunction que calcule el área de un triangulo
// La función debe retornar el resultado.

const calcularArea3 = (base,altura) => base * altura / 2;

console.log(`Resultado usando arrow function: ${calcularArea3(2,5)}`);

// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base , altura) => console.log(calcularArea3(base,altura));
imprimirArea(2,5);

// Realizar una función flecha que calcule el área de un círculo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"

const areaDelCirculo = radio => Math.PI *(radio**2);
const imprimirAreaDelCirculo = (radio) => document.getElementById("area-circulo").innerText = areaDelCirculo(radio);


imprimirAreaDelCirculo(5);

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/
const saludarPersona = (nombre="persona invitada") => console.log(`Hola ${nombre}, ya nos vamos a descansar`);

saludarPersona(); //Hola persona invitada, ya nos vamos a descansar 
saludarPersona("Gabriel"); //Hola Gabriel, ya nos vamos a descansar 



/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */
 const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola Ch54");
                                            // 18("Hola Ch54");
                                            // "patito"("Hola Ch54");
                                            // console.log("Hola Ch54");
                                            // undefined("Hola Ch54");
 // imprimirMensaje( 18 ); // fncCallBack is not a function
 // imprimirMensaje( "Patito" ); // fncCallBack is not a function
 imprimirMensaje( console.log ); // "Hola Ch54"
 // imprimirMensaje( console.log("Luis") ); //  fncCallBack is not a function
 // imprimirMensaje( undefined ); //  fncCallBack is not a function

const enviarAParrafo = (mensaje) => {
  const saluda = "Hola, buen día";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saluda} ${mensaje}`;
};

imprimirMensaje(enviarAParrafo);

/*
  Usando la funcion imprimir mensaje, enviar un callback para que 
  imprima con alert
 */


/* imprimirMensaje(alert);
 */
/*
  Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/


/* const sumaEImprimir = (a,b, opcion = "consola") =>{
  const resultado = sumarDosNumeros(a,b);
  const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
  if(opcion === "consola")console.log(mensaje);
  else if (opcion ==="parrafo") document.getElementById("resultado-sumatoria").innerHTML = mensaje;
  else if (opccion === "h2") document.getElementById("resultadoH2-sumatoria").innerHTML = mensaje;
  else alert(mensaje)
  
  } */
 
 //sumaEImprimir(10,14); // se imprime en consola
 //sumaEImprimir(50,50, "parrafo"); // se imprime en el parrafo
 
const sumarDosNumeros = (a,b) => a + b ;

const sumaEImprimir = (a,b, imprimir = console.log) =>{
  const resultado = sumarDosNumeros(a,b);
  const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
  imprimir(mensaje);
}

sumaEImprimir( 10, 14); // se imprime en la consola

const imprimirEnDOMParagraph = (mensaje) => {
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerHTML = mensaje;
}

const imprimirEnH2 = (mensaje) => {
  const refParagraph = document.getElementById("resultadoH2-sumatoria");
  refParagraph.innerHTML = mensaje;
}


sumaEImprimir( 10, 14, imprimirEnDOMParagraph); // se imprime en paragraph
sumaEImprimir( 10, 14, imprimirEnH2); // se imprime en h2
//Imprimir en alter 
//sumaEImprimir(10,14,alert);