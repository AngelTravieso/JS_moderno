// Los maps son listas ordenadas en llave y valor
const cliente = new Map();

// Agregar un elemento a un map
cliente.set("nombre", "Angel");
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);
// cliente.set([0], true);

console.log(cliente);

// Obtener cuantos elementos tiene el Map
console.log(cliente.size);

// Verificar si el Map tiene dicha propiedad
console.log(cliente.has("nombre"));

// Obtener valor de una propiedad
console.log(cliente.get("nombre"));

// Eliminar propiedad
cliente.delete("saldo");

console.log(cliente.has("saldo"));

console.log(cliente.get("saldo"));

// Eliminar todos los elementos del Map
cliente.clear();

console.log(cliente);


const paciente = new Map([ ["nombre", "paciente"], ["cuarto", "no definido"] ]);

// Se puede agregar otros elementos después de haberse generado el Map
paciente.set("doctor", "Dr Asignado");

// Misma key sobre escribe el value
paciente.set("nombre", "Gustavo");

console.log(paciente);

// Los Maps son iterables
paciente.forEach( (datos, index) => {
	console.log(`${index}: ${datos}`);
});