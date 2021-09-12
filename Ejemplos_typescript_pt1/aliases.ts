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