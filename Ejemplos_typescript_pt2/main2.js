var _this = this;
console.log("\n                   Funciones -> Constructor Signature\n");
var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(Caballo, "Paso Fino");
var miAutomovil = construirTransporte(Automovil, "Toyota");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil se llama " + miAutomovil.nombre);
console.log("\n                   Funciones -> Parámetros Opcionales\n");
function f(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
function f2(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
function f3(n) {
    if (n === void 0) { n = 10; }
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
function miIterador(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
miIterador([1, 2, 3], function (a) { return console.log(a); });
miIterador([1, 2, 3], function (a, i) { return console.log(a, i); });
function miIterador2(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
miIterador2([1, 2, 3], function (a) { return console.log(a); });
miIterador2([1, 2, 3], function (a, i) { return console.log(a, i); });
console.log("\n                   Funciones -> Overload\n");
function longitud(x) {
    return x.length;
}
console.log("Función Longitud");
console.log(longitud("Hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
function calcularLongitud(x) {
    return x.length;
}
console.log("Función CalcularLongitud");
console.log(calcularLongitud("Hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5]));
console.log("\n                   Funciones -> Uso de 'this'\n");
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log("Función normal");
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
var usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        _this.admin = true;
    }
};
console.log("Función tipo flecha");
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);
console.log("\n                   Funciones -> Rest parameters\n");
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
        return p * c;
    }, n);
}
console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));
console.log("\n                   Funciones -> Parameter destructuring\n");
function sumar(num) {
    return num.a + num.b + num.c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar(numeros));
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar2({ a: 1, b: 2, c: 3 }));
function sumar3(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar3({ a: 1, b: 2, c: 3 }));
console.log("\n                   Object -> Types\n");
function saludar(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar({ nombre: "Luis", edad: 22 }));
function saludar2(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar2({ nombre: "Elena", edad: 25 }));
function saludar3(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar3({ nombre: "Anabel", edad: 30 }));
console.log("\n                   Object Types -> Property Modifiers");
console.log("\n                   Object Types -> Property Modifiers -> Propiedades Opcionales\n");
function imprimir(computador) {
    console.log("Sistema operativo: " + computador.os);
    console.log("Memoria: " + computador.memoria);
    console.log("Procesador: " + computador.procesador);
}
imprimir({
    os: "Windows",
    memoria: 8,
    procesador: "Intel"
});
console.log("\n                   Object Types -> Readonly properties");
var miCachorro = { raza: "Shitzu" };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
//Pedro.edad++;  <- error, no se puede modificar
console.log("\n                   Object Types -> Extender tipos");
console.log("\n                   Object Types -> Extender múltiples tipos");
var macbookPro = {
    memoria: "166",
    procesador: "Intel",
    hdd: "1Tb",
    so: "OSX",
    version: "Catalina",
    bateria: "Litio",
    monitor: "17 Pulgadas",
    teclado: "Español"
};
var ubuntuSever = {
    memoria: "64G",
    procesador: "Intel",
    hdd: "4Tb",
    so: "Ubuntu",
    version: "Trusty",
    conexion: "Ethernet"
};
console.log("\n                   Object Types -> Intersection types");
var macbookPro2 = {
    memoria: "166",
    procesador: "Intel",
    hdd: "1Tb",
    so: "OSX",
    version: "Catalina"
};
