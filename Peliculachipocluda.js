/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB,
 titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
    aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy,
 Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

class Pelicula{
    constructor({id, titulo, director, estreno, pais,generos,calificacion}){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
    }
    static get listaGeneros(){
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy',
            'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 
            'Talk-Show', 'Thriller', 'War', 'Western'];
    }
    static generosAceptados(){
        console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')}`);
    }
    validarCadena(propiedad,valor){
        if(!valor) { console.warn(`${propiedad} ${valor} esta vacio`);}
        else if(typeof valor!=='string') {console.error(`${propiedad} ${valor} no es una cadena de texto`);}
         else return true;  
    }
    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length>longitud) {console.error(`${propiedad} ${valor} excede los caracteres admididos`);}
         else return true; 
    }
    validarNumero(propiedad,valor=undefined){
        if(valor===undefined) { console.warn(`${propiedad} ${valor} esta vacio`);}
        else if(typeof valor!=='number') {console.error(`${propiedad} ${valor} no es un numero`);}
         else return true; 
    }
    validarArreglo(propiedad,valor){
        if(!valor) { console.warn(`${propiedad} ${valor} esta vacio`);}
        else if(!(valor instanceof Array)) {console.error(`${propiedad} ${valor} no es una cadena de texto`);}
        else for(let cadena of valor){
            if(typeof cadena!=='string')console.error('el valor ingresado no es una cadena de texto');
        }
        return true;
    }
    validarIMDB(id){
      if(this.validarCadena('IMDB id',id))
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
             console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros
            letras minusculas, los 7 restantes numeros`);
    }
    validarTitulo(titulo){
        if  (this.validarCadena('Titulo',titulo))
            this.validarLongitudCadena('Titulo',titulo,100);
    }
    validarDirector(director){
        if  (this.validarCadena('Director',director))
        this.validarLongitudCadena('Director',director,50);
    }
    validarEstreno(estreno){
        if (this.validarNumero('Año de Estreno',estreno))
            if (!/^([0-9]){4}$/.test(estreno))
            console.error(`El año ${estreno} no es un año valido`);
    }
    validarPais(pais){
         (this.validarArreglo('Pais',pais));
    }
    validarGeneros(generos){
       if (this.validarArreglo('Generos',generos)){
          for (const genero of generos) {
            if (!Pelicula.listaGeneros.includes(genero)){
                console.error(`Genero(s) incorrecto(s): ${genero}`);
                Pelicula.generosAceptados();
            }
          }  
       }
    }
    validarCalificacion(calificacion){
        if (this.validarNumero('Calificacion',calificacion))
            (calificacion<0||calificacion>10)
            ? console.error(`La calificacion ${calificacion} no es una calificacion valida de 0 a 10`)
            : this.calificacion = calificacion.toFixed(1);
    }
}
//Pelicula.generosAceptados();
const peli = new Pelicula ({
    id:'tt1234567',
    titulo:'La camisa del mojado',
    director:'Frank Rivers',
    estreno:2006,
    pais:['Mexico'],
    generos:['Action','Romance'],
    calificacion:10
});
console.log(peli);