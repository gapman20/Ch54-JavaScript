/**
 *  TDD
 *  TDD (Test-Driven Development) es una metodología de desarrollo 
 *  de software donde las pruebas unitarias se escriben antes del 
 *  código de producción.
 * 
 *  Ventajas de TDD: 
 *  - Te obliga a pensar en los requerimientos antes de codificar.
 *  - Mejora la calidad del código al asegurar que está cubierto por pruebas.
 *  - Facilita la detección de errores rápidamente.
 * 
 */

import { validateName } from "../../../src/utils/validations/validateName";

// test( "Mensaje de la prueba", ()=>{} );

test( "Debe aceptar un nombre valido", ()=>{

    // expect(valorRecibido.matcher(valorEsperado));
    const response = validateName("Abril")
    expect( response.isValid).toBe(true);

} );

/*
    .toContain(item)
    Proposito: Verifica si un array (o un string conteiene un elemento especifico).
    Para objetos en arrays, usa toContainEqual
 */

test("Debe rechazar un nombre con solo espacios", () =>{
    const response = validateName("   ");
    expect( response.isValid ).toBeFalsy();
    expect( response.errors.length ).toBeGreaterThan(0);
    expect( response.errors ).toContain("No se permiten espacios en el nombre");
});

test("Debe rechazar nombres demasiado cortos", ()=>{
    const response = validateName("Je");
    expect( response.isValid ).toBeFalsy();
    expect( response.errors.length ).toBeGreaterThan(0);
    expect( response.errors ).toContain("El nombre debe tener más de dos caracteres");
});

test("Debe rechazar valores que no son string(null)", ()=>{
    const response = validateName( null );
    expect( response.isValid ).toBeFalsy();
    expect( response.errors.length).toBeGreaterThan(0);
    expect( response.errors ).toContain("El valor ingresado no es un nombre válido");
});

/*
 test.each o it.each
 Validar una función con muchos casos de entrada sin repetir código.
 
 toHaveProperty(keyPath, value?)
 Propósito: Verifica si un objeto tiene una propiedad específica. 
 Opcionalmente, puedes especificar el valor que esperas en esa propiedad.
*/
const cases = ["je", "Je", "f", "F"]
test.each( cases )("Debe rechazar nombres demasiado cortos", ( name )=>{
  const response = validateName(name);
  expect( response ).toHaveProperty("errors"); //La respuesta es un objeto y tiene la propiedad errors
  expect( response ).toHaveProperty("isValid", false); //La respuesta es un objeto y tiene la propiedad isValid en false
  expect( response.isValid ).toBeFalsy();
  expect( response.errors.length ).toBeGreaterThan(0);
  expect( response.errors ).toContain("El nombre debe tener más de dos caracteres");
});


const noStringCases = [null, 123, undefined];
test.each(noStringCases)("Debe rechazar valores que no son string(null, 123, undefined)", (value)=>{
    const response = validateName(value);
    expect( response.isValid ).toBeFalsy();
    expect( response.errors.length ).toBeGreaterThan(0);
    expect( response.errors ).toContain("El valor ingresado no es un nombre válido");
});