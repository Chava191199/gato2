function marcar(index) {
  if (tablero[index] === '' && jugando) {
    tablero[index] = turno;
    const celda = document.querySelectorAll('.celda')[index];
    celda.textContent = turno;
    celda.classList.add(turno);  // Añade la clase 'X' o 'O' para cambiar el color

    if (verificarGanador()) {
      finalizarJuego(`${turno} ha ganado!`);
    } else if (tablero.every(celda => celda !== '')) {
      finalizarJuego('Empate!');
    } else {
      cambiarTurno();
    }
  }
}

function reiniciarJuego() {
  tablero.fill('');
  document.querySelectorAll('.celda').forEach(celda => {
    celda.textContent = '';
    celda.classList.remove('X', 'O');  // Elimina las clases para reiniciar colores
  });
  turno = 'X';
  jugando = true;
  document.getElementById('turnoActual').textContent = `Turno de: ${jugadores.jugador1} (X)`;
}
