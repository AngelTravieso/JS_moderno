const navegacion = document.querySelector(".navegacion");

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// Los espacios en blanco son considerados elementos
// console.log(navegacion.childNodes);

// console.log(navegacion.children);

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector(".card");

// card.children[1].children[1].textContent = "Nuevo heading desde traversing the DOM";

// // console.log(card.children[1].children[1].textContent);

// card.children[0].src = "img/hacer3.jpg";
// console.log(card.children[0]);


// Traversing the Hijo al Padre

// Toma en cuenta los espacios en blanco
// console.log(card.parentNode); 

// console.log(card.parentElement.parentElement.parentElement); 


// console.log(card);

// Busca el siguiente elemento hermano
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector(".card:nth-child(4)");
// console.log(ultimoCard.previousElementSibling);

