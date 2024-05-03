const moduloDatos = (function() {
    let legajos = [10495, 10333, 10328, 10487, 10494, 10386, 10433, 10554, 10416];
    let contrasenia = ["ignacio jose rocha", "gonzalo balmaceda", "enzo astorga", "diego rafael llanos ramos", "maximiliano robilotta", "guillermo giannone", "javier mariñanco", "debora celeste pulitta", "matías landi"];
    let dnis = [40855566, 44662148, 41083045, 47937545, 41672857, 31923118, 42449860, 35912813, 41438322];

    function obtenerVectores() {
        return { legajos, contrasenia, dnis };
    }

    return {
        obtenerVectores
    };
})();

const { legajos, contrasenia, dnis } = moduloDatos.obtenerVectores();

function validarNumero() {
    let numero = document.getElementById('exampleInputEmail1').value.trim();
    let nombre = document.getElementById('nombre').value.trim();

    if (numero === '' || isNaN(numero)) {
        document.getElementById('error-message-legajo').style.display = 'block';
        return false;
    }

    let index = legajos.indexOf(parseInt(numero));
    let index2 = contrasenia.findIndex((element) => element.toLowerCase().trim() === nombre.toLowerCase().trim());

    
    if (index === index2) {
        localStorage.setItem('legajo', numero);
        localStorage.setItem('nombre', nombre);
        document.getElementById('error-message-legajo').style.display = 'none';
        document.getElementById('error-message-nombre').style.display = 'none';
        mostrarLegajo(parseInt(numero));
        return true;
    } else {
        document.getElementById('error-message-legajo').style.display = 'none';
        document.getElementById('error-message-nombre').style.display = 'block';
        return false;
    }
}


function validarFormulario() {
    let nombre = document.getElementById('nombre').value.trim();
    let identificacion = document.getElementById('exampleInputEmail1').value.trim();

    if (nombre === '' || identificacion === '') {
        openModal();
        return false;
    }

    return true;
}

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function mostrarLegajo(numeroDNI) {
    let index = dnis.indexOf(numeroDNI);
    let popup = document.getElementById('legajo-message');
    if (index !== -1) {
        popup.textContent = 'Su legajo es: ' + legajos[index];
    }
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000);
}



document.getElementById('loader').style.display = 'block';
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});
