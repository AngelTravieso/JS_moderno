// Object Literal
const cliente = {
	nombre: "Angel",
	precio: 500
}

console.log(cliente);


// Object Constructor
function Cliente(nombre, precio) {
	this.nombre = nombre;
	this.precio = precio;
}

const angel = new Cliente("Angel", 500);

console.log(angel);