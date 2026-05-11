// Verificar si ya completó el formulario antes (persistente)
const formularioCompletado = localStorage.getItem('formularioCompletado');

// Solo ejecutar si: 1) la variable lo permite Y 2) no se ha completado antes
if (typeof EJECUTAR_FORMULARIO !== 'undefined' && EJECUTAR_FORMULARIO === true && !formularioCompletado) {
  
  let nombre = prompt("¿Cómo te llamas?");
  
  // Si el usuario NO cancela el prompt
  if (nombre !== null && nombre !== "") {
    saludo.innerText = "Hola, " + nombre;
    
    let anioNacimiento = Number(prompt("¿En qué año naciste?"));
    
    // Validar que el año sea válido
    if (!isNaN(anioNacimiento) && anioNacimiento > 1900 && anioNacimiento <= new Date().getFullYear()) {
      let anioActual = new Date().getFullYear();
      let edad = anioActual - anioNacimiento;
      
      if (edad < 16) {
        bullying.innerText = "¿Qué haces acá? Hazte un milito y vete a la cama.";
      } else if (edad < 32) {
        bullying.innerText = "Bueno, entonces recordarás un lugar como este.";
      } else {
        bullying.innerText = "¡Tú existías antes que el Internet mismo!";
      }
      
      // Guardar en localStorage para que NO se repita NUNCA MÁS
      localStorage.setItem('formularioCompletado', 'true');
      
    } else {
      bullying.innerText = "Por favor, ingresa un año de nacimiento válido.";
    }
  }
}




