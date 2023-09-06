//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
/*const numeroCaracteres=str=>{
    return str.length;
 }
 console.log(numeroCaracteres('uwu'));*/
 const numeroCaracteres = (str='')=> (!str) 
 ? console.warn('No ingresaste ninguna cadena') 
 : console.info(str.length);
 //numeroCaracteres();
// numeroCaracteres('kronichiwa');
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const stringRecortado=(str,numero)=>{
    let newStr='';
    for(i=0;i<numero;i++){
       newStr += str[i];
    }
    console.log(newStr);
 }
 //stringRecortado('Furina',5);
 const recortarTexto=(str='',numero=undefined)=>
 (!str)
 ? console.warn('No ingresaste ninguna cadena') 
 : console.info(str.slice(0,numero));
 //recortarTexto('Furina',5);
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function separarCadena(str, signo) {
    let separar = str.split(signo);
    return separar;
}
 //console.log(separarCadena('como esta usted',' '));
//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetir = (str,numero)=>{
    for(i=0;i<numero;i++){
       console.log(str);
    }
 }
 //repetir('uwu',5);
 const repetirTexto=(str='',numero=undefined)=>{
    if(!str) return console.warn('No ingresaste texto');
    if(numero===undefined) return console.warn('no ingresaste el numero');
    if(numero===0) return console.warn('el numero no puede ser 0');
    //if(Math.sing(numero)===-1) console.warn('el numero no puede ser negativo');
    if(numero<0) return console.warn('el numero no puede ser negativo');
    for(i=0;i<numero;i++){
        console.info(`${str}, ${i+1}`);
     }
 }
//repetirTexto('owo',5);
//repetirTexto('',-5);
//repetirTexto('owo');
//repetirTexto('owo',0);
//repetirTexto('owo',-5);

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const revertir = (str='') =>{
if(!str) return console.warn('No ingresaste texto');
return str.split('').reverse().join('');
}
//console.log(revertir('Hola Mundo'));
//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const repetirPalabraDeUnTexto = (str='',palabra='') =>{
    if(!str) return console.warn('No ingresaste texto');
    if(!palabra) return console.warn('No ingrersaste la palabra que quieres ver cuantas veces se repite');
    let newStr = str.split(" ");
    let bidoff=0;
    for(i=0;i<newStr.length;i++){
       if(newStr[i]===palabra){
        bidoff+=1;
       }
     }
     console.info(`En el texto "${str}" la palabra "${palabra}" se repite ${bidoff} veces`);
}
//repetirPalabraDeUnTexto('holi para todos y holi a ti tambien holi','holi');
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function isPalindrome(str) {
    let juntar = "";
    let juntarOtraVez = '';
    for (let i = 1; i <= str.length; i++) {
        juntar += str[str.length - i];
        juntarOtraVez += str[i-1]; 
    }
  let juntar2 = juntar.replace(/[^a-z0-9]/gi,'');
  let juntarOtraVez2 = juntar.replace(/[^a-z0-9]/gi,'');
  return (juntar2===juntarOtraVez2);
}
//console.log(isPalindrome("taco cat"));
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarPatron=(str='',patron='')=>{
    if(!str) return console.warn('No ingresaste texto');
    if(!patron) return console.warn('no ingresaste el patron');
    console.info(str.replace(new RegExp(patron,'ig'),''));//la bandera i es para que no distinga de mayusculas y minusculas, la g para una busqueda global
}
//eliminarPatron('xyz1, xyz2, xyz3, xyz4 y xyz5','xyz');
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600
const aleatorio = ()=>{
    let uwu =  Math.floor(Math.random()*99);
    uwu+=501;
    return uwu;
}
//console.info(aleatorio());
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (nbr=undefined)=>{
    if(nbr===undefined) return console.warn('no ingresaste el numero');
    let reversa = parseFloat(nbr.toString().split('').reverse().join(''));
    return (reversa === nbr);
}
//console.log(capicua(2002));
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (num=undefined) =>{
    if(num===undefined) return console.warn('no ingresaste el numero');
    let bidoff = 1;
    for(i=1;i<=num;i++){
        bidoff*=i;
    }
    return bidoff;
}
//console.info(factorial(6));
//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const primo = (num=undefined)=>{
    bidoff=0;
    for(i=1;i<=num;i++){
     if(num%i===0)
     bidoff+=1;
    }
    (bidoff===2||bidoff===1)
    ?console.info(`El ${num} es numero primo`)
    :console.info(`El ${num} no es numero primo`);
}
//primo(17);
//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parImpar = (num=undefined)=>{
    (num%2===0)
    ?console.info(`El ${num} es numero par`)
    :console.info(`El ${num} no es numero par`);
}
//parImpar(5);
//parImpar(6);
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const celcius = (num=undefined, str='')=>{
    if(str==='C'){
        let temperatura = (num*(9/5)+32);
        console.log(`${num}${str} son equivalentes a ${temperatura}F`);
    }
    if(str==='F'){
        let temperatura = ((num-32)*(5/9));
        console.log(`${num}${str} son equivalentes a ${temperatura}C`);
    }
}
//celcius(100,'C');
//celcius(320,'F');
//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const binarioDecimal = (num=undefined,base=undefined)=>{
    if(num===undefined) return console.warn('no ingresaste el numero a convertir');
    if(typeof num!=='number') return console.warn(`"${num}" no es un numero`);
    if(base===undefined) return console.warn('no ingresaste la base');
    if(typeof base!=='number') return console.warn(`"${num}" no es un numero`);
    if (base === 2){
        return console.info(`El numero ${num} base ${base} = ${parseInt(num,base)} base 10`);
    }else if (base === 10){
        return console.info(`El numero ${num} base ${base} = ${(num.toString(2))} base 2`);
    }else return console.warn('Ingresa una base valida'); 
}
//binarioDecimal(10101,2);
//binarioDecimal(100,10);
//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const descuento = (num=undefined,desc=undefined)=>{
    (desc>=0&&desc<=100)
    ?console.info(`${num} con un ${desc}% de descuento es: ${num-(num*desc/100)}`)
    :console.warn('Ingresa un descuento entre 0 y 100%');
}
//descuento(1000,20);
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularAnios = (fecha=undefined)=>{
    if(fecha===undefined) return console.warn('no ingresaste la fecha');
    if(!(fecha instanceof Date)) return console.warn('la fecha ingresada no es valida');
    let hoyMenosFecha = new Date().getTime()-fecha.getTime(),
        aniosEnMS= 1000*60*60*24*365,
        aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);
    return (Math.sign(aniosHumanos)===-1) 
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos)===1)  
        ? console.info(`Han pasado ${aniosHumanos} años desde el ${fecha.getFullYear()}`)
        : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}
