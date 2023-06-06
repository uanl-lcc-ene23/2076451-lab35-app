let montoTXT = document.getElementById("monto");
let articuloTXT = document.getElementById("articulo");
let mostrarArreglo = document.getElementById("mostrarArreglo");
//ARREGLO
let gasto =[]; //ES UN ARREGLO VACÍO

function guardar()
{
    let nuevoGasto = articuloTXT.value + ": $" + montoTXT.value;

    gasto.push(nuevoGasto);

    //OPCIÓN PARA IMPRIMIR EN CONSOLA
    console.log(gasto);

    //OPCIÓN PARA IMPRIMIR PARA EL USUARIO
    mostrarArreglo.innerHTML=gasto;

    //PUNTO EXTRA+10
    //Poner los articulos y precio en forma de lista 
}