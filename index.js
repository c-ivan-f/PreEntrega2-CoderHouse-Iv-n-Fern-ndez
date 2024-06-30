// Creo una función constructora que me permita crear productos.
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

// Creo un array vacío para almacenar los productos.
const productos = [];

// Instancio los productos y los agrego al array.
let producto1 = new Producto('cafe', 1500, true);
let producto2 = new Producto('te', 1000, false);
let producto3 = new Producto('medialunas', 600, true);
let producto4 = new Producto('chocotorta', 1500, false);

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);

// Creo un array para el carrito.
const carrito = [];

// Función para mostrar la lista de productos en un alert.
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n\n";
    productos.forEach(producto => {
        mensaje += `Nombre: ${producto.nombre}, Precio: ${producto.precio}, Stock: ${producto.stock ? 'Disponible' : 'No disponible'}\n`;
    });
    alert(mensaje);
}

// Función para agregar productos al carrito.
function agregarAlCarrito() {
    const nombreProducto = prompt("Ingresa el nombre del producto que deseas agregar al carrito:");
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombreProducto.toLowerCase()) {
            carrito.push(productos[i]);
            alert(`${productos[i].nombre} ha sido agregado al carrito.`);
            return;
        }
    }
    alert("Producto no encontrado.");
}


// Mostrar productos y permitir al usuario agregar al carrito.
mostrarProductos();
agregarAlCarrito();
