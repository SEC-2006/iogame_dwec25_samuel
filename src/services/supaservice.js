export {getLogin, verifyLogin, getRegister, verifyRegister};
import { renderHeaderUser } from "../components/header";


async function getLogin(email, password) {
    const response = await fetch('https://ojnmffyrmurpqabunknc.supabase.co/auth/v1/token?grant_type=password', {
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

    return response;
}

async function verifyLogin(response) {
    let data = {};
    try {
        data = await response.json();
    } catch (err) {
        console.warn('No JSON en respuesta', err);
    }
    console.log(data);
    if (response.ok) {
        try {
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("id", data.user.id);
            localStorage.setItem("email",data.user.email);
        } catch (err) {
            console.warn('Error almacenando en localStorage', err);
        }
        alert('Sesión iniciada correctamente!');
        const headerDiv = document.querySelector('#header');
        if (headerDiv && typeof renderHeaderUser === 'function') {
            headerDiv.innerHTML = renderHeaderUser();
        }
        window.location.hash = '#game';
    } else {
        const msg = data && (data.msg || data.error_description || data.error) ? (data.msg || data.error_description || data.error) : response.statusText;
        alert('Error iniciando sesión: ' + msg);
        throw new Error('Login failed: ' + msg);
    }
}

async function getRegister(email, password) {
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
    return response;
}

async function verifyRegister(response) {
    let data = {};
    try {
        data = await response.json();
    } catch (err) {
        console.warn('No JSON en respuesta', err);
    }
    console.log(data);
    if (response.ok) {
        alert('Usuario registrado correctamente!');
        window.location.hash = '#login';
    } else {
        const msg = data && (data.msg || data.error_description || data.error) ? (data.msg || data.error_description || data.error) : response.statusText;
        alert('Error registrando usuario: ' + msg);
        throw new Error('Register failed: ' + msg);
    }
}