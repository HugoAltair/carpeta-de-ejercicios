class Pelicula {
  constructor(id, titulo, director, estreno, pais, generos, calificacion) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;
  }

  validarCadena(propiedad, valor) {
    console.log(this);
    if (!this.valor)
      return console.warn(`${propiedad} ${this.valor} esta vacio`);
    console.log(typeof this.valor);
    if (typeof this.valor != "string")
      console.error(`${propiedad} ${valor} no es una cadena de texto`);
    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros
                letras minusculas, los 7 restantes numeros`);
      }
    }
  }

  validate(param) {
    console.log(this);
    if (!this[param]) return console.warn(`${param} ${this[param]} esta vacio`);
    if (typeof this[param] != "string")
      console.error(`${this[param]} no es una cadena de texto`);
    return true;
  }
}

const peli = new Pelicula({
  id: "tt1234567",
});

const peli2 = new Pelicula("algo");

peli.validate("id");
peli2.validate("id");
