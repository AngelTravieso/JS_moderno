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

// Herencia
class Empresa extends Cliente {
	constructor(nombre, saldo, telefono, categoria) {
		super(nombre, saldo);
		this.telefono = telefono;
		this.categoria = categoria;
	}

	// Reescribir un método
	static bienvenida() {
		return `Bienvenido al cajero de Empresas`;
	}
}


const angel = new Cliente("Angel", 400);
const empresa = new Empresa("Código con Angel", 500, 1234567, "Aprendizaje  en Línea");
console.log(empresa);
console.log( empresa.mostrarInformacion() );


console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());