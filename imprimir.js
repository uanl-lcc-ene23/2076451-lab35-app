// var campoTexto = document.getElementById("campoTexto")

// console.log(campoTexto);

// function imprimir ()
// {
//     console.log(campoTexto.value);
// }

// //Función para limpiar la caja de texto
// function limpiar()
// {
//     //console.clear(campoTexto.value); PARA LIMPIAR TODA LA CONSOLA (COMO ELIMINARLA)
//     campoTexto.value="";
// }

let usuarioTXT = document.getElementById("Usuario");
let passwordTXT = document.getElementById("password");
let p = document.getElementById("mensaje");

function login(){
    //"Iniciaste sesión correctamente"
    p.innerHTML = "Login correcto, " + usuarioTXT.value;

    limpiar();
}

function registro(){
    //Registraste la sesión correctamente
    p.innerHTML = "Registro completo, " + usuarioTXT.value;

    limpiar();
}

function limpiar(){
    usuarioTXT.value = "";
    passwordTXT.value = "";
}

function tooglePsw(){
    password.value= Text;
}

/*function tooglePssw()
{
    1. CAMBIAR EL ATRIBUTO TYPE
    2. CAMBIA EL TEXTO DE SPAN
}*/