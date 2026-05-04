///datos usuario///
let nombre = prompt("¿Cómo te llamas?");

saludo.innerText = "Hola, " + nombre; 

let anioNacimiento = Number(prompt("¿En qué año naciste?"));

// Paso 2: calcular la edad actual
let anioActual = new Date().getFullYear();
let edad = anioActual - Number(anioNacimiento);

// Paso 3: responder según rango
if (edad < 16) {
  bullying.innerText = "¿Qué haces acá? Hazte un milito y vete a la cama.";
} else if (edad < 32) {
  bullying.innerText = "Bueno, entonces recordarás un lugar como este.";
} else {
  bullying.innerText = "¡Tú existías antes que el Internet mismo!";
}