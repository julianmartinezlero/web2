function crear_boton(texto, color) {
  const miBoton = document.createElement('button');
  miBoton.innerHTML = texto;
  miBoton.style.backgroundColor = color
  return miBoton;
}

function render_boton(idElement, boton) {
  const contenedor = document.getElementById(idElement)
  contenedor.appendChild(boton)
}


function crearFormulario(textLabel) {
  const divPadre = document.createElement("div")
  const label = document.createElement('label')
  const input = document.createElement('input')

  divPadre.classList.add('input')

  label.innerHTML = textLabel
  input.type = 'text'

  divPadre.appendChild(label)
  divPadre.appendChild(input)

  return divPadre

}

function showAlert(btnText) {
  alert(btnText);
}


function createBtnInfo(text) {
  const btn = crear_boton(text, 'white')
  btn.addEventListener('click', () => {
    window.location.reload()
  })
  render_boton('datos', btn)

}


// let maxX = document.body.offsetWidth - 40;
let maxY = document.body.offsetHeight - 40;


let posX = 0
let posY = 0

function moverCubo(x,y) {
  const cubo = document.getElementById('cubo')
  cubo.style.left = `${(posX)}px`
  cubo.style.top = `${(posY)}px`
}


setInterval(() => {
  if (posX < maxX && posY==0) {
    posX++
  } else if(posY < maxY && posX==maxX) {
    posY++
  } else if (posX <= maxX && posX>=0 && posY == maxY) {
    posX--
  } else {
    posY--
  }
  moverCubo(posX, posY)

}, 0)






