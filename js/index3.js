const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const limpiarCanvas = function() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
}
let distanciaLeft = 10;
let distanciaTop = 100;
let isGameOver = false;
const INCREMENT = 5;
const hayColision = function(x, y) {
    const choqueParedes = (x < 0) || (x + 100 > canvas.width) || (y < 0) || (y + 100 > canvas.height);
    return ((x + 100 > 150 && x < 250) && (y + 100 > 100 && y < 200)) || choqueParedes;
}

window.addEventListener("keyup", function(evt) {
    if(isGameOver) { return; }
    const valorTecla = evt.keyCode || evt.charCode;
    ctx.fillStyle = "#F00";
    limpiarCanvas();
    
    // arriba 38
    // abajo 40
    // izquierdo 37
    // derecho 39
    if(valorTecla === 39) { // derecho
        distanciaLeft += INCREMENT;
    } else if(valorTecla === 37) { // izquierdo
        distanciaLeft -= INCREMENT;
    } else if(valorTecla === 38) { // arriba
        distanciaTop -= INCREMENT;
    } else if(valorTecla === 40) { // abajo
        distanciaTop += INCREMENT;
    }
    ctx.fillRect(distanciaLeft, distanciaTop, 100, 100);

    if(hayColision(distanciaLeft, distanciaTop)) {
        isGameOver = true;
        const imagenGameOver = new Image();
        imagenGameOver.src = "../img/gameover.jpg";
        imagenGameOver.onload = function() {
            limpiarCanvas();
            ctx.drawImage(imagenGameOver, 0, 0, canvas.clientWidth, canvas.height);
        }
    }

    ctx.fillStyle = "#0F0";
    ctx.fillRect(150, 100, 100, 100);
});

const btnCrearColision = document.querySelector("#crearColision");
btnCrearColision.addEventListener("click", function() {
    ctx.fillStyle = "#F00";
    ctx.fillRect(10, 100, 100, 100);

    ctx.fillStyle = "#0F0";
    ctx.fillRect(150, 100, 100, 100);
});

const btnCrearAnimacion = document.querySelector("#crearAnimacion");
btnCrearAnimacion.addEventListener("click", () => {
    const imagenSol = new Image();
    imagenSol.src = "../img/sol.png";

    const imagenLuna = new Image();
    imagenLuna.src = "../img/luna.png";

    const imagenTierra = new Image();
    imagenTierra.src = "../img/tierra.png";

    window.requestAnimationFrame(dibujarSistemaSolar);

    function dibujarSistemaSolar() {
        ctx.globalCompositeOperation = "destination-over"; // dibujará detrás del contenido
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 0, 0, .4)";
        ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
        ctx.save();
        ctx.translate(150, 150);

        // Tierra
        const time = new Date();
        ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        ctx.translate(105, 0);
        ctx.fillRect(0, -12, 50, 24);
        ctx.drawImage(imagenTierra, -12, -12);

        // La luna
        ctx.save();
        ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
        ctx.translate(0, 28.5);
        ctx.drawImage(imagenLuna, -3.5, -3.5);
        ctx.restore(); // inicial
        ctx.restore(); // La luna

        // Sol
        ctx.beginPath();
        ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Órbita terreste del aro que siempre tiene el Sistema Solar
        ctx.stroke(); // traze o describa en el lienzo
        ctx.drawImage(imagenSol, 0, 0, canvas.width, canvas.height); // 100% del canvas
        
        window.requestAnimationFrame(dibujarSistemaSolar);
    }
});