// const cliente = "Angel";

// function mostrarCliente() {
// 	const cliente = "Pablo";

// 	console.log(cliente);
// }

// console.log(cliente);

// mostrarCliente();

const obtenerCliente = () => {
	const nombre = "Angel";

	function muestraNombre() {
		console.log(nombre);
	}

	return muestraNombre;
}

const cliente = obtenerCliente();

cliente();
