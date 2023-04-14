/*let cronometro = document.getElementById(`cronometro`);
let play = document.getElementById(`play`);
let pause = document.getElementById(`pause`);
let reset = document.getElementById(`reset`);


play.addEventListener("click", iniciar);
pause.addEventListener("click", pausar);
reset.addEventListener("click", resetear);

function iniciar() {
    let milisegundos = 0, segundos = 0, minutos = 00;
    intervalId=window.setInterval(function () {
        if(segundos== 0 && minutos == 0 && milisegundos==0){
        segundos='0'+segundos;
        minutos='0'+minutos;
        milisegundos='0'+milisegundos;
        }
        milisegundos++;
        if (milisegundos < 10) {
            milisegundos = '0' + milisegundos;
        }
        if (milisegundos > 60) {
            milisegundos = 0;
            segundos++;
            if (segundos < 10) {
                segundos = '0' + segundos;
            }
            if (segundos > 60) {
                segundos = 0;
                minutos++;
                if(minutos<10){
                    minutos='0'+minutos;
                }
            }
        }
        cronometro.innerHTML = `${minutos}:${segundos}:${milisegundos}`;
    }, 10);
}
function pausar(){
window.clearInterval(intervalId);
}
function resetear() {
cronometro.innerHTML=`00:00:00`;
}*/
let cronometro = document.getElementById(`cronometro`);
let play = document.getElementById(`play`);
let pause = document.getElementById(`pause`);
let reset = document.getElementById(`reset`);
let intervalId;

play.addEventListener("click", iniciar);
pause.addEventListener("click", pausar);
reset.addEventListener("click", resetear);

let milisegundos = 0, segundos = 0, minutos = 0;

function iniciar() {
  intervalId = window.setInterval(function () {
    milisegundos++;
    if (milisegundos == 100) {
      milisegundos = 0;
      segundos++;
      if (segundos == 60) {
        segundos = 0;
        minutos++;
      }
    }

    let mostrarMilisegundos = milisegundos;
    let mostrarSegundos = segundos;
    let mostrarMinutos = minutos;

    if (milisegundos < 10) {
      mostrarMilisegundos = `0${milisegundos}`;
    }

    if (segundos < 10) {
      mostrarSegundos = `0${segundos}`;
    }

    if (minutos < 10) {
      mostrarMinutos = `0${minutos}`;
    }

    cronometro.innerHTML = `${mostrarMinutos}:${mostrarSegundos}:${mostrarMilisegundos}`;
  }, 10);
}

function pausar() {
  window.clearInterval(intervalId);
}

function resetear() {
  window.clearInterval(intervalId);
  milisegundos = 0;
  segundos = 0;
  minutos = 0;
  cronometro.innerHTML = "00:00:00";
}
