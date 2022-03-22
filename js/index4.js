const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const btnCapturarFoto = document.querySelector("#capturarFoto");
const video = document.querySelector("#video");
init();
btnCapturarFoto.addEventListener("click", () => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
});

// PHP - El Lenguaje es el encargado de esperar la petición
// connectDB(); // 10s
// SELECT // 5s

// Promesas en JavaScript
// async
// var respuesta1 = await primeraPromesa();
// var respuesta2 = await promesaDos();
// var respuesta3 = await promesaTres();

async function init() {
    try {
        const constraints = {
            audio: false,
            video: {
                width: 400, 
                height: 300
            }
        }
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        mostrarEnElVideo(stream);
    } catch(error) {
        console.error(error.message);
    }
}

function mostrarEnElVideo(stream) {
    window.stream = stream;
    video.srcObject = stream;
}
/* const btnDetectarWebGL = document.querySelector("#detectarWebGL");
btnDetectarWebGL.addEventListener("click", () => {
    const ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    console.log(ctx);
}); */