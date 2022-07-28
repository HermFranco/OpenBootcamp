const hoy = new Date()
console.log(hoy);

const nacimiento = new Date(1986, 11, 20)
console.log(nacimiento);

const esMasTarde = hoy > nacimiento
console.log(esMasTarde);

const diaNacimiento = nacimiento.getDate()
console.log(diaNacimiento);

const mesNacimiento = nacimiento.getMonth() + 1
console.log(mesNacimiento);

const anyoNacimiento = nacimiento.getFullYear()
console.log(anyoNacimiento);