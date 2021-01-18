// Class Declaration
class Cliente {

	// Convierte la propiedad en privada, solo se puede acceder desde la clase
	#nombre;

	setNombre(nombre) {
		this.#nombre = nombre;
	}

	getNombre() {
		return this.#nombre;
	}

	// constructor(nombre, saldo) {
	// 	this.#nombre = nombre;
	// 	this.saldo = saldo;
	// }

	// mostrarInformacion() {
	// 	return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
	// }

	// static bienvenida() {
	// 	return `Bienvenido al cajero`;
	// }
}


const angel = new Cliente();
angel.setNombre("Angel");
console.log(angel.getNombre());

// console.log(angel.mostrarInformacion());
// console.log(angel.#nombre);