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