//calcularAnios(new Date(1996,8,13));
//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const vocalesConsonantes=(str='')=>{
    let newStr = str.toLowerCase().split(''),
        bidoff=0,
        bidoff2=0;

    for(i=0;i<newStr.length;i++){
        if(newStr[i]==='a'||newStr[i]==='e'||newStr[i]==='i'||newStr[i]==='o'||newStr[i]==='u'||newStr[i]==='ü'){
            bidoff+=1;
        }
        if(newStr[i]==='b'||newStr[i]==='c'||newStr[i]==='d'||newStr[i]==='f'||newStr[i]==='g'||newStr[i]==='h'||newStr[i]==='j'||newStr[i]==='k'||newStr[i]==='l'
         ||newStr[i]==='m'||newStr[i]==='n'||newStr[i]==='ñ'||newStr[i]==='p'||newStr[i]==='q'||newStr[i]==='r'||newStr[i]==='s'||newStr[i]==='t'||newStr[i]==='v'
         ||newStr[i]==='w'||newStr[i]==='x'||newStr[i]==='y'||newStr[i]==='z'){
            bidoff2+=1;
        } 
    }
    console.info(`El texto "${str}" tiene ${bidoff} vocales y ${bidoff2} consonantes`);
}
//vocalesConsonantes('Hola mundo');

const contarLetras = (str='')=>{
    if(!str) return console.warn('no ingresaste el texto');
    if(typeof str!=='string') return console.warn(`${str} no es una cadena de texto`);
    let vocales=0,
        consonantes=0;
    for (const letra of str) {
        if(/[aeiouüáéíóúAEIOUÁÉÍÚÜ]/.test(letra)){
            vocales++;
        }
        if(/[QWRTYPSDFGHJKLZXCVBNMÑqwrtypsdfghjklzxcvbnmñ]/.test(letra)){
            consonantes++;
        }
    }
    console.info(`El texto "${str}" tiene ${vocales} vocales y ${consonantes} consonantes`);
}
//contarLetras('Hola Mundo');
const contarLetras2 = (str='')=>{
    if(!str) return console.warn('no ingresaste el texto');
    if(typeof str!=='string') return console.warn(`${str} no es una cadena de texto`);
    let vocales=0,
        consonantes=0
        newStr=str.toLowerCase().split('');
    for (const letra of newStr) {
        if(/[aeiouüáéíóú]/.test(letra)){
            vocales++;
        }
        if(/[qwrtypsdfghjklzxcvbnmñ]/.test(letra)){
            consonantes++;
        }
    }
    console.info(`El texto "${str}" tiene ${vocales} vocales y ${consonantes} consonantes`);
}
//contarLetras2('Hola Mundo');
//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validaNombre=(str='')=>{
    if(!str) return console.warn('no ingresaste el nombre');
    if(typeof str!=='string') return console.warn(`${str} no es un nombre`);
    let expReg=/^[A-Za-zÑñáéíóúüÁÉÍÚÜ\s]+$/g.test(str);//^para ver que no haya nada antes $para ver que no haaya nadad despeus
    return (expReg)
    ?console.info(`${str} es un nombre valido`)
    :console.warn(`${str} no es un nombre valido`);
}
//validaNombre('Hugo Alberto');
//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (str='')=>{
    if(!str) return console.warn('No ingresaste texto');
    if((str.match(new RegExp('@gmail.com',''),''))!==null||(str.match(new RegExp('@hotmail.com',''),'')||(str.match(new RegExp('@outlook.com',''),''))!==null)){
        console.info(`${str} es un correo valido`);
    }else console.warn(`${str} no es un correo valido`);
}
//validarEmail('hukranya@gmail.com');
//validarEmail('hukranya@hotmail.com');
//validarEmail('hukranya@outlook.com');

