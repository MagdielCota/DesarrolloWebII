console.log("\n                   Primer Ejemplo\n");
function saludar(name) {
    return "Hola, " + name;
}
console.log(saludar("Magdiel"));
console.log(saludar("Carlos"));
console.log("\n                   Tipos -> Boolean\n");
var esVerdadero = true;
console.log(esVerdadero);
console.log("\n                   Tipos -> Number\n");
var entero = 6;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 484;
console.log(entero);
console.log(hexadecimal);
console.log(binario);
console.log(octal);
console.log("\n                   Tipos -> String\n");
var marca = 'Toyota';
var modelo = "Tacoma";
var impresion = "\nMarca: " + marca + "\nModelo: " + modelo + "\n";
console.log(impresion);
console.log("\n                   Tipos -> Arrays\n");
var listaDeNumeros = [1, 2, 3];
var listaDeNumeros2 = [1, 2, 3];
// listaDeNumeros.push('a'); error -> no se puede asignar un valor string a un arreglo number
console.log(listaDeNumeros);
console.log(listaDeNumeros2);
console.log("\n                   Tipos -> Tuples\n");
var futbolista;
futbolista = ["Raul Jimenez", 28];
console.log(futbolista);
console.log("El nombre es " + futbolista[0]);
console.log("Su edad es " + futbolista[1]);
console.log("\n                   Tipos -> Enums\n");
var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 0] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Mazda"] = 1] = "Mazda";
    MarcasDeAutos[MarcasDeAutos["Nissan"] = 2] = "Nissan";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var mazda3 = MarcasDeAutos.Mazda;
var MarcasDeAutos2;
(function (MarcasDeAutos2) {
    MarcasDeAutos2[MarcasDeAutos2["Toyota"] = 100] = "Toyota";
    MarcasDeAutos2[MarcasDeAutos2["Mazda"] = 101] = "Mazda";
    MarcasDeAutos2[MarcasDeAutos2["Nissan"] = 102] = "Nissan";
})(MarcasDeAutos2 || (MarcasDeAutos2 = {}));
var mazda32 = MarcasDeAutos2.Mazda;
console.log(mazda3);
console.log(mazda32);
console.log(MarcasDeAutos[1]);
console.log("\n                   Tipos -> Any\n");
var variableSinTipo = 'Hola pedrito';
console.log(variableSinTipo);
variableSinTipo = 100;
console.log(variableSinTipo);
console.log("\n                   Tipos -> Unknown\n");
var valorDesconocido = 4;
console.log(valorDesconocido);
valorDesconocido = true;
console.log(valorDesconocido);
console.log("\n                   Tipos -> Void\n");
function saludar2() {
    console.log("Hola Mundo... Cruel");
}
saludar2();
console.log("\n                   Tipos -> Null y Undefined\n");
var variableSinDefinir = undefined;
console.log(variableSinDefinir);
var variableNula = null;
console.log(variableNula);
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
console.log("\n                   Tipos -> Type Assertion\n");
var algunValor = "esto es un string";
//opcion 1
var longitudDelSetring = algunValor.length;
//opcion 2
var longitudDelSetring2 = algunValor.length;
console.log(longitudDelSetring);
console.log(longitudDelSetring2);
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
console.log("\n                   Tipos -> Aliases\n");
function imprimirCoordenada(punto) {
    console.log("La coordenada x es : " + punto.x);
    console.log("La coordenada y es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
console.log("\n                   Tipos -> Interfaces\n");
/////////////////////////////////////////////////////////
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEtiqueta2(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta2 = { numero: 10, label: "Esta es mi etiqueta 2" };
imprimirEtiqueta2(miEtiqueta2);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
console.log(crearCuadrado({ ancho: 20 }));
var punto1 = { x: 10, y: 20 };
console.log(punto1.x);
punto1.x = 20;
console.log(punto1.x);
console.log("\n                   Tipos -> Interfaces vs Types\n");
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
