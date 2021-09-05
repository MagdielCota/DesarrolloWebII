console.log("\n                   Primer Ejemplo\n");
function saludar(name: string)
{
    return "Hola, " + name;
}

console.log(saludar("Magdiel"));
console.log(saludar("Carlos"));

console.log("\n                   Tipos -> Boolean\n");
let esVerdadero = true;
console.log(esVerdadero);

console.log("\n                   Tipos -> Number\n");
let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;
console.log(entero);
console.log(hexadecimal);
console.log(binario);
console.log(octal);

console.log("\n                   Tipos -> String\n");
let marca: string = 'Toyota';
let modelo: string = "Tacoma";
let impresion: string = `
Marca: ${marca}
Modelo: ${modelo}
`;
console.log(impresion);

console.log("\n                   Tipos -> Arrays\n");
let listaDeNumeros : number[] = [1, 2, 3];
let listaDeNumeros2 : Array<number> = [1, 2, 3];
// listaDeNumeros.push('a'); error -> no se puede asignar un valor string a un arreglo number
console.log(listaDeNumeros);
console.log(listaDeNumeros2);

console.log("\n                   Tipos -> Tuples\n");
let futbolista: [string, number];
futbolista = ["Raul Jimenez", 28];
console.log(futbolista);
console.log(`El nombre es ${futbolista[0]}`);
console.log(`Su edad es ${futbolista[1]}`);

console.log("\n                   Tipos -> Enums\n");
enum MarcasDeAutos
{
    Toyota,
    Mazda,
    Nissan
}
let mazda3: MarcasDeAutos = MarcasDeAutos.Mazda;
enum MarcasDeAutos2
{
    Toyota = 100,
    Mazda,
    Nissan
}
let mazda32: MarcasDeAutos2 = MarcasDeAutos2.Mazda;
console.log(mazda3);
console.log(mazda32);
console.log(MarcasDeAutos[1]);

console.log("\n                   Tipos -> Any\n");
let variableSinTipo: any = 'Hola pedrito';
console.log(variableSinTipo);
variableSinTipo = 100;
console.log(variableSinTipo);

console.log("\n                   Tipos -> Unknown\n");
let valorDesconocido: any = 4;
console.log(valorDesconocido);
valorDesconocido = true;
console.log(valorDesconocido);

console.log("\n                   Tipos -> Void\n");
function saludar2(): void
{
    console.log("Hola Mundo... Cruel");
}
saludar2();

console.log("\n                   Tipos -> Null y Undefined\n");
let variableSinDefinir: undefined = undefined;
console.log(variableSinDefinir);
let variableNula: null = null;
console.log(variableNula);

console.log("\n                   Tipos -> Never\n");

function error(mensaje:string) : never
{
    throw new Error(mensaje);
}
function fallo() : never
{
    return error("Reportar fallo");
}
function loopInfinito() : never
{
    while(true){}
}

console.log("\n                   Tipos -> Objects\n");
declare function crear(o: object) : void;

//crear({ prop: 0 });
//crear(null);
//crear(undefined);
//crear([]);

//false es un tipo primitivo, por lo cual se genera un error
//crear(false);

console.log("\n                   Tipos -> Unions\n");
function imprimirId (id : number | string)
{
    if (typeof id === "string")
    {
        console.log(`El id es ${(id as string).toUpperCase()}`);
    }
    else
    {
        console.log(`El id es ${(id as number).toFixed()}`);

    }
}
imprimirId(100.234234123);
imprimirId('este_es_mi_id');
//imprimirId(true); -> error por que boolean no está en los tipos que puede recibir

console.log("\n                   Tipos -> Type Assertion\n");
let algunValor: unknown = "esto es un string";
//opcion 1
let longitudDelSetring: number = (algunValor as string).length;
//opcion 2
let longitudDelSetring2: number = (<string>algunValor).length;
console.log(longitudDelSetring);
console.log(longitudDelSetring2);

console.log("\n                   Tipos -> Functions\n");
function saludar3(nombre: string)
{
    console.log(`Hola ${nombre}`);
}
saludar3("Nubia");
function elevarAlCuadrado(base: number): number
{
    return base * base;
}
let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
console.log("\n                 Funciones Anónimas\n");
const nombres = ["Juan", "Pedro", "Luis"];

nombres.forEach(function (s)
{
    console.log(s.toUpperCase());
})
nombres.forEach((s) =>
{
    console.log(s.toUpperCase());
})

console.log("\n                   Tipos -> Aliases\n");
type Punto =
{
    x: number;
    y: number;
}
function imprimirCoordenada(punto: Punto)
{
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada y es : ${punto.y}`);
}

imprimirCoordenada({x: 10, y: 25});

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
let punto1: Punto = {x: 10, y: 20};
console.log(punto1.x);
punto1.x = 20;
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

console.log("\n                   Tipos -> Literales\n");
function imprimir(estadoCivil: 'Soltero' | 'Casado')
{
    console.log(estadoCivil);
}
imprimir("Casado");

console.log("\n                   Tipos -> Funciones como expresiones\n");
function saludar4(fn: (a: string) => void)
{
    fn("Hola Mundo");
}
function imprimirEnConsola(s: string)
{
    console.log(s);
}
saludar4(imprimirEnConsola);