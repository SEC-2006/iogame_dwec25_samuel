import { logout } from "../services/supaservice";

export {renderHeader}
export {renderHeaderUser}


function renderHeader(){
    const headerHtml =  `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#login">2048 Competitivo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#register">Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `;
    const divHeader = document.createElement('div');
    divHeader.innerHTML = headerHtml;
    return divHeader;

}

function renderHeaderUser(){
    const headerHtml = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#game">2048 Competitivo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#game">Game</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">`+
            //<img src="src/imgs/fruites.png" alt="icon" class="rounded-circle me-2" width="40" height="40">
            `<span>${localStorage.getItem('email')}</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <li><a class="dropdown-item" href="#profile">Preferenes</a></li>
            <li><a class="dropdown-item" href="#login" id="logoutBtn">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `;
    const divHeader = document.createElement('div');
    divHeader.innerHTML = headerHtml;
    let logoutBtn = divHeader.querySelector('#logoutBtn');
    logoutBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      await logout();
    });
    return divHeader;
  
}

