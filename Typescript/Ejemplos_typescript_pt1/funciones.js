console.log("\n                   Tipos -> Void\n");
function saludar2() {
    console.log("Hola Mundo... Cruel");
}
saludar2();
console.log("\n                   Tipos -> Never\n");
function error(mensaje) {
    throw new Error(mensaje);
}
function fallo() {
    return error("Reportar fallo");
}
function loopInfinito() {
    while (true) { }
}
console.log("\n                   Tipos -> Objects\n");
//crear({ prop: 0 });
//crear(null);
//crear(undefined);
//crear([]);
//false es un tipo primitivo, por lo cual se genera un error
//crear(false);
console.log("\n                   Tipos -> Unions\n");
function imprimirId(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed());
    }
}
imprimirId(100.234234123);
imprimirId('este_es_mi_id');
//imprimirId(true); -> error por que boolean no está en los tipos que puede recibir
console.log("\n                   Tipos -> Functions\n");
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Nubia");
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
console.log("\n                 Funciones Anónimas\n");
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
console.log("\n                   Tipos -> Literales\n");
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir("Casado");
console.log("\n                   Tipos -> Funciones como expresiones\n");
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
