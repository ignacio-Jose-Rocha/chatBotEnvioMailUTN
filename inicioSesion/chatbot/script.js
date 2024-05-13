document.addEventListener("DOMContentLoaded", function() {
    let legajo = localStorage.getItem('legajo');
    
    if (!legajo) {
        window.location.replace("https://chat-bot-utn.vercel.app");
    }
    

    let nombreUsuario = localStorage.getItem('nombre');
    let userImage = localStorage.getItem('imagen');
    if (nombreUsuario) {
        let primerNombre = nombreUsuario.split(' ')[0];
        document.getElementById('showUsernameBtn').innerText = "";
        document.getElementById('showUsernameBtn').innerHTML = `<img id="userImage" src="${userImage}" style="border-radius: 50%; width: 30px; height: 30px; margin-right: 10px;"> Hola, ${primerNombre}`;
    }
   
    document.getElementById('logoutBtn').addEventListener('click', function() {
       
        localStorage.removeItem('legajo');
        localStorage.removeItem('nombre');
        window.location.href = "https://chat-bot-utn.vercel.app";
    });

    document.querySelector('.novedades button').addEventListener('click', function() {
        if(!legajo){
            window.location.href = "https://chat-bot-utn.vercel.app";
        }
        else{
            window.location.href = "materias1.html";
        }
        
    });
    document.querySelector('.novedades2 button').addEventListener('click', function() {
        if(!legajo){
            window.location.href = "https://chat-bot-utn.vercel.app/";
        }
        else{
            window.location.href = "chatbot/materias2.html";
        }
        
    });
    document.querySelector('.novedades3 button').addEventListener('click', function() {
        if(!legajo){
            window.location.href = "https://chat-bot-utn.vercel.app/";
        }
        else{
            window.location.href = "novedades.html";
        }
        
    });

    console.log(localStorage);
});