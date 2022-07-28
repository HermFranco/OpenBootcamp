const datosPersonales = {
    nombre: "Roman",
    apellido: "Juarez",
    edad: "30",
    altura: 1.90,
    isdeveloper: true
  };
  
  const getEdad = datosPersonales.edad;
  console.log(getEdad);
  
  const listaConAmigos = [
    {...datosPersonales},
  {
    nombre: "Fernando",
    apellido: "Benitez",
    edad: "36",
    altura: 1.94,
    isdeveloper: false
  },
  {
    nombre: "Rafael",
    apellido: "Vera",
    edad: "22",
    altura: 1.85,
    isdeveloper: false
  }
  ]
  
  const listasOrdenadas = listaConAmigos.sort((a,b) => b.edad - a.edad)
  
  console.log(listasOrdenadas);
  
  console.log(listaConAmigos);