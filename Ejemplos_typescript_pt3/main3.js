var Punto = /** @class */ (function () {
    function Punto(x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 10; }
        this.x = x;
        this.y = y;
    }
    return Punto;
}());
var miPunto = new Punto();
var Caja = /** @class */ (function () {
    function Caja() {
        this.contenido = "";
    }
    Caja.prototype.set = function (valor) {
        this.contenido = valor;
        return this;
    };
    return Caja;
}());
var miCaja = new Caja();
var valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);
