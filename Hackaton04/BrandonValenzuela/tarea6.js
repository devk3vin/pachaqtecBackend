//Calcular la suma de los dígitos de un número.

let numero = 255

let sumaDigitos = numero.toString().split("").reduce((a,b) => { return a + parseInt(b)},0); 

console.log(sumaDigitos);
