const persona = {
    nombre: "rama",
    edad: 40,
    isDeveloper: true,
    "fecha-nacimiento": new Date("02, 02, 1981"),
    "libro-favorito": {
      titulo: "El mundo de sofia",
      autor: "Jostein Gaarder",
      fecha: 1991,
      url: "https://www.amazon.es/mundo-Sof%C3%ADa-Edades-Biblioteca-Gaarder/dp/8498414512"
    }
  }
  console.log(persona["fecha-nacimiento"]);