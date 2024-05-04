let legajos = [];
let contrasenias = [];
let dnis = [];


const usuariosJSON = [
    {
      "legajo": 10495,
      "contrasenia": "ignacio jose rocha",
      "dnis": 40855566
    },
    {
      "legajo": 10333,
      "contrasenia": "gonzalo balmaceda",
      "dnis": 44662148
    },
    {
      "legajo": 10328,
      "contrasenia": "enzo astorga",
      "dnis": 41083045
    },
    {
      "legajo": 10487,
      "contrasenia": "diego rafael llanos ramos",
      "dnis": 47937545
    },
    {
      "legajo": 10494,
      "contrasenia": "maximiliano robilotta",
      "dnis": 41672857
    },
    {
      "legajo": 10386,
      "contrasenia": "guillermo giannone",
      "dnis": 31923118
    },
    {
      "legajo": 10433,
      "contrasenia": "javier mariñanco",
      "dnis": 42449860
    },
    {
      "legajo": 10554,
      "contrasenia": "debora celeste pulitta",
      "dnis": 35912813
    },
    {
      "legajo": 10416,
      "contrasenia": "matias landi",
      "dnis": 41438322
    }
  ];

usuariosJSON.forEach(usuario => {
  legajos.push(usuario.legajo);
  contrasenias.push(usuario.contrasenia);
  dnis.push(usuario.dnis);
});



function validarNumero() {
  let numero = document.getElementById("exampleInputEmail1").value.trim();
  let nombre = document.getElementById("nombre").value.trim();

  if (numero === "" || isNaN(numero)) {
    document.getElementById("error-message-legajo").style.display = "block";
    return false;
  }

  let index = legajos.indexOf(parseInt(numero));
  let index2 = contrasenias.findIndex(
    (element) => element.toLowerCase().trim() === nombre.toLowerCase().trim()
  );

  if (index === index2) {
    localStorage.setItem("legajo", numero);
    localStorage.setItem("nombre", nombre);
    document.getElementById("error-message-legajo").style.display = "none";
    document.getElementById("error-message-nombre").style.display = "none";
    mostrarLegajo(parseInt(numero));
    return true;
  } else {
    document.getElementById("error-message-legajo").style.display = "none";
    document.getElementById("error-message-nombre").style.display = "block";
    return false;
  }
}

function validarFormulario() {
  let index = legajos.indexOf(parseInt(document.getElementById("exampleInputEmail1").value.trim()));
  let nombre = document.getElementById("nombre").value.trim();
  let index2 = contrasenias.findIndex((element) => element.toLowerCase().trim() === nombre.toLowerCase().trim());

  if (index !== -1 && index2 !== -1 && index === index2) {
    return true;
  } else {
    alert("Los datos son incorrectos");
    return false;
  }
}


function mostrarLegajo() {
    let numeroDNI = document.getElementById("exampleInputEmail1").value.trim();
    let index = dnis.indexOf(parseInt(numeroDNI));
    let popup = document.getElementById("legajo-message");

    if (index !== -1) {
        popup.textContent = "Su legajo es: " + legajos[index];
        
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