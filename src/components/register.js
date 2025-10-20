export {renderRegister}

function renderRegister(){
    return `
    <h1>Register</h1>
    <form onsubmit="registrarUsuario(event)">
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
}

async function registrarUsuario(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://ojnmffyrmurpqabunknc.supabase.co/auth/v1/signup', {
        method: 'POST',
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbm1mZnlybXVycHFhYnVua25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NzI4NDMsImV4cCI6MjA3NjE0ODg0M30.HNZlj_rLFSFHQdHkg7zVAXjegZgIQHnzuQjt4VXvjpo',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
        alert('User registered successfully!');
        window.location.hash = '#login';
    } else {
        alert('Error registering user: ' + data.msg);
    }
}

if (typeof window !== 'undefined') {
    window.registrarUsuario = registrarUsuario;
}