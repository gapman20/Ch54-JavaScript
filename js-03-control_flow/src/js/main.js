/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/* 
    Crear un arrow function que reciba el valor de edad.
    Si la edad es mayor o igual a 18, la función debe
    retornar el mensaje "Eres mayor de edad".

    En caso contrario, retornar el mensaje "Erres menor de edad".

    -Realizar la versión de if-else sin usar el bloque de código{}
*/

const valorEdad = edad =>{ 
    if (edad >= 18) return "Eres mayor de Edad";
    else  return "Eres menor de edad";
    
}

console.log(valorEdad(18));


/* 
    Crear un arrow function que reciba el valor de edad.
    Si la edad es mayor o igual a 18 y menos o igual a 30
                    (evaluar con 18 y (&&) evaluar con 30)
    la funcion debe retornar el mensaje "Tu luchador era Mistico"


    Si es mayo o igual a 31 el mensaje "Tu luchador es el perro aguayo"

    Si es menor a 18 el mensaje "Tu luchador es Penta"
*/

const luchadorEdad = edad =>{ 
    if(edad <= 18) return "Tu luchador es Penta"
    else if(edad >= 18 && edad <= 30) return "Tu luchado era Mistico"
    else return "Tu luchador es el perro aguayo"
};

console.log(luchadorEdad(31));

// Bloque de código 
{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar);
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet, myVarConst, myVarVar);
    }
    console.log(myVarLet, myVarConst, myVarVar);
}

// Ejercicios mentales
let active = false;
if( active === true ); {
    console.log("Estas activo");
}
console.log("Fin del programa");

// 
active = false;
if ( active ) 
    console.log("Estas activo");
    console.log("Tiene autorización");

console.log("Fin del programa");

// Ejercicio 3
active = false;
if (active); console.log("Estas activo");
//else console.log("No esta activo"); //Unexpected token "else"
//console.log("Fin del programa");





//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

const evaluarNombre = (nombre) => {
    let resultado;
    switch (nombre){
        case "Lua":
            resultado = "Es de Abril";
            break;
        case "Borrego":
        case "Besito":
        case "Frijol":
        case "Paco":
            resultado = "Es de Yessica";
            break;
        case "Milo":
            resultado = "Es de Carlos";
            break;
        case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        default:
            resultado = "No se sabe de quién es";
    }
    return resultado;
}
console.log(evaluarNombre("Lua")); // Es de Abril
console.log(evaluarNombre("Milo")); // Es de Carlos
console.log(evaluarNombre("Borrego")); // Es de Yessica


/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */

/* Funcion con Switch */

const evaluarVelocidadDelVentiladorConSwitch  = velocidad => {
    let resultado;
    switch(velocidad){
        case 0 :
            resultado = "Apagado";
            break;
        case 1 :
            resultado = " Velocidad Baja";
            break;
        case 2 :
            resultado = "Velocidad Media";
            break;
        case 3 :
            resultado = "Velocidad Alta";
            break;
        default :
            resultado = "Velocidad desconocida";
    }
    return resultado;
}

console.log(evaluarVelocidadDelVentiladorConSwitch(3));

/* Funcion con if - else */

const evaluarVelocidadDelVentiladorConIfElse = velocidad => {
    let resultado;
    if(velocidad === 0) resultado = "Velocidad Apagado";
    else if (velocidad === 1) resultado = "Velocidad Baja";
    else if (velocidad === 2) resultado = "Velocidad Media";
    else if (velocidad === 3) resultado = "Velocidad Alta";
    else resultado = "Velocidad desconocida "
    return resultado;
}

console.log(evaluarVelocidadDelVentiladorConIfElse(9));





// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/




/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


