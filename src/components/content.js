export {renderContent}

let tableroA = Array(16).fill("");
let tableroB = Array(16).fill("");
let turno = 0;

function renderContent(){
  return `
<div class="container board-wrapper">
  <div class="board">
  ${
    tableroA.map((f, i) => `<div class="cell" onclick="clickDiv(${i}, 'A')">${f}</div>`).join('')
  }
  </div>
  <div class="board">
  ${
    tableroB.map((f, i) => `<div class="cell" onclick="clickDiv(${i}, 'B')">${f}</div>`).join('')
  }
  </div>
</div>
  `;
}

if (typeof window !== 'undefined' && !window.tableroA_listener) {
  window.tableroA_listener = true;
  window.addEventListener('keydown', (e) => {
    if (e.key === 'w' && turno === 1) {
      moverArriba(tableroA);
      turno++;
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.innerHTML = renderContent();
    }
    if (e.key === 'a' && turno === 1) {
      moverIzquierda(tableroA);
      turno++;
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.innerHTML = renderContent();
    }
    if (e.key === 's' && turno === 1) {
      moverAbajo(tableroA);
      turno++;
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.innerHTML = renderContent();
    }
    if (e.key === 'd' && turno === 1) {
      moverDerecha(tableroA);
      turno++;
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.innerHTML = renderContent();
    }
  });
}

if (typeof window !== 'undefined' && !window.tableroB_listener) {
  window.tableroB_listener = true;
  window.addEventListener('keydown', (e) => {
    if (e.key === 'w' && turno === 3) {
      moverArriba(tableroB);
      turno = 0;
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.innerHTML = renderContent();
    }
    if (e.key === 'a' && turno === 3) {
      moverIzquierda(tableroB);
      turno = 0;
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.innerHTML = renderContent();
    }
    if (e.key === 's' && turno === 3) {
      moverAbajo(tableroB);
      turno = 0;
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.innerHTML = renderContent();
    }
    if (e.key === 'd' && turno === 3) {
      moverDerecha(tableroB);
      turno = 0;
      const appDiv = document.querySelector('#app');
      if (appDiv) appDiv.innerHTML = renderContent();
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

function clickDiv(index, tablero) {
  if (tablero === 'A' && tableroA[index] === "" && turno === 0) {
    tableroA[index] = 2;
    turno++;
  }
  if (tablero === 'B' && tableroB[index] === "" && turno === 2) {
    tableroB[index] = 2;
    turno++;
  }
  const appDiv = document.querySelector('#app');
  if (appDiv) appDiv.innerHTML = renderContent();
}

if (typeof window !== 'undefined') {
  window.clickDiv = clickDiv;
}