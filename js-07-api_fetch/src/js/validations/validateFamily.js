
const validateFamily = (family) =>{
        const result = {
        isValid: true,
        errors: []
    };

    if( family === ""){
        result.isValid = false;
        result.errors.push("El apellido no debe de estar vacío");
    }else if ( family.length <3 ){
        result.isValid = false;
        result.errors.push("El apellido debe tener al menos 3 caracteres");
    }

    return result;
}

export {validateFamily};