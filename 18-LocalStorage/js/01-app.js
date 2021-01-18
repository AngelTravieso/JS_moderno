localStorage.setItem("nombre", 1);

const producto = {
	nombre: "Monitor 24 Pulgadas",
	precio: 300
}

// Transformar un objeto en un string
const productoString = JSON.stringify( producto );
localStorage.setItem("producto", productoString);

// Transformar un arreglo en un string
const meses = ["Enero", "Febrero", "Marzo"];
const mesesString = JSON.stringify( meses );
localStorage.setItem("meses", mesesString);