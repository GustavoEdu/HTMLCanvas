document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    function clearBoard() { ctx.clearRect(0, 0, canvas.width, canvas.height); }

    const btnCrearGrillas = document.querySelector("#crearGrillas");
    btnCrearGrillas.addEventListener("click", () => {
        clearBoard();
        const distanciaX = 20;
        const distanciaY = 20;
        const colorLinea = "red";
        const anchoLinea = .5;

        for(let i = distanciaX + anchoLinea; i < ctx.canvas.width; i += distanciaX) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, ctx.canvas.height);
            ctx.strokeStyle = colorLinea;
            ctx.lineWidth = anchoLinea;
            ctx.stroke();
            ctx.closePath();
        }
        for(let i = distanciaY + anchoLinea; i < ctx.canvas.height; i += distanciaY) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(ctx.canvas.height, i); // 0: :o
            ctx.strokeStyle = colorLinea;
            ctx.lineWidth = anchoLinea;
            ctx.stroke();
            ctx.closePath();
        }
    });

    const btnCrearEventos = document.querySelector("#crearEventos");
    btnCrearEventos.addEventListener("click", () => {
        clearBoard();
        // Adicionando el mouse move
        canvas.addEventListener("mousemove", evt => {
            // const posicionReal = canvas.getBoundingClientRect();
            // console.log(posicionReal);
            // console.log(evt.clientX, evt.clientY);
        });
        // Adicionando el mousedown
        canvas.addEventListener("mousedown", evt => {
            const posicionReal = canvas.getBoundingClientRect();
            const x = evt.clientX - posicionReal.left;
            const y = evt.clientY - posicionReal.top;
            console.log(x, y);
            // console.log(evt.clientX, evt.clientY);
        });
        // Adicionando el mouseup
        canvas.addEventListener("mouseup", evt => {
            // console.log(evt.clientX, evt.clientY);
        });
    });

    const btnDibujar = document.querySelector("#dibujar");
    let posicionInicial = {}; // mousedown
    let posicionFinal = {}; // mouseup
    let isDrawing = false;
    btnDibujar.addEventListener("click", () => {
        clearBoard();
        canvas.addEventListener("mousemove", evt => {
            if(!isDrawing) { return; }
            const posicionReal = canvas.getBoundingClientRect();
            const x = evt.clientX - posicionReal.left;
            const y = evt.clientY - posicionReal.top;
            posicionFinal = { x, y };

            ctx.beginPath();
            ctx.moveTo(posicionInicial.x, posicionInicial.y);
            ctx.lineTo(posicionFinal.x, posicionFinal.y);
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#F0F";
            ctx.stroke();
            ctx.closePath();

            posicionInicial.x = posicionFinal.x;
            posicionInicial.y = posicionFinal.y;
        });
        canvas.addEventListener("mousedown", evt => {
            isDrawing = true;
            const posicionReal = canvas.getBoundingClientRect();
            const x = evt.clientX - posicionReal.left;
            const y = evt.clientY - posicionReal.top;
            posicionInicial = { x, y };
            /* const posicionReal = canvas.getBoundingClientRect();
            const x = evt.clientX - posicionReal.left;
            const y = evt.clientY - posicionReal.top;
            posicionInicial = {
                x,
                y
            } */
        });
        canvas.addEventListener("mouseup", evt => {
            isDrawing = false;
            /* const posicionReal = canvas.getBoundingClientRect();
            const x = evt.clientX - posicionReal.left;
            const y = evt.clientY - posicionReal.top;
            posicionFinal = {
                x,
                y
            }
            ctx.beginPath();
            ctx.moveTo(posicionInicial.x, posicionInicial.y);
            ctx.lineTo(posicionFinal.x, posicionFinal.y);
            ctx.stroke();
            ctx.closePath(); */
        });
    });
});
