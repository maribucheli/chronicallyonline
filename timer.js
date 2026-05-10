// timer.js - Sistema de timer para todas las páginas

// Configuración
const TIEMPO_INICIAL = 120; // 120 segundos
let tiempoRestante = TIEMPO_INICIAL;
let intervalo = null;
let timerActivo = true;

// Espera a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    crearTimerEnPantalla();
    iniciarTimer();
});

// Crea el contador visual en la esquina
function crearTimerEnPantalla() {
    const timerDiv = document.createElement('div');
    timerDiv.id = 'timer-container';
    timerDiv.innerHTML = `
        <div id="timer-box">
            <div id="timer-label">⏱️ Tiempo restante</div>
            <div id="timer-display">02:00</div>
        </div>
    `;
    document.body.appendChild(timerDiv);
    
    // Agregar estilos automáticamente
    agregarEstilosTimer();
}

// Agrega los estilos del timer
function agregarEstilosTimer() {
    const style = document.createElement('style');
    style.textContent = `
        #timer-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            font-family: 'Comic Sans MS', cursive, sans-serif;
        }
        
        #timer-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            border: 3px solid #ffd700;
            animation: pulse 2s infinite;
        }
        
        #timer-label {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5px;
            text-shadow: 1px 1px 0 rgba(0,0,0,0.3);
        }
        
        #timer-display {
            font-size: 36px;
            font-weight: bold;
            font-family: monospace;
            letter-spacing: 2px;
            text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        /* Cuando quedan menos de 10 segundos */
        #timer-box.urgente {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            animation: shake 0.5s infinite;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        /* Pantalla de fin del tiempo */
        #pantalla-fin-tiempo {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            animation: fadeIn 0.5s;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .contenedor-opciones {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px;
            border-radius: 30px;
            text-align: center;
            max-width: 500px;
            margin: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            border: 4px solid #ffd700;
        }
        
        .contenedor-opciones h2 {
            color: white;
            font-size: 32px;
            margin-bottom: 20px;
            text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
        }
        
        .contenedor-opciones p {
            color: #ffd700;
            font-size: 24px;
            margin-bottom: 30px;
            background: transparent;
        }
        
        .boton-opcion {
            background: white;
            border: none;
            padding: 15px 30px;
            margin: 10px;
            font-size: 18px;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            font-weight: bold;
            border-radius: 50px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .boton-opcion:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .boton-renovar {
            background: #4CAF50;
            color: white;
        }
        
        .boton-alquilar {
            background: #ff9800;
            color: white;
        }
    `;
    document.head.appendChild(style);
}

// Inicia el contador regresivo
function iniciarTimer() {
    actualizarDisplay();
    
    intervalo = setInterval(() => {
        if (!timerActivo) return;
        
        if (tiempoRestante <= 0) {
            // Se acabó el tiempo
            detenerTimer();
            mostrarPantallaFin();
        } else {
            tiempoRestante--;
            actualizarDisplay();
            
            // Si quedan menos de 10 segundos, añadir clase urgente
            const timerBox = document.querySelector('#timer-box');
            if (tiempoRestante <= 10 && timerBox && !timerBox.classList.contains('urgente')) {
                timerBox.classList.add('urgente');
            }
        }
    }, 1000);
}

// Actualiza el display del timer
function actualizarDisplay() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    
    const display = document.querySelector('#timer-display');
    if (display) {
        display.textContent = tiempoFormateado;
    }
}

// Detiene el timer
function detenerTimer() {
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    }
    timerActivo = false;
}

// Muestra la pantalla de selección al acabar el tiempo
function mostrarPantallaFin() {
    // Remover el timer de la pantalla
    const timerContainer = document.querySelector('#timer-container');
    if (timerContainer) timerContainer.remove();
    
    // Crear pantalla de opciones
    const pantalla = document.createElement('div');
    pantalla.id = 'pantalla-fin-tiempo';
    pantalla.innerHTML = `
        <div class="contenedor-opciones">
            <h2>¡SE ACABÓ EL TIEMPO! </h2>
            <p>¿Qué escoges?</p>
            <button class="boton-opcion boton-renovar" id="btn-renovar"> Alquilar de nuevo este compu</button>
            <button class="boton-opcion boton-alquilar" id="btn-alquilar">Alquilar otro</button>
        </div>
    `;
    document.body.appendChild(pantalla);
    
    // Configurar botones
    document.getElementById('btn-renovar').addEventListener('click', () => {
        window.location.href = 'index.html'; // Volver al inicio
    });
    
    document.getElementById('btn-alquilar').addEventListener('click', () => {
        window.location.href = 'index.html'; // También vuelve al inicio (puedes cambiarlo)
    });
}

// Función para pausar 
function pausarTimer() {
    timerActivo = false;
}

function reanudarTimer() {
    timerActivo = true;
}



document.getElementById('btn-renovar').addEventListener('click', () => {
       
        window.location.reload();
    });
    
    document.getElementById('btn-alquilar').addEventListener('click', () => {
        
        window.location.href = 'index.html';
    });
