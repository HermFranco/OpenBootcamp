const listaCompras = ["Mantequilla", "Galletas", "Leche", "Harina", "Tomate", "Lechuga"];

listaCompras.push("Aceite de Girasol")
console.log(listaCompras);

listaCompras.pop()
console.log(listaCompras);

const listaPeliculas = [
  {
    titulo: "The Godfather",
    director: "Francis Ford Coppola",
    fecha: 1972
  },
  {
    titulo: "Avatar",
    director: "James Cameron",
    fecha: 2009
  },
  {
    titulo: "Terminator",
    director: "James Cameron",
    fecha: 1991
  },
  {
    titulo: "Toy Story 3",
    director: "Lee Unkrich",
    fecha: 2010
  },
  {
    titulo: "Los Vengadores",
    director: "Joss Whedon",
    fecha: 2012
  },
  {
    titulo: "Interstellar",
    director: "Christopher Nolan",
    fecha: 2014
  },
  {
    titulo: "El Gran Hotel Budapest",
    director: "Wes Anderson",
    fecha: 2014
  },
  {
    titulo: "Cualquiera",
    director: "Yo mero",
    fecha: 2022
  }
]
console.log(listaPeliculas);


const peliculas2010 = listaPeliculas.filter(obj => obj.fecha >= 2010);
console.log(peliculas2010);

const listaDirectores = listaPeliculas.map(valor => valor.director )
console.log(listaDirectores);

const soloPeliculas = listaPeliculas.map(valor => valor.titulo)
console.log(soloPeliculas);


const peliculasConcat = listaDirectores.concat(soloPeliculas)
console.log(peliculasConcat);

const peliculasPropagacion = [...listaDirectores, ...soloPeliculas]
console.log(peliculasPropagacion);