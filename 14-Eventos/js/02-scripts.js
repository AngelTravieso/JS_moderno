const nav = document.querySelector(".navegacion");

// Registrar un evento
nav.addEventListener("mouseout", () => {
	console.log("Saliendo de la navegación");

	nav.style.backgroundColor = "transparent";
});

nav.addEventListener("dblclick", () => {
	console.log("Entrando de la navegación");

	nav.style.backgroundColor = "white";
});

// mousedown = similar al click
// click
// dblclick = doble click
// mouseup = cuando sueltas el mouse