function procesaA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      numero = numero + 1
      console.log("a", numero)
      resolve(true)
    }, 5000)
  })


}

function procesaB() {
  console.log("b", numero)
}


var numero = 10000



procesaA().then(() => {
  procesaB()
})
