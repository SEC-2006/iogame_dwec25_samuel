export {renderContent}

function renderContent(){
  const tablero = Array(16).fill(0).map((_,i)=>i)
    return `
<div class="container board-wrapper">
  <div class="board">
  ${
    tablero.map(f=>`<div class="cell">${f}</div>`).join('')
  }
  
   
  </div>
</div>
    `;
}