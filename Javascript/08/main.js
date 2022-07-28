function verdadero(){
    return true
  }
  
  console.log(verdadero());
  
  function promesa(){
    const result = setTimeout(() => {
     console.log("Hola, soy un promesa"); 
    }, 5000);
    return result
  }
  
  promesa()
  
  function* generadoraIndices() {
    let indice = 0;
    while(true) {
      yield indice +=2 
    }
  }
  
  const gen = generadoraIndices();
  
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);