const correo = (str='')=>{
    if(!str) return console.warn('no ingresaste el correo');
    if(typeof str!=='string') return console.warn(`${str} no es un correo`);
    let minus = str.toLowerCase();
    let expReg=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(minus);
    return (expReg)
    ?console.info(`${str} es un correo valido`)
    :console.warn(`${str} no es un correo valido`);
}
//correo('Hukranya@gmail.com');
//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const cuadrado = (arr=undefined)=>{
    let numero=(arr.toString().split(','));
    let numero2=[];
    for(i=0;i<numero.length;i++){
        numero2[i]=numero[i]*numero[i];
    }
    console.info(`${arr} al cuadrado es: ${numero2}`);
}
//cuadrado([2,4,5,6]);
const devolverCuadrado = (arr=undefined)=>{
    if(arr===undefined) return console.warn('no ingresaste el arreglo');
    if(!(arr instanceof Array)) return console.error('no ingresaste un arreglo');
    if(arr.length===0) return console.warn('el arreglo esta vacio');
    for (const num of arr) {
        if(typeof num!=='number')return console.warn('el valor ingresado no es un numero');
    }
    let newArr =arr.map(el => el*el);
    return console.info(`${arr} al cuadrado es: ${newArr}`);
}
//devolverCuadrado([2,3]);
//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const minMax=(arr=undefined)=>{
    let numero=(arr.toString().split(','));
    let bidoff=numero[0],bidoff2=numero[0];
    for(i=0;i<numero.length;i++){
        if(bidoff>numero[i]) bidoff=numero[i];
        if(bidoff2<numero[i]) bidoff2=numero[i];
    }
    console.info(`El valor maximo es:${bidoff2} y el valor minimo es:${bidoff}`);
}
//minMax([2,4,5,6,9,1]);
const minMax2=(arr=undefined)=>{
    if(arr===undefined) return console.warn('no ingresaste el arreglo');
    if(!(arr instanceof Array)) return console.error('no ingresaste un arreglo');
    if(arr.length===0) return console.warn('el arreglo esta vacio');
    for (const num of arr) {
        if(typeof num!=='number')return console.warn('el valor ingresado no es un numero');
    }
    console.info(`Arreglo original:${arr} valor maximo:${Math.max(...arr)}, valor minimo:${Math.min(...arr)}`);
}
//minMax2([2,4,5,6,9,1]);
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const parImparArray=(arr=undefined)=>{
    let numero=(arr.toString().split(','));
    let bidoff=[],bidoff2=[];
    let j=0,k=0;
    for(i=0;i<numero.length;i++){
        if (numero[i]%2===0){
            bidoff[j]=numero[i];
            j++;
        }
        else {
            bidoff2[k]=numero[i];
            k++;
        }
    }
    console.info(`Los pares son:${bidoff} y los impares son:${bidoff2}`);
}
//parImparArray([2,3,5,6,9,1,4]);
const parImparArray2=(arr=undefined)=>{
    if(arr===undefined) return console.warn('no ingresaste el arreglo');
    if(!(arr instanceof Array)) return console.error('no ingresaste un arreglo');
    if(arr.length===0) return console.warn('el arreglo esta vacio');
    for (const num of arr) {
        if(typeof num!=='number')return console.warn('el valor ingresado no es un numero');
    }
    console.info({
        pares:arr.filter(num=>num%2===0)
    },
    {
        impares:arr.filter(num=>num%2!==0)
    });
}
//parImparArray2([2,3,5,6,9,1,4]);
//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma 
//ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ascendenteDescendente = (arr=undefined)=>{
    if(arr===undefined) return console.warn('no ingresaste el arreglo');
    if(!(arr instanceof Array)) return console.error('no ingresaste un arreglo');
    if(arr.length===0) return console.warn('el arreglo esta vacio');
     for (const num of arr) {
        if(typeof num!=='number')return console.warn('el valor ingresado no es un numero');
    }
    console.info({
        arr,
        asc:arr.map(el=>el).sort(),
        desc:arr.map(el=>el).sort().reverse()
    });
}
//ascendenteDescendente([1,4,2,5,2,6,3,8,1,9]);
//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const quitarDuplicados = (arr=undefined)=>{
    if(arr===undefined) return console.warn('no ingresaste el arreglo');
    if(!(arr instanceof Array)) return console.error('no ingresaste un arreglo');
    if(arr.length===0) return console.warn('el arreglo esta vacio');
    if(arr.length===1) return console.warn('el arreglo debe incluir al menos 2 elementos');
    console.info({
        original:arr,
        sinDuplicados: arr.filter((value,index,self)=> self.indexOf(value)===index)
    });
}
//quitarDuplicados(['x',2,3,'x',4,2,'f',5,'f']);
const quitarDuplicados2 = (arr=undefined)=>{
    if(arr===undefined) return console.warn('no ingresaste el arreglo');
    if(!(arr instanceof Array)) return console.error('no ingresaste un arreglo');
    if(arr.length===0) return console.warn('el arreglo esta vacio');
    if(arr.length===1) return console.warn('el arreglo debe incluir al menos 2 elementos');
    console.info({
        original:arr,
        sinDuplicados: [...new Set(arr)]
    });
}
//quitarDuplicados2(['x',2,3,'x',4,2,'f',5,'f']);
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (arr=undefined)=>{
    if(arr===undefined) return console.warn('no ingresaste el arreglo');
    if(!(arr instanceof Array)) return console.error('no ingresaste un arreglo');
    if(arr.length===0) return console.warn('el arreglo esta vacio');
    for (const num of arr) {
        if(typeof num!=='number')return console.warn('el valor ingresado no es un numero');
    }
    let numero2=0;
    for(i=0;i<arr.length;i++){
        numero2+=(arr[i]);
    }
    console.info(`${arr} promediado es: ${numero2/arr.length}`);
}
//promedio([5,6,7]);
const promedio2 = (arr=undefined)=>{
    if(arr===undefined) return console.warn('no ingresaste el arreglo');
    if(!(arr instanceof Array)) return console.error('no ingresaste un arreglo');
    if(arr.length===0) return console.warn('el arreglo esta vacio');
    for (const num of arr) {
        if(typeof num!=='number')return console.warn('el valor ingresado no es un numero');
    }
    console.info(
        arr.reduce((total,num,index,arr)=>{
            total +=num;
            if(index === arr.length-1){
                return `el promedio de ${arr.join(' + ')} es: ${total/arr.length}`;
            } 
            else{
                return total;
            }
        })
    )
}
//promedio2([5,6,7]);
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
            ? console.error(`La calificacion ${calificacion} no es una calificacion valida`)
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