console.log("\n                   Tipos -> Void\n");
function saludar2(): void
{
    console.log("Hola Mundo... Cruel");
}
saludar2();

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