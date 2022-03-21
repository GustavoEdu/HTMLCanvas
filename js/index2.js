document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    const btnCrearGrillas = document.querySelector("#crearGrillas");
    btnCrearGrillas.addEventListener("click", () => {
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
        canvas.addEventListener("mousemove", evt => {
            if(!isDrawing) { return; }
            const posicionReal = canvas.getBoundingClientRect();
            const x = evt.clientX - posicionReal.left;
            const y = evt.clientY - posicionReal.top;
            posicionInicial = {
                x: x - 2,
                y: y - 2
            }
            posicionFinal = {
                x,
                y
            }
            ctx.beginPath();
            ctx.moveTo(posicionInicial.x, posicionInicial.y);
            ctx.lineTo(posicionFinal.x, posicionFinal.y);
            ctx.stroke();
            ctx.closePath();
        });
        canvas.addEventListener("mousedown", evt => {
            /* const posicionReal = canvas.getBoundingClientRect();
            const x = evt.clientX - posicionReal.left;
            const y = evt.clientY - posicionReal.top;
            posicionInicial = {
                x,
                y
            } */
            isDrawing = true;
        });
        canvas.addEventListener("mouseup", evt => {
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
            isDrawing = false;
        });
    });
});
