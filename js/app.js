let cronometro = document.getElementById(`cronometro`);
let play = document.getElementById(`play`);
let pause = document.getElementById(`pause`);
let reset = document.getElementById(`reset`);
let tiempo;

play.addEventListener("click", iniciar);
pause.addEventListener("click", pausar);
reset.addEventListener("click", resetear);

let milisegundos = 0, segundos = 0, minutos = 0;

function iniciar() {
  play.disabled=true;
  tiempo = window.setInterval(function () {
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
  window.clearInterval(tiempo);
  play.disabled=false;

}

function resetear() {
  window.clearInterval(tiempo);
  milisegundos = 0;
  segundos = 0;
  minutos = 0;
  cronometro.innerHTML = "00:00:00";
}
