const encabezado = document.querySelector(".contenido-hero h1").textContent;
console.log(encabezado);

// Si en el CSS visibility = hidden; no lo va a encontrar
// console.log(encabezado.innerText);

// Si lo va a encontrar
// console.log(encabezado.textContent);

// Se trae el HTML
// console.log(encabezado.innerHTML);

// const nuevoHeading = "Nuevo Heading";
// document.querySelector(".contenido-hero h1").textContent = nuevoHeading;

const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg";