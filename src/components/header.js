export {renderHeader}
export {renderHeaderUser}


function renderHeader(){
    return `
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
}

function renderHeaderUser(){
    return `
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
            <li><a class="dropdown-item" href="#login" onclick="logout()">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `;

  
}

async function logout(){
    await fetch('https://ojnmffyrmurpqabunknc.supabase.co/auth/v1/logout', {
        method: 'POST',
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbm1mZnlybXVycHFhYnVua25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NzI4NDMsImV4cCI6MjA3NjE0ODg0M30.HNZlj_rLFSFHQdHkg7zVAXjegZgIQHnzuQjt4VXvjpo',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem("access_token")
        }
    });

    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    const headerDiv = document.querySelector('#header');
    headerDiv.innerHTML = renderHeader();
    alert('Sesión cerrada correctamente!');
    
}

if (typeof window !== 'undefined') {
    window.logout = logout;
}