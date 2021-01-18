// Weakset

const weakset = new WeakSet();

const cliente = {
	nombre: "Angel",
	saldo: 100
}


weakset.add(cliente);

// console.log(weakset.has(cliente));

// weakset.delete(cliente);

console.log(weakset);