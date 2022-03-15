window.addEventListener("load", () => {
    // Capturando canvas
    const canvas = document.querySelector("#canvas");
    // Capturas o definir el Contexto 2D o 3D
    const ctx = canvas.getContext("2d");

    const btnCrearLineas = document.querySelector("#crearLineas");
    btnCrearLineas.addEventListener("click", () => {
        ctx.clearRect(0, 0, 200, 200); // Limpiar el Canvas
        ctx.beginPath(); // Vamos a iniciar una gráfica
        ctx.moveTo(10, 10);
        ctx.lineTo(180, 20);
        ctx.lineTo(20, 20);
        ctx.lineWidth = 5; // 1px, .5, 0.5
        ctx.strokeStyle = "#00F";
        ctx.stroke();
        ctx.closePath();
    });

    const btnCrearArcos = document.querySelector("#crearArcos");
    btnCrearArcos.addEventListener("click", () => {
        ctx.clearRect(0, 0, 200, 200);
        ctx.beginPath();
        // ctx.arc(x, y, rt, sa: start angle, ea: end angle, r: orientación);
        // radianes o los ángulos con Math.PI = 3.1415...
        // Ángulos Math.PI === 360
        // Radianes (Math.PI / 180) * Ángulo en Sexagesimales
        // ctx.arc(100, 100, 50, 0, (Math.PI / 180) * 360, true);
        // ctx.lineWidth = 5;
        // ctx.strokeStyle = "aqua";
        // ctx.stroke();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo Externo
        ctx.moveTo(110, 75); // Es necesario para simular salto a otro punto, si no será una sola línea
        ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (contra reloj)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#333";
        ctx.stroke();
        ctx.closePath();
    });

    const btnCrearCurvasCuadraticas = document.querySelector("#crearCurvasCuadraticas");
    btnCrearCurvasCuadraticas.addEventListener("click", () => {
        ctx.clearRect(0, 0, 200, 200);
        ctx.beginPath();
        ctx.moveTo(100, 100);
        // ctx.quadraticCurveTo(x, y, xf, yf); (x, y): Simulación del Punto Imaginario / (xf, yf): Punto Final
        ctx.quadraticCurveTo(180, 20, 200, 200);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "steelblue";
        ctx.stroke();
        ctx.closePath();
    });

    const btnCrearCurvasBezier = document.querySelector("#crearCurvasBezier");
    btnCrearCurvasBezier.addEventListener("click", () => {
        ctx.clearRect(0, 0, 200, 200);
        ctx.beginPath();
        // ctx.moveTo(10, 180);
        // ctx.bezierCurveTo(x, y, x, y, xf, yf);
        // ctx.bezierCurveTo(40, 10, 160, 190, 190, 20);
        ctx.moveTo(100, 100);
        ctx.bezierCurveTo(150, 200, 250, 0, 300, 120);
        ctx.moveTo(100, 200);
        ctx.bezierCurveTo(150, 300, 250, 100, 300, 220);
        ctx.moveTo(100, 200);
        ctx.lineTo(100, 100);
        ctx.moveTo(300, 220);
        ctx.lineTo(300, 120);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#F00";
        ctx.stroke();
        ctx.closePath();
    });
});
