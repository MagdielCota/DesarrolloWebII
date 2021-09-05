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
