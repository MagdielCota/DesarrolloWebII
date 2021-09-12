console.log("\n                   Funciones -> Constructor Signature\n");
interface Transporte
{
    nombre: string;
}

class Caballo implements Transporte
{
    constructor(public nombre: string) {}
}

class Automovil implements Transporte
{
    constructor(public nombre: string) {}
}

type ConstructorDeTransporte =
{
    new (nombre: string): Transporte;
};

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string)
{
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, "Paso Fino");
const miAutomovil = construirTransporte(Automovil, "Toyota");

console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil se llama " + miAutomovil.nombre);

console.log("\n                   Funciones -> Parámetros Opcionales\n");
function f(n: number)
{
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
function f2(n?: number)
{
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
function f3(n = 10)
{
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}

console.log("Llamada a la Función 1");
f(10);
console.log("Llamada a la Función 2");
//f2();
console.log("Llamada a la Función 3");
f3(1);
f3();

console.log("\n                   Funciones -> Parámetros Opcionales en los Callbacks\n");
function miIterador(arr: any[], callback: (arg: any, index?: number) => void)
{
    for(let i = 0; i < arr.length; i++)
    {
        callback(arr[i], i);
    }
}

miIterador([1, 2, 3], (a) => console.log(a));
miIterador([1, 2, 3], (a, i) => console.log(a, i));

function miIterador2(arr: any[], callback: (arg: any, index?: number) => void)
{
    for(let i = 0; i < arr.length; i++)
    {
        callback(arr[i]);
    }
}

miIterador2([1, 2, 3], (a) => console.log(a));
miIterador2([1, 2, 3], (a, i) => console.log(a, i));

console.log("\n                   Funciones -> Overload\n");
function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number
{
    return x.length;
}
console.log("Función Longitud");
console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));

function calcularLongitud(x: any[] | string)
{
    return x.length;
}
console.log("Función CalcularLongitud");
console.log(calcularLongitud("Hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5]));

console.log("\n                   Funciones -> Uso de 'this'\n");
const usuario =
{
    id: 123,
    admin: false,
    volverseAdmin: function()
    {
        this.admin = true;
    },
};
console.log("Función normal");
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);

const usuario2 =
{
    id: 123,
    admin: false,
    volverseAdmin: () =>
    {
        this.admin = true;
    },
};
console.log("Función tipo flecha");
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);

console.log("\n                   Funciones -> Rest parameters\n");
function multiplicar(n: number, ...m: number[]): number
{
    return m.reduce((p, c) =>
    {
        return p * c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));

console.log("\n                   Funciones -> Parameter destructuring\n");
function sumar(num)
{
    return num.a + num.b + num.c;
}

const numeros = {a: 1, b: 2, c: 3};
console.log(sumar(numeros));

function sumar2({a, b, c}): number
{
    return a + b + c;
}

console.log(sumar2({a: 1, b: 2, c: 3}));

function sumar3({a, b, c}: {a: number; b: number; c: number}): number 
{
    return a + b + c;
}

console.log(sumar3({a: 1, b: 2, c: 3}));

console.log("\n                   Object -> Types\n");
function saludar(persona: {nombre: string; edad: number})
{
    return `Hola ${persona.nombre}`;
}

console.log(saludar({nombre: "Luis", edad: 22}));

interface Persona
{
    nombre: string;
    edad: number;
}

function saludar2(persona: Persona)
{
    return `Hola ${persona.nombre}`;
}

console.log(saludar2({nombre: "Elena", edad: 25}));

type Persona2 =
{
    nombre: string;
    edad: number;
}

function saludar3(persona: Persona2)
{
    return `Hola ${persona.nombre}`;
}

console.log(saludar3({nombre: "Anabel", edad: 30}));

console.log("\n                   Object Types -> Property Modifiers");
console.log("\n                   Object Types -> Property Modifiers -> Propiedades Opcionales\n");
interface Computadora
{
    os: "Windows" | "Linux" | "Mac";
    monitor?: "CRT" | "LED";
    memoria: number;
    procesador: "Intel" | "Amd";
}
function imprimir(computador: Computadora)
{
    console.log(`Sistema operativo: ${computador.os}`);
    console.log(`Memoria: ${computador.memoria}`);
    console.log(`Procesador: ${computador.procesador}`);
}

imprimir({
    os: "Windows",
    memoria: 8,
    procesador: "Intel",
});

console.log("\n                   Object Types -> Readonly properties");
interface Perro
{
    readonly raza: string;
}

const miCachorro: Perro = {raza: "Shitzu"};
console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);
//miCachorro.raza = "Shitzu"; <- error, no se puede modificar

interface Persona5
{
    edad: number;
}
interface EdadNoModificable
{
    readonly edad: number;
}

const Luis: Persona5 = {edad: 20};
const Pedro: EdadNoModificable = Luis;

Luis.edad++;
//Pedro.edad++;  <- error, no se puede modificar

console.log("\n                   Object Types -> Extender tipos");
interface Direccion
{
    nombre: string;
    calle: string;
    numero: number;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}
interface DireccionDeUnDepartamento extends Direccion
{
    unidad: string;
}

console.log("\n                   Object Types -> Extender múltiples tipos");
interface Computadora2
{
    memoria: string;
    procesador: string;
    hdd: string;
}
interface SistemaOperativo2
{
    so: string;
    version: string;
}

interface Portatil extends Computadora2, SistemaOperativo2
{
    bateria: string;
    monitor: string;
    teclado: string;
}
interface Servidor extends Computadora2, SistemaOperativo2
{
    conexion: string;
}

const macbookPro: Portatil =
{
    memoria: "166",
    procesador: "Intel",
    hdd: "1Tb",
    so: "OSX",
    version: "Catalina",
    bateria: "Litio",
    monitor: "17 Pulgadas",
    teclado: "Español",
}
const ubuntuSever: Servidor =
{
    memoria: "64G",
    procesador: "Intel",
    hdd: "4Tb",
    so: "Ubuntu",
    version: "Trusty",
    conexion: "Ethernet",
}

console.log("\n                   Object Types -> Intersection types");
interface Computadora3
{
    memoria: string;
    procesador: string;
    hdd: string;
}
interface SistemaOperativo3
{
    so: string;
    version: string;
}

type Portatil2 = Computadora3 & SistemaOperativo3;

const macbookPro2: Portatil2 =
{
    memoria: "166",
    procesador: "Intel",
    hdd: "1Tb",
    so: "OSX",
    version: "Catalina",
}