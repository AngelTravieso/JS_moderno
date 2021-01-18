// Un generador es una función que retorna un iterador
function *crearGenerador() {
	// Los yields son los valores a los cuales el generador va a iterar
	yield 1;
	yield "Angel";
	yield 3 + 3;
	yield true;
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);

// Generador para carrito de compras
function *generadorCarrito( carrito ) {
	for(let i = 0; i < carrito.length; i++) {
		yield carrito[i];
	}
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

console.log(carrito.length);

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());