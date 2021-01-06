"use strict";
function saludar(nombre) {
    console.log("nombre:" + nombre);
}
function suma(numero1, numero2) {
    console.log("numero:" + numero1);
}
// funciones con parametro obligatorio
function activar(quien, //requerido
momento, //opcional
objeto = 'omarxxx' //dato por defecto
) {
    momento ? console.log("quien" + quien, "objeto" + objeto, "momento" + momento) : console.log("quien" + quien, "objeto" + objeto);
}
//funciones flecha
let myNames = (a) => {
    console.log(a);
};
//desestruturacion de objetos
const avenger = {
    'nombre': 'steve',
    'key': 'capitan america',
    'poder': 'fuerza'
};
const { nombre, key, poder } = avenger;
console.log(nombre);
console.log(key);
console.log(poder);
const avengers4 = ['thor', 'ironman', 'spiderman'];
const [loki, hombre, arana] = avengers4;
console.log(loki);
console.log(hombre);
console.log(arana);
const enviarMision = (xmen) => {
    console.log('enviando a' + xmen.nombre + 'a la mision');
};
const regresarMision = (xmen) => {
    console.log('regresando a' + xmen.nombre + 'a la mision');
};
const wolve = {
    nombre: "omar",
    edad: 13
};
//CLASEES
class Avenger {
    constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}
const antman = new Avenger('steve', 'ironman');
const wolverine = {
    nombre: "Logan"
};
saludar('omar');
suma(12, 13);
activar('omar', 'tarde', 'jaja');
