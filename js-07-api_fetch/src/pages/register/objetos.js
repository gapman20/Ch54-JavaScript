

    const myArray = [1,2,3,4];
    const unionArray = myArray.join(" - "); //1 - 2 - 3 - 4
    myArray.push(5,6,7,8);

    const arrayData = myArray[3] // 4

    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        
    }




    const myObj = { 
        key: "valor",
        name: "Gabriel",
        firstName: "Alvarez",
        email: "gabriel@gmail.com",
        password:"despertar!",
        birthdate: "2025-02-25",
        isActive: true,
        hobbies: ["Despertar personas", "Verdades incómodas", "Comer pure"],
        favoritos: {
            bebidas: ["agua", "pozol", "agua de tamarindo"],
            comidas: ["pozole", "tacos de suadero"]
        },
        saludar: function myFunction( persona ){
            return `Hola ${persona}`;
        }
    };

const ejecutarObjetos = () =>{  

// Leer datos del objeto

const nombrePersona = myObj.name; // Gabriel
const favoritos = myObj.favoritos.bebidas; // ["agua", "pozol", "agua de tamarindo"]
const segundaBebida = favoritos[1]; // "pozol"
const terceraBebida = myObj.favoritos.bebidas[2]; //"agua de tamarindo"

//  Acceder al atributo fisrtName
const firstName = myObj.firstName;
const primerNombre= myObj["firstName"];

}

export { ejecutarObjetos };