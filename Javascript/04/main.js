let nombre = "Herm";
let apellido = "Franco";
let estudiante = nombre.concat(" ", apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLocaleLowerCase();
let contarEstudiante = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido.slice(-1);
let eliminarEspacios = estudiante.replace(" ", "");
let buscarNombre = estudiante.includes(nombre);


console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(contarEstudiante);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(eliminarEspacios);
console.log(buscarNombre);