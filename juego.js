// 0 Piedra
// 1 Papel
// 2 Tijeras


let eleccionCompu;
let victorias=0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

function hacerJugada(eleccion) {
    eleccionCompu = getRandomInt(0, 2);
    switch (eleccion) {
        case 0:
            switch (eleccionCompu) {
                case 0:
                    alert("Empate");
                break;
                case 1:
                    alert("¡Perdiste!");
                break;
                case 2: 
                    victorias+=1;
                    console.log(victorias);
                    alert("¡Ganaste!");
                    changenumber();
                break;
            }
        break;
        default:
        break;
        case 1:
            switch (eleccionCompu) {
                case 1:
                    alert("Empate");
                break;
                case 2:
                    alert("¡Perdiste!");
                break;
                case 0:
                    victorias+=1;
                    console.log(victorias);
                    alert("¡Ganaste!");
                    changenumber();
                break;
            }
        break;
        case 2:
            switch (eleccionCompu) {
                case 2:
                    alert("Empate");
                break;
                case 0:
                    alert("¡Perdiste!");
                break;
                case 1:
                    victorias+=1;
                    console.log(victorias);
                    alert("¡Ganaste!");
                    changenumber();
                break;
            }
        break;
    }
}

 
function changenumber() {
       let box=document.querySelector(".box")
        box.classList.toggle("special")
       console.log(box);
      document.getElementsByClassName('texto-victorias')[0].textContent = victorias;
      
}

function cambiarpantalla() {
    document.getElementById("pantalla-2").classList.toggle("active")
    document.getElementById("pantalla-1").classList.toggle("active")
}
