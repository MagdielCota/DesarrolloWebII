console.log("\n                   Tipos -> Interfaces\n");
/////////////////////////////////////////////////////////
function imprimirEtiqueta(etiqueta: {label: string})
{
    console.log(etiqueta.label);
}
let miEtiqueta = {numero: 10, label: "Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);
/////////////////////////////////////////////////////////
interface Etiqueta
{
    label: string;
}
function imprimirEtiqueta2(etiqueta: Etiqueta)
{
    console.log(etiqueta.label);
}
let miEtiqueta2 = {numero: 10, label: "Esta es mi etiqueta 2"};
imprimirEtiqueta2(miEtiqueta2)
/////////////////////////////////////////////////////////
interface Cuadrado
{
    color?: string;
    ancho: number;
}
function crearCuadrado(cuadrado: Cuadrado):{area: number}
{
    const area = cuadrado.ancho * cuadrado.ancho;
    return {area: area};
}
console.log(crearCuadrado({ancho: 20}));
/////////////////////////////////////////////////////////
interface Punto2
{
    readonly x: number;
    readonly y: number;
}
let punto1: Punto2 = {x: 10, y: 20};
console.log(punto1.x);
//punto1.x = 20;
console.log(punto1.x);
console.log("\n                   Tipos -> Interfaces vs Types\n");
interface Transporte
{
    nombre: string;
}
type Figura =
{
    nombre: string;
}
interface Auto extends Transporte
{
    ruedas: number;
}
type Cuadrado2  = Figura &
{
    lados: 4;
}