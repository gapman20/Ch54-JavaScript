
import { insertMainHeader as menu } from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js"
import { ejecutarObjetos as objeto } from "./objetos.js";
import { leerInputsFormulario } from "./leerInputFormulario.js";
import { isUserValid } from "../../js/validations/isUserValid.js";
import { postUser } from "../../js/api/postUser/postUser.js";

menu(document.getElementById("header"));
footer( document.getElementById("footer"));
objeto();

const registerForm = document.getElementById("contactForm");

registerForm.addEventListener( "submit" , async ( e )=>{
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");
    // console.log( e );
    
    // Obtener los datos del formulario.
    const newUser = leerInputsFormulario(registerForm); 
    const validateUser = isUserValid(newUser);
    console.log(validateUser);
    
    // Validar los datos
    if( validateUser.isValid ){
        // Si los datos son válidos enviar el formulario
        try{
            const response = await postUser( newUser, "https://reqres.in/api/users" );
            alert("Formulario enviado correctamente" + response.createdAt);
        }catch(error){
            alert( "Error al enviar el formulario" + error.message);
        }
        // = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página
        // - Usando la api fetch al servidor, con el método POST enviar el formulario

    } else{
        // = Enviar al usuario el error del servidor
        alert(validateUser.errors.join("\n"));
    }
    // Si los datos no son válidos enviar un mensaje al usuario
} );