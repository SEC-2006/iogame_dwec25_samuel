//import { usuarioTienePartida, crearPartida, cargarPartida, guardarPartida } from "../services/supaservice";

export {renderContent, moverArriba, moverAbajo, moverIzquierda, moverDerecha, clickDiv}

let tableroA = Array(16).fill("");
let tableroB = Array(16).fill("");
let turno = 0;
//let idPartida = -1;

async function renderContent() {
  /*const PartidaGuardadaBool = await usuarioTienePartida();

  if(PartidaGuardadaBool === null) {
    alert("No puedes jugar sin haber iniciado sesión");
    window.location.hash = "#login";
    return;
  } else if(PartidaGuardadaBool == true) {
    console.log("Cargando partida guardada...");
    const partida = await cargarPartida(localStorage.getItem("email"));
    tableroA = partida.tableroA;
    tableroB = partida.tableroB;
    turno = partida.turno;
    idPartida = partida.id;
  } else {
    console.log("Iniciando nueva partida...");
    idPartida = await crearPartida();
    tableroA = Array(16).fill("");
    tableroB = Array(16).fill("");
    turno = 0;
  }*/


  const contHtml = `
  <div class="container board-wrapper">
    <div class="board">
    ${
      tableroA.map((f) => `<div class="cell">${f}</div>`).join('')
    }
    </div>
    <div class="board">
    ${
      tableroB.map((f) => `<div class="cell">${f}</div>`).join('')
    }
    </div>
  </div>
  `;

  const divCont = document.createElement('div');
  divCont.innerHTML = contHtml;

  const tableros = divCont.querySelectorAll('.board');
  tableros.forEach((tablero, nTablero) => {
    tablero.querySelectorAll('.cell').forEach((cell, index) => {
      cell.addEventListener("click", async (event) => {
        event.preventDefault();
        if (nTablero === 0) await clickDiv(index, "A");
        else await clickDiv(index, "B");
      });
    });
  });

  return divCont;
}

if (typeof window !== 'undefined' && !window.tableroA_listener) {
  window.tableroA_listener = true;
  window.addEventListener('keydown', async (e) => {
    if (e.key === 'w' && turno === 1) {
      moverArriba(tableroA);
      turno++;
      //await guardarPartida(idPartida, tableroA, tableroB, turno);
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.replaceChildren(await renderContent());
    }
    if (e.key === 'a' && turno === 1) {
      moverIzquierda(tableroA);
      turno++;
      //await guardarPartida(idPartida, tableroA, tableroB, turno);
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.replaceChildren(await renderContent());
    }
    if (e.key === 's' && turno === 1) {
      moverAbajo(tableroA);
      turno++;
      //await guardarPartida(idPartida, tableroA, tableroB, turno);
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.replaceChildren(await renderContent());
    }
    if (e.key === 'd' && turno === 1) {
      moverDerecha(tableroA);
      turno++;
      //await guardarPartida(idPartida, tableroA, tableroB, turno);
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.replaceChildren(await renderContent());
    }
  });
}

if (typeof window !== 'undefined' && !window.tableroB_listener) {
  window.tableroB_listener = true;
  window.addEventListener('keydown', async (e) => {
    if (e.key === 'w' && turno === 3) {
      moverArriba(tableroB);
      turno = 0;
      //await guardarPartida(idPartida, tableroA, tableroB, turno);
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.replaceChildren(await renderContent());
    }
    if (e.key === 'a' && turno === 3) {
      moverIzquierda(tableroB);
      turno = 0;
      //await guardarPartida(idPartida, tableroA, tableroB, turno);
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.replaceChildren(await renderContent());
    }
    if (e.key === 's' && turno === 3) {
      moverAbajo(tableroB);
      turno = 0;
      //await guardarPartida(idPartida, tableroA, tableroB, turno);
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.replaceChildren(await renderContent());
    }
    if (e.key === 'd' && turno === 3) {
      moverDerecha(tableroB);
      turno = 0;
      //await guardarPartida(idPartida, tableroA, tableroB, turno);
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.replaceChildren(await renderContent());
    }
  });
}

function moverArriba(tablero) {
  for (let i=4; i<8; i++) {
    if  (tablero[i] !== "") {
      if (tablero[i-4] === "")
      {
        tablero[i-4] = tablero[i];
        tablero[i] = "";
      }
      else if (tablero[i-4] === tablero[i])
      {
        tablero[i-4] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
  for (let i=8; i<12; i++) {
    if  (tablero[i] !== "") {
      if (tablero[i-4] === "")
      {
        if (tablero[i-8] === "") {
          tablero[i-8] = tablero[i];
          tablero[i] = "";
        }
        else if (tablero[i-8] === tablero[i])
        {
          tablero[i-8] = tablero[i]*2;
          tablero[i] = "";
        }
        else
        {
          tablero[i-4] = tablero[i];
          tablero[i] = "";
        }
      }
      else if (tablero[i-4] === tablero[i])
      {
        tablero[i-4] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
  for (let i=12; i<16; i++) {
    if  (tablero[i] !== "") {
      if (tablero[i-4] === "")
      {
        if (tablero[i-8] === "") {
          if (tablero[i-12] === "") {
            tablero[i-12] = tablero[i];
            tablero[i] = "";
          }
          else if (tablero[i-12] === tablero[i])
          {
            tablero[i-12] = tablero[i]*2;
            tablero[i] = "";
          }
          else
          {
            tablero[i-8] = tablero[i];
            tablero[i] = "";
          }
        }
        else if (tablero[i-8] === tablero[i])
        {
          tablero[i-8] = tablero[i]*2;
          tablero[i] = "";
        }
        else
        {
          tablero[i-4] = tablero[i];
          tablero[i] = "";
        }
      }
      else if (tablero[i-4] === tablero[i])
      {
        tablero[i-4] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
}

function moverAbajo(tablero) {
  for (let i=11; i>7; i--) {
    if  (tablero[i] !== "") {
      if (tablero[i+4] === "")
      {
        tablero[i+4] = tablero[i];
        tablero[i] = "";
      }
      else if (tablero[i+4] === tablero[i])
      {
        tablero[i+4] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
  for (let i=7; i>3; i--) {
    if  (tablero[i] !== "") {
      if (tablero[i+4] === "")
      {
        if (tablero[i+8] === "") {
          tablero[i+8] = tablero[i];
          tablero[i] = "";
        }
        else if (tablero[i+8] === tablero[i])
        {
          tablero[i+8] = tablero[i]*2;
          tablero[i] = "";
        }
        else
        {
          tablero[i+4] = tablero[i];
          tablero[i] = "";
        }
      }
      else if (tablero[i+4] === tablero[i])
      {
        tablero[i+4] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
  for (let i=3; i>=0; i--) {
    if  (tablero[i] !== "") {
      if (tablero[i+4] === "")
      {
        if (tablero[i+8] === "") {
          if (tablero[i+12] === "") {
          tablero[i+12] = tablero[i];
          tablero[i] = "";
          }
          else if (tablero[i+12] === tablero[i])
          {
            tablero[i+12] = tablero[i]*2;
            tablero[i] = "";
          }
          else
          {
            tablero[i+8] = tablero[i];
            tablero[i] = "";
          }
        }
        else if (tablero[i+8] === tablero[i])
        {
          tablero[i+8] = tablero[i]*2;
          tablero[i] = "";
        }
        else
        {
          tablero[i+4] = tablero[i];
          tablero[i] = "";
        }
      }
      else if (tablero[i+4] === tablero[i])
      {
        tablero[i+4] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
}

function moverIzquierda(tablero) {
  for (let i=1; i<16; i=i+4) {
    if  (tablero[i] !== "") {
      if (tablero[i-1] === "")
      {
        tablero[i-1] = tablero[i];
        tablero[i] = "";
      }
      else if (tablero[i-1] === tablero[i])
      {
        tablero[i-1] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
  for (let i=2; i<16; i=i+4) {
    if  (tablero[i] !== "") {
      if (tablero[i-1] === "")
      {
        if (tablero[i-2] === "") {
          tablero[i-2] = tablero[i];
          tablero[i] = "";
        }
        else if (tablero[i-2] === tablero[i])
        {
          tablero[i-2] = tablero[i]*2;
          tablero[i] = "";
        }
        else
        {
          tablero[i-1] = tablero[i];
          tablero[i] = "";
        }
      }
      else if (tablero[i-1] === tablero[i])
      {
        tablero[i-1] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
  for (let i=3; i<16; i=i+4) {
    if  (tablero[i] !== "") {
      if (tablero[i-1] === "")
      {
        if (tablero[i-2] === "") {
          if (tablero[i-3] === "") {
            tablero[i-3] = tablero[i];
            tablero[i] = "";
          }
          else if (tablero[i-3] === tablero[i])
          {
            tablero[i-3] = tablero[i]*2;
            tablero[i] = "";
          }
          else
          {
            tablero[i-2] = tablero[i];
            tablero[i] = "";
          }
        }
        else if (tablero[i-2] === tablero[i])
        {
          tablero[i-2] = tablero[i]*2;
          tablero[i] = "";
        }
        else
        {
          tablero[i-1] = tablero[i];
          tablero[i] = "";
        }
      }
      else if (tablero[i-1] === tablero[i])
      {
        tablero[i-1] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
}

function moverDerecha(tablero) {
  for (let i=14; i>=0; i=i-4) {
    if  (tablero[i] !== "") {
      if (tablero[i+1] === "")
      {
        tablero[i+1] = tablero[i];
        tablero[i] = "";
      }
      else if (tablero[i+1] === tablero[i])
      {
        tablero[i+1] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
  for (let i=13; i>=0; i=i-4) {
    if  (tablero[i] !== "") {
      if (tablero[i+1] === "")
      {
        if (tablero[i+2] === "") {
          tablero[i+2] = tablero[i];
          tablero[i] = "";
        }
        else if (tablero[i+2] === tablero[i])
        {
          tablero[i+2] = tablero[i]*2;
          tablero[i] = "";
        }
        else
        {
          tablero[i+1] = tablero[i];
          tablero[i] = "";
        }
      }
      else if (tablero[i+1] === tablero[i])
      {
        tablero[i+1] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
  for (let i=12; i>=0; i=i-4) {
    if  (tablero[i] !== "") {
      if (tablero[i+1] === "")
      {
        if (tablero[i+2] === "") {
          if (tablero[i+3] === "") {
            tablero[i+3] = tablero[i];
            tablero[i] = "";
          }
          else if (tablero[i+3] === tablero[i])
          {
            tablero[i+3] = tablero[i]*2;
            tablero[i] = "";
          }
          else
          {
            tablero[i+2] = tablero[i];
            tablero[i] = "";
          }
        }
        else if (tablero[i+2] === tablero[i])
        {
          tablero[i+2] = tablero[i]*2;
          tablero[i] = "";
        }
        else
        {
          tablero[i+1] = tablero[i];
          tablero[i] = "";
        }
      }
      else if (tablero[i+1] === tablero[i])
      {
        tablero[i+1] = tablero[i]*2;
        tablero[i] = "";
      }
    }
  }
}

async function clickDiv(index, tablero) {
  if (tablero === 'A' && tableroA[index] === "" && turno === 0) {
    tableroA[index] = 2;
    turno++;
    //await guardarPartida(idPartida, tableroA, tableroB, turno);
  }
  if (tablero === 'B' && tableroB[index] === "" && turno === 2) {
    tableroB[index] = 2;
    turno++;
    //await guardarPartida(idPartida, tableroA, tableroB, turno);
  }
  const appDiv = document.querySelector('#app');
  if (appDiv) appDiv.replaceChildren(await renderContent());
}