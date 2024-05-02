// tarea 1
// escribe tu respuesta acá

function contrasenaValida(texto) {
  const pass1 = "abc"
  const pass2 = "efg"

  if (pass1 == texto || pass2 == texto)
    return true

  return false
}

// código de prueba
// console.log(contrasenaValida("abc")) // true
// console.log(contrasenaValida("efg")) // true
// console.log(contrasenaValida("hola")) // false
// console.log(contrasenaValida("")) // false

function imprimirArreglo(a,b ,c,d) {
  const arreglo = [];
  arreglo.push(a)
  arreglo.push(b)
  arreglo.push(c)
  arreglo.push(d)

  // for (let i = 0; i < arreglo.length; i++) {
  //   console.log(arreglo[i])
  // }

  // for (const item of arreglo) {
  //   console.log(item)
  // }

  arreglo.forEach(item => {
    console.log(item)
  })
}


console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
