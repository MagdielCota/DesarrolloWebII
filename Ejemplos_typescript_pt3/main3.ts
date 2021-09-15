class Punto 
{
    x: number;
    y: number;

    constructor (x = 10, y = 10)
    {
        this.x = x;
        this.y = y;
    }
}

let miPunto = new Punto()

class Caja
{
    contenido = "";
    set ( valor: string)
    {
        this.contenido = valor;
        return this;
    }
}

const miCaja: Caja = new Caja();
const valorRetornado = miCaja.set("Joyas");
console.log(miCaja);
console.log(valorRetornado);