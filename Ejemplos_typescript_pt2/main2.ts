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

console.log("\n                   Object Types -> Generics");
interface Caja
{
    contenido: any;
}interface Caja2
{
    contenido: unknown;
}
let x: Caja2 =
{
    contenido: "Hola mundo",
}

// mediante typeof podemos verificar si el tipo es string
if (typeof x.contenido === "string")
{
    console.log(x.contenido.toLocaleLowerCase());
}

// mediante "as tipo" podemos decirle al compilador que esto es siempre string
console.log((x.contenido as string).toLocaleLowerCase());

interface CajaNumber
{
    contenido: number;
}
interface CajaString
{
    contenido: string;
}
interface CajaBoolean
{
    contenido: boolean;
}

//eso implica que tendremos que crear diferentes funciones/sobrecarga, para poder operar con cada uno de estos tipos
function setContenido(caja: CajaNumber, nuevoContenido: string): void;
function setContenido(caja: CajaString, nuevoContenido: number): void;
function setContenido(caja: CajaBoolean, nuevoContenido: boolean): void;
function setContenido(caja: {contenido: any}, nuevoContenido: any)
{
    caja.contenido = nuevoContenido;
}

interface Caja3<T>
{
    contenido: T;
}

let cajaDeString: Caja3<string> = { contenido: "Hola mundo" };
let cajaDeNumero: Caja3<number> = { contenido: 100 };
let cahaDeFecha: Caja3<Date> = { contenido: new Date() };

type Cajita<T> =
{
    contenido: T;
}

let cajaDeString2: Cajita<string> = { contenido: "Hola mundo" };
let cajaDeNumero2: Cajita<number> = { contenido: 100 };
let cahaDeFecha2: Cajita<Date> = { contenido: new Date() };

console.log("\n                   Object Types -> Array type");
const imprimirTareas = (v: Array<string>) =>
{
    v.forEach((v) =>
    {
        console.log(v);
    });
};

const misTareas: string[] =
[
    "levantarse",
    "lavarse los dientes",
    "sacar al perro",
];

imprimirTareas(misTareas);

console.log("\n                   Object Types -> ReadonlyArray type");
const miLista : ReadonlyArray<string> = ["a", "b", "c"];

//miLista.push("d"); <- error

//forma incorrecta: no existe el constructor readonlyarray
//const miLista2 = new ReadonlyArray('a', 'b', 'c');

//forma correcta: podemos asignar un arreglo normal a uno de solo lectura
const miLista3: ReadonlyArray<string> = ['a', 'b', 'c'];

console.log("\n                   Object Types -> Tuples");
type Auto = [string, number];

const prius : Auto = ['Toyota', 2015];
const civic : Auto = ['Honda', 2016];

console.log('El Prius es marca: ', prius[0],' y modelo ', prius[1]);
console.log('El Civic es marca: ', civic[0],' y modelo ', civic[1]);

//Las tuplas son muy utilizadas dentro de las convenciones de API´s, esto brinda flexibilidad cuando deseamos asignar nombres a arti de la destructuración
const prius2: [string, number] = ["Toyota", 2015];

const [marca, modelo] = prius2;

console.log("La marca del prius es: ", marca);
console.log("El modelo del prius es: ", modelo);

console.log("\n                   Rest tuples");

type StringNumberBooleans = [string, number, ...boolean[]];
const a: StringNumberBooleans = ["a", 1, true, false, true];

console.log("\n                   Readonly tuples");
type Auto5 = readonly [string, number];

const prius3: Auto5 = ["Toyota", 2014];

//prius3[0] = 'Honda'; <- error, no se puede modificar por que es una propiedad readonly