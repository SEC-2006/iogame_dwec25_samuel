export {getLogin, verifyLogin, getRegister, verifyRegister, logout, usuarioTienePartida, crearPartida, cargarPartida, guardarPartida };
import { renderHeader, renderHeaderUser } from "../components/header";
import { renderLogin } from "../components/login";


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
            headerDiv.replaceChildren( renderHeaderUser() );
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

async function logout() {
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
    headerDiv.replaceChildren( renderHeader() );
    const appDiv = document.querySelector('#app');
    appDiv.replaceChildren( renderLogin() );
    alert('Sesión cerrada correctamente!');
}

//----------------------------------------------------------------------------------------------------------------

async function usuarioTienePartida() {
    const response = await fetch('https://ojnmffyrmurpqabunknc.supabase.co/rest/v1/partidas?select=email', {
        method: 'GET',
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbm1mZnlybXVycHFhYnVua25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NzI4NDMsImV4cCI6MjA3NjE0ODg0M30.HNZlj_rLFSFHQdHkg7zVAXjegZgIQHnzuQjt4VXvjpo',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem("access_token")
        }
    });

    console.log(localStorage.getItem("email"));
    if(localStorage.getItem("email") == null) return null;

    const data = await response.json();
    return data.some(partida => partida.email === localStorage.getItem("email"));
}

async function crearPartida() {
    const estado = {
        tableroA: Array(16).fill(""),
        tableroB: Array(16).fill(""),
        turno: 0
    };

    const response = await fetch('https://ojnmffyrmurpqabunknc.supabase.co/rest/v1/partidas', {
        method: 'POST',
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbm1mZnlybXVycHFhYnVua25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NzI4NDMsImV4cCI6MjA3NjE0ODg0M30.HNZlj_rLFSFHQdHkg7zVAXjegZgIQHnzuQjt4VXvjpo',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem("access_token"),
            'Prefer': 'return=representation'
        },
        body: JSON.stringify({
            email: localStorage.getItem("email"),
            estado: estado
        })
    });

    const data = await response.json();
    return data[0].id;
}

async function cargarPartida(email) {
    const response = await fetch(`https://ojnmffyrmurpqabunknc.supabase.co/rest/v1/partidas?email=eq.${email}&select=*`, {
        method: 'GET',
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbm1mZnlybXVycHFhYnVua25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NzI4NDMsImV4cCI6MjA3NjE0ODg0M30.HNZlj_rLFSFHQdHkg7zVAXjegZgIQHnzuQjt4VXvjpo',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem("access_token")
        }
    });

    const data = await response.json();
    
    if (data.length > 0) {
        const partida = data[0];
        return {
            id: partida.id,
            tableroA: partida.estado.tableroA,
            tableroB: partida.estado.tableroB,
            turno: partida.estado.turno
        };
    }
    
    return null;
}

async function guardarPartida(id, tableroA, tableroB, turno) {
    const estado = {
        tableroA: tableroA,
        tableroB: tableroB,
        turno: turno
    };

    const response = await fetch(`https://ojnmffyrmurpqabunknc.supabase.co/rest/v1/partidas?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbm1mZnlybXVycHFhYnVua25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NzI4NDMsImV4cCI6MjA3NjE0ODg0M30.HNZlj_rLFSFHQdHkg7zVAXjegZgIQHnzuQjt4VXvjpo',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem("access_token")
        },
        body: JSON.stringify({
            estado: estado
        })
    });

    return response.ok;
}