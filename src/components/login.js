export {renderLogin}
import { getLogin, verifyLogin } from "../services/supaservice";

function renderLogin(){
    const formHtml = `
    <h1>Login</h1>
    <form id="formLogin">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    `;

    const divLogin = document.createElement('div');
    divLogin.innerHTML = formHtml;
    const form = divLogin.querySelector("form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            const response = await getLogin(email, password);
            await verifyLogin(response);
        } catch (err) {
            console.error('Login error', err);
            alert('Error enviando petición de login. Comprueba tu conexión.');
        }
    });
    return divLogin;
}