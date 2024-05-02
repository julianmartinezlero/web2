// // 10
// const miArreglo  = [10,10,10,10]

// const cadenas = ["hola", "mundo"]
// // console.log(miArreglo)


// miArreglo.forEach((valor) => {
//   // console.log(valor)
// })


// for( let i = 0; i < miArreglo.length; i++) {
//   // console.log(miArreglo[i])
// }


// const nuevoArreglo = miArreglo.map((valor) => {
//   return {
//     "llave": valor,
//     "nombre": "abc" + valor
//   }
// })


// function convierteLetra(value ) {
//   return value + 100
// }


// const arreglo2 = miArreglo.map(convierteLetra)


// function filtrarNumeros(valor) {
//   return valor == 5
// }

// const valoresFiltrados = miArreglo.filter(filtrarNumeros)



// function valorABuscar(valor) {
//   return valor == 15
// }


// const valorBuscado = miArreglo.find(valorABuscar)

// const buscado = 10

// function indiceABuscar(valor) {
//   return valor==buscado
// }

// const indice = miArreglo.findIndex(indiceABuscar)


// function existeEn(valor) {
//   return valor == 10
// }

// const existe = miArreglo.some(existeEn)

// function todosIguales(valor) {
//   return valor==10
// }

// const iguales = miArreglo.every(todosIguales)


// function sumar(a, b, c=0) {
//   return a+b
// }


// const resultado = miArreglo.reduce(sumar)


// const modificacion = miArreglo.map(convierteLetra).reduce(sumar)

// console.log(modificacion)


const arreglo = [
  {
    id: 1,
    nombre: 'Juan',
    ci: 123456,
    direccion: 'cualquier direccion'
  }
]

function eliminarElemento(id) {
  // buscamos el elemento por el id
  const element = arreglo.find(element => element.id == id)
  // sacamos el indice
  index = arreglo.findIndex(e => e == element)
  // eliminar por el indice
  arreglo.splice(index, 1)
  console.log(arreglo)
}

function crearElement(id) {
  arreglo.push({
    id: id,
    nombre: 'Juan',
    ci: 123456,
    direccion: 'cualquier direccion'
  })
  console.log(arreglo)
}

function actualizarElemento(id) {
  // encontramos el objeto
  const element = arreglo.find(element => element.id == id)
  // buscamos el indice del elemento
  index = arreglo.findIndex(e => e == element)
  // remplazamos
  arreglo[index] = {
    id: id,
    nombre: 'Juan22',
    ci: 1234562222,
    direccion: 'cualquier direccionasdas'
  }
  // mostramos
  console.log(arreglo)
}

// crearElement(1)
// actualizarElemento(1)
// eliminarElemento(1)

