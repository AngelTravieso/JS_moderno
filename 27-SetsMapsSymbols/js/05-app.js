const sym = Symbol("1");
const sym2 = Symbol("1");

// console.log ( Symbol() === Symbol() );

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = "Angel";
persona[apellido] = "Travieso";
persona.tipoCliente = "Premium";
persona.saldo = 500;


// console.log(persona);

// Acceder a una propiedad Symbol de un objeto
// console.log(persona[nombre]);

// Las propiedades que utilizan un Symbol no son iterables
// for (let i in persona) {
// 	console.log(i);
// }

// Definir una descripción del Symbol
const nombreCliente = Symbol("Nombre del Cliente");
const cliente = {};

cliente[nombreCliente] = "Angel";

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);