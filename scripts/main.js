let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/iacb-1.gif') {
      miImage.setAttribute('src','images/iacb.gif');
    } else {
      miImage.setAttribute('src', 'images/iacb-1.gif');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Por favor, ingresa tu nombre.');

  if (!miNombre)
  {
    estableceNombreUsuario()
  }
  else
  {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial,' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
  estableceNombreUsuario();
}

/* document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
} */
