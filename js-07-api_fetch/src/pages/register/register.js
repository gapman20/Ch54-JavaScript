
import { insertMainHeader as menu } from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js"
import { ejecutarObjetos as objeto } from "./objetos.js";
import { leerInputsFormulario } from "./leerInputFormulario.js";

menu(document.getElementById("header"));
footer( document.getElementById("footer"));
objeto();

const registerForm = document.getElementById("contactForm");

registerForm.addEventListener( "submit" , ( e )=>{
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");
    // console.log( e );
    
    // Obtener los datos del formulario.
    const newUser = leerInputsFormulario(registerForm);
    console.log(newUser);
    
    // Validar los datos
    // Si los datos son válidos enviar el formulario
        // - Usando la api fetch al servidor, con el método POST enviar el formulario
           // = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página
           // = Enviar al usuario el error del servidor
    // Si los datos no son válidos enviar un mensaje al usuario
} );