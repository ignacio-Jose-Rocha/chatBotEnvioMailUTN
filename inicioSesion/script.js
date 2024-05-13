let usuarios = [];
const usuariosJSON = [
    {
      "legajo": 10495,
      "contrasenia": "ignacio jose rocha",
      "dnis": 40855566,
      "imagen": "./imagenes/ignacio.jpg"
    },
    {
      "legajo": 10333,
      "contrasenia": "gonzalo balmaceda",
      "dnis": 44662148,
      "imagen": "./imagenes/gonzalo.jpeg"
    },
    {
      "legajo": 10328,
      "contrasenia": "enzo astorga",
      "dnis": 41083045,
      "imagen": "./imagenes/enzo.jpeg"
    },
    {
      "legajo": 10487,
      "contrasenia": "diego rafael llanos ramos",
      "dnis": 47937545,
      "imagen": "./imagenes/rafael.jpeg"
    },
    {
      "legajo": 10494,
      "contrasenia": "maximiliano robilotta",
      "dnis": 41672857,
      "imagen": "./imagenes/maxi.jpeg"
    },
    {
      "legajo": 10386,
      "contrasenia": "guillermo giannone",
      "dnis": 31923118,
      "imagen": "./imagenes/guille.jpeg"
    },
    {
      "legajo": 10433,
      "contrasenia": "javier mariñanco",
      "dnis": 42449860,
      "imagen": "./imagenes/javi.jpeg"
    },
    {
      "legajo": 10554,
      "contrasenia": "debora celeste pulitta",
      "dnis": 35912813,
      "imagen": "./imagenes/celeste.jpeg"
    },
    {
      "legajo": 10416,
      "contrasenia": "matias landi",
      "dnis": 41438322,
      "imagen": "./imagenes/matias.jpeg"
    }
  ];

  usuariosJSON.forEach(usuario => {
    usuarios[usuario.legajo] = {
      contrasenia: usuario.contrasenia,
      dni: usuario.dnis,
      imagen: usuario.imagen
    };
  });

   function validarFormulario() {
    let legajo = parseInt(document.getElementById("exampleInputEmail1").value.trim());
    let nombre = document.getElementById("nombre").value.trim().toLowerCase();
  
    if (usuarios[legajo] && usuarios[legajo].contrasenia.toLowerCase() === nombre) {
      localStorage.setItem("legajo", legajo);
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("imagen", usuarios[legajo].imagen);
      return true;
    } else {
      alert("Los datos son incorrectos");
      return false;
    }
  }
  function validarFormulario() {
    let legajo = parseInt(document.getElementById("exampleInputEmail1").value.trim());
    let nombre = document.getElementById("nombre").value.trim().toLowerCase();
  
    if (usuarios[legajo] && usuarios[legajo].contrasenia.toLowerCase() === nombre) {
      localStorage.setItem("legajo", legajo);
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("imagen", usuarios[legajo].imagen);
      return true;
    } else {
      alert("Los datos son incorrectos");
      return false;
    }
  }
  function mostrarLegajo() {
    let numeroDNI = parseInt(document.getElementById("exampleInputEmail1").value.trim());
    let usuario = Object.values(usuarios).find(usuario => usuario.dni === numeroDNI);
    let popup = document.getElementById("legajo-message");

    if (usuario) {
        let legajo = Object.keys(usuarios).find(key => usuarios[key] === usuario);
        popup.textContent = "Su legajo es: " + legajo;
        
        popup.style.display = "block";
        setTimeout(function () {
            popup.style.display = "none";
        }, 3000);
    } else {
        popup.textContent = "No se encontró un legajo asociado al DNI ingresado.";
        popup.style.display = "block";
    }
}
document.getElementById("loader").style.display = "block";
window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});