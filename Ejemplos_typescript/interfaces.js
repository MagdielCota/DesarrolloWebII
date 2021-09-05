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
//punto1.x = 20;
console.log(punto1.x);
console.log("\n                   Tipos -> Interfaces vs Types\n");
