//Declarar la variable puntaje
let puntaje;

//Asigno un valor a la variable
puntaje = 0

cambiar = function () {
    puntaje = 1000;
}

disminuirUno = function () {
    puntaje = puntaje - 1;
}

incrementarUno = function () {
    puntaje = puntaje + 1;
}

incrementarDiez = function () {
    puntaje = puntaje + 10;
}

disminuirDiez = function () {
    puntaje = puntaje - 10;
}

mostrar = function () {
    alert("El puntaje es: " + puntaje)
}
