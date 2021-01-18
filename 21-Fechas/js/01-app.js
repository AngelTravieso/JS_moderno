const diaHoy = new Date();

let valor;

valor = diaHoy;


// Devuelve el año actual
valor = diaHoy.getFullYear();

// Devuelve el mes 0 = Enero
valor = diaHoy.getMonth();

// Devuelve los minutos del día
valor = diaHoy.getMinutes();

// Devuelve horas
valor = diaHoy.getHours();

// Devuelve el tiempo en Milisegundos desde 1970
valor = diaHoy.getTime();

// Modifica el objeto date con una nueva fecha
valor = diaHoy.setFullYear(2010);


console.log(valor);