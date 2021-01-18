const carrito = new Set();

// Agregar elemento al Set
carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");

// Eliminar elemento del Set
console.log( carrito.delete("Disco #3") );

// Comprobar si un valor existe en el Set
console.log( carrito.has("Camisa") );

// Para saber cuantos elementos hay en un Set
console.log(carrito.size);

// Eliminar todos los elementos del Set
// carrito.clear();


// Los Set son iterables
carrito.forEach( ( producto, index, pertenece ) => {
	// console.log(producto);
	// console.log(index);
	console.log(pertenece);
});


console.log(carrito);


// Del siguiente arreglo eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);

