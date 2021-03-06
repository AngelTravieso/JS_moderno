// Campos del Formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

// UI
const formulario = document.querySelector("#nueva-cita");
const contenedorCitas = document.querySelector("#citas");

let editando;

// Clases
class Citas {
	constructor() {
		this.citas = [];
	}

	agregarCita(cita) {
		this.citas = [...this.citas, cita];

		// console.log(this.citas);
	}

	eliminarCita(id) {
		this.citas = this.citas.filter( cita => cita.id !== id );
	}

	editarCita(citaActualizada) {
		this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );
	}
}


class UI {
	imprimirAlerta(mensaje, tipo) {
		// Crear el div
		const divMensaje = document.createElement("div");
		divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

		// Agregar clase en base al tipo de error
		if(tipo === "error") {
			divMensaje.classList.add("alert-danger");
		} else {
			divMensaje.classList.add("alert-success");
		}

		// Mensaje de Error
		divMensaje.textContent = mensaje;

		// Agregar al DOM
		document.querySelector("#contenido").insertBefore(divMensaje, document.querySelector(".agregar-cita"));

		// Quitar la alerta después de 5 segundos
		setTimeout(() => {
			divMensaje.remove();
		}, 5000 );
	}

	// Destructuring al objeto de citas desde los paréntesis donde se pasan los parámetros
	imprimirCitas({citas}) {

		this.limpiarHTML();

		citas.forEach( cita => {
			const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

			const divCita = document.createElement("div");
			divCita.classList.add("cita", "p-3");
			divCita.dataset.id = id;

			// Scripting de los elementos de la cita
			const mascotaParrafo = document.createElement("h2");
			mascotaParrafo.classList.add("card-title", "font-weight-bolder");
			mascotaParrafo.textContent = mascota;

			const propietarioParrafo = document.createElement("p");
			propietarioParrafo.innerHTML = `
				<span class="font-weight-bolder">Propietario: </span> ${propietario}
			`;

			const telefonoParrafo = document.createElement("p");
			telefonoParrafo.innerHTML = `
				<span class="font-weight-bolder">Teléfono: </span> ${telefono}
			`;

			const fechaParrafo = document.createElement("p");
			fechaParrafo.innerHTML = `
				<span class="font-weight-bolder">Fecha: </span> ${fecha}
			`;

			const horaParrafo = document.createElement("p");
			horaParrafo.innerHTML = `
				<span class="font-weight-bolder">Hora: </span> ${hora}
			`;

			const sintomasParrafo = document.createElement("p");
			sintomasParrafo.innerHTML = `
				<span class="font-weight-bolder">Teléfono: </span> ${sintomas}
			`;

			// Botón para eliminar esta cita
			const btnEliminar = document.createElement("button");
			btnEliminar.classList.add("btn", "btn-danger", "mr-2");
			btnEliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>';

			// Funcionalidad botón eliminar cita
			btnEliminar.onclick = () => eliminarCita(id);

			// Añade un botón para editar 
			const btnEditar = document.createElement("button");
			btnEditar.classList.add("btn", "btn-info");
			btnEditar.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> </svg>';

			// Funcionalidad botón editar cita
			btnEditar.onclick = () => cargarEdicion(cita);


			// Agregar los parrafos al divCita
			divCita.appendChild(mascotaParrafo);
			divCita.appendChild(propietarioParrafo);
			divCita.appendChild(telefonoParrafo);
			divCita.appendChild(fechaParrafo);
			divCita.appendChild(horaParrafo);
			divCita.appendChild(sintomasParrafo);
			divCita.appendChild(btnEliminar);
			divCita.appendChild(btnEditar);

			// Agregar las citas al HTML
			contenedorCitas.appendChild(divCita);
		});
	}

	limpiarHTML() {
		while(contenedorCitas.firstChild) {
			contenedorCitas.removeChild( contenedorCitas.firstChild );
		}
	}
}


const ui = new UI();
const administrarCitas = new Citas();


// Registrar Eventos
eventListeners();

// Event Listeners
function eventListeners() {
	mascotaInput.addEventListener("change", datosCita);
	propietarioInput.addEventListener("change", datosCita);
	telefonoInput.addEventListener("change", datosCita);
	fechaInput.addEventListener("change", datosCita);
	horaInput.addEventListener("change", datosCita);
	sintomasInput.addEventListener("change", datosCita);

	formulario.addEventListener("submit", nuevaCita);
}



// Objeto con la información de la cita
// Para llenar el objeto se debe definir un name con el mismo nombre de las propiedades del objeto
// input type="text" name="mascota"
const citaObj = {
	mascota: "",
	propietario: "",
	telefono: "",
	fecha: "",
	hora: "",
	sintomas: ""
}	


// Funciones

// Agrega datos al objeto de cita
function datosCita(e) {
	citaObj[e.target.name] = e.target.value;
}


// Valida y agrega una nueva cita a la clase de Citas
function nuevaCita(e) {
	e.preventDefault();

	// Extraer la información del objeto de Citas
	const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

	// Validar
	if(mascota === "" || propietario === "" || telefono === "" || fecha === "" || hora === "" || sintomas === "") {
		ui.imprimirAlerta("Todos los campos son obligatorios", "error");

		return;
	}

	if(editando) {
		ui.imprimirAlerta("Editado Correctamente");

		// Pasar el objeto de la cita a edición
		administrarCitas.editarCita({...citaObj});

		// Regresar el texto del botón a su estado original
		formulario.querySelector("button[type='submit']").textContent = "Crear Cita";

		// Quitar modo edición
		edicion = false;

	} else {
		// Generar un ID único
		citaObj.id = Date.now();

		// Creando una nueva cita - Se pasa una copia del objeto citaObj {...citaObj}
		administrarCitas.agregarCita({...citaObj});

		// Mensaje de agregado correctamente
		ui.imprimirAlerta("Se agregó Correctamente");
	}

	// Reiniciar el objeto para la validación
	reiniciarObjeto();

	// Reiniciar el formulario
	formulario.reset();

	// Mostrar el HTML de las citas
	ui.imprimirCitas(administrarCitas);
}


function reiniciarObjeto() {
	citaObj.mascota = "";
	citaObj.propietario = "";
	citaObj.telefono = "";
	citaObj.fecha = "";
	citaObj.hora = "";
	citaObj.sintomas = "";
}


function eliminarCita(id) {
	// Eliminar la cita
	administrarCitas.eliminarCita(id);

	// Muestra un mensaje
	ui.imprimirAlerta("La cita se eliminó correctamente");

	// Actualizar las citas
	ui.imprimirCitas(administrarCitas);
}


// Carga los datos y el modo edición
function cargarEdicion(cita) {
	const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

	// Llenar los inputs
	mascotaInput.value = mascota;
	propietarioInput.value = propietario;
	telefonoInput.value = telefono;
	fechaInput.value = fecha;
	horaInput.value = hora;
	sintomasInput.value = sintomas;

	// Llenar el objeto de citas
	citaObj.mascota = mascota;
	citaObj.propietario = propietario;
	citaObj.telefono = telefono;
	citaObj.fecha = fecha;
	citaObj.hora = hora;
	citaObj.sintomas = sintomas;
	citaObj.id = id;

	// Cambiar el texto del botón
	formulario.querySelector("button[type='submit']").textContent = "Guardar Cambios";

	editando = true; 
}