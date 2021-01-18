// Class Declaration
class Cliente {
	constructor(nombre, saldo) {
		this.nombre = nombre;
		this.saldo = saldo;
	}

	mostrarInformacion() {
		return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
	}

	static bienvenida() {
		return `Bienvenido al cajero`;
	}
}


const angel = new Cliente("Angel", 400);
console.log(angel.mostrarInformacion());
console.log(angel);

console.log( Cliente.bienvenida() );


// Class Expresion
const Cliente2 = class {
	constructor(nombre, saldo) {
		this.nombre = nombre;
		this.saldo = saldo;
	}

	mostrarInformacion() {
		return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
	}
}


const angel2 = new Cliente2("Angel", 400);
console.log(angel2.mostrarInformacion());
console.log(angel2);