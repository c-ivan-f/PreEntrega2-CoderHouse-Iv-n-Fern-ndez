//creo una funcion constructora que me permita crear productos.
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}
//creo un array vacio para almacenar los productos.
const productos = [];
//instancio los productos y los agrego al array.
let producto1 = new Producto('cafe', 1500, true);
let producto2 = new Producto('te', 1000, false);
let producto3 = new Producto('medialunas', 600, true);
let producto4 = new Producto('chocotorta', 1500, false);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);

// creo una funcion que me permita calcular la suma de productos.

function sumarPreciosDeProductos(indice1, indice2) {
    if (indice1 >= 0 && indice1 < productos.length && indice2 >= 0 && indice2 < productos.length) {
        const precio1 = productos[indice1].precio;
        const precio2 = productos[indice2].precio;
        return ('La suma de los precios es:'+ precio1 + precio2);
    } else {
        return 'Índices inválidos';
    }
}

// creo una funcion para verificar la disponibilidad de un producto dado su índice
function verificarDisponibilidad(indice) {
    if (productos[indice].stock ==true) {
        return 'el producto está disponible';
    } else {
        return 'el producto no está disponible';
    }
}