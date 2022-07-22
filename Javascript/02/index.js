const persona = {
    nombre: "Herman",
    edad: 36,
    isDeveloper: true,
    "fecha-nacimiento": new Date("06, 05, 1986"),
    "libro-favorito": {
      titulo: "Digital fortress",
      autor: "Dann Brown",
      fecha: 1998,
      url: "https://www.amazon.com.mx/Digital-Fortress-Dan-Brown/dp/0312944926"
    }
  }
  console.log(persona["fecha-nacimiento"]);
