let legajo = localStorage.getItem('legajo');
if (!legajo) {
    window.location.replace("https://chat-bot-utn.vercel.app/");
}

let nombreUsuario = localStorage.getItem('nombre');
if (nombreUsuario) {
    let primerNombre = nombreUsuario.split(' ')[0];
    document.getElementById('showUsernameBtn').innerText = "Hola, " + primerNombre;
}

document.getElementById('logoutBtn').addEventListener('click', function() {
   
    localStorage.removeItem('legajo');
    localStorage.removeItem('nombre');
    window.location.href = "https://chat-bot-utn.vercel.app/";
});