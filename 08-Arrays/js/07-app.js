const carrito = [];

// Definir un producto
const producto = {
	nombre: "Monitor 32 pulgadas",
	precio: 400
}

const producto2 = {
	nombre: "Celular",
	precio: 800
}

const producto4 = {
	nombre: "Celular 2",
	precio: 100
}


carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
	nombre: "Teclado",
	precio: 50
}

carrito.unshift(producto3);
console.table(carrito);

// // Eliminar ultimo elemento del arreglo
// carrito.pop();
// console.table(carrito);


// // Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

// Eliminar posicion deseada del arreglo
carrito.splice(1, 1);
console.table(carrito);