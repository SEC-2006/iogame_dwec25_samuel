export {renderRegister}
import { getRegister, verifyRegister } from "../services/supaservice";

function renderRegister(){
    const formHtml = `
    <h1>Register</h1>
    <form id="formRegister">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password">
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
    `;

    const divRegister = document.createElement('div');
    divRegister.innerHTML = formHtml;
    const form = divRegister.querySelector("form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            const response = await getRegister(email, password);
            await verifyRegister(response);
        } catch (err) {
            console.error('Register error', err);
            alert('Error registrando usuario. Comprueba tu conexión o datos.');
        }
    });
    return divRegister;
}