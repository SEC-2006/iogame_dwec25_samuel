export {renderProfile}

function renderProfile(){
    const formHtml = `
    <h1>Perfil</h1>
    <form id="formProfile">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username">
        </div>
        <div class="mb-3">
            <label for="full_name" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="full_name" placeholder="Enter name">
        </div>
        <div class="mb-3">
            <label for="avatar_url" class="form-label">Avatar URL</label>
            <input type="text" class="form-control" id="avatar_url" placeholder="Enter avatar url">
        </div>
        <div class="mb-3">
            <label for="website" class="form-label">Website</label>
            <input type="text" class="form-control" id="website" placeholder="Enter website">
        </div>
    <button type="submit" class="btn btn-primary">Actualizar perfil</button>
    </form>
    `;

    const divProfile = document.createElement('div');
    divProfile.innerHTML = formHtml;
    const form = divProfile.querySelector("form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        /*const username = document.getElementById('username').value;
        const full_name = document.getElementById('full_name').value;
        const avatar_url = document.getElementById('avatar_url').value;
        const website = document.getElementById('website').value;*/
    });
    return divProfile;
}