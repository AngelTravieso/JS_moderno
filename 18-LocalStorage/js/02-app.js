// Obtener valor de localStorage
const nombre = localStorage.getItem("nombre");
console.log(nombre);

const productoJSON = localStorage.getItem("producto");
// JSON.parse() transforma un string en un arreglo o un objeto
console.log(JSON.parse( productoJSON) );

const meses = localStorage.getItem("meses");
mesesArray = JSON.parse( meses );
console.log(mesesArray);