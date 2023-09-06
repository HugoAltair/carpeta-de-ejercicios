/*
let nombre='Hugo';
let apellido='Palafox';
let uwu =new String('owo');
console.log(nombre,apellido,uwu,
   nombre.length,//longitud de la cadena
   apellido.length,
   nombre.toUpperCase(),//Hacerlo mayusculas
   apellido.toLowerCase(),//Hacerlo minusculas
   nombre.includes('Hugo'),//si la cadena incluye ese texto, regresa true, sino false
   apellido.includes('uwu'),
   nombre.trim(),//elimina los espacios al inicio y final de una cadena
   nombre.split(' ')//separa la cadena dependiendo del caracter seleccionado en ella
);

let nombre='Hugo';
let apellido='Palafox';
let saludo = 'Hola, mi nombre es '+ nombre + ' ' + apellido + '.';//concatenar

let saludo2 = `Hola, mi nombre es ${nombre} ${apellido}.`;//interpolar
console.log(saludo);
console.log(saludo2);


const saludar = ()=>{
   console.log('Hola');
}
saludar();
*/
/*
///////////////////////////////////////////////////////////////////////////////////////////////
 //funcion flecha

const saludar = nombre => {         //si tiene un parametro no es necesario los parentesis
   console.log(`Hola ${nombre}`);
}
saludar(`Hugo`);

const sumar = function(a,b){
   return a+b;
}
console.log(sumar(8,9));

const sumar = (a,b) => a+b; //no es necesario escribir el return
//y si solo es una linea de codigo no es necesario las llaves
console.log(sumar(9,9));

const funcionDeVariasLineas = () =>{
   console.log('Uno');
   console.log('Dos');
   console.log('Tres');
}
funcionDeVariasLineas();

const numeros=[1,2,3,4,5];
numeros.forEach((el,index) =>
console.log(` ${el} esta en la poscion ${index}`));

const perro = {
   nombre : 'chuba',
   ladrar(){
      console.log(this)
   }
}
perro.ladrar();

const perro = {
   nombre : 'chuba',
   ladrar : funcion(){
      console.log(this)
   }
}

perro.ladrar();

*/
/*
///////////////////////////////////////////////////////////////////////////////////////////////
 //numeros

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = '5.6';
 console.log(a,b);
 console.log(c.toFixed(1));
 console.log(parseInt(c));
 console.log(c+parseInt(d));//el parce transforma la cadena en numero xdd
 */
/*
///////////////////////////////////////////////////////////////////////////////////////////////
 //funciones

 //funcion declarada
 function estoEsUnaFuncion(){
   console.log('Uno');
   console.log('Dos');
   console.log('Tres');
 }
 estoEsUnaFuncion();

 function unaFuncionQueDevuelveValor(){
   return 'uwu';
 }
 let valorDeFuncion = unaFuncionQueDevuelveValor();
 console.log(valorDeFuncion);

 const uFQDV = () => 'uwu';
 let vDF = uFQDV();
 console.log(vDF);

 const saludar = (nombre,edad) => console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
 saludar('Hugo',26);
 */
/*
///////////////////////////////////////////////////////////////////////////////////////////////
 //Arreglos

 const a = [1,true,'Hola',[1,2,3]];
 console.log(a);
 console.log(a.length);
 console.log(a[2]);
 console.log(a[3][2]);

 const b = Array.of('X','Y','Z',9,8,7);
 console.log(b);
 const c = Array(20).fill(false);
 console.log(c);

 const colores = ['Rojo','Verde','Azul'];
 colores.push('Blanco');
 colores.pop();
 console.log(colores);
 colores.forEach((el,index)=>{
 console.log(`<li id="${index}">${el}</li>`);
 });
 */
/*
 ///////////////////////////////////////////////////////////////////////////////////////////////
 //objetos

 const a = {
   nombre:'Hugo',//propiedad para variables dentro de un objeto
   apellido:'Palafox',
   edad:26,
   pasatiempos:['jugar','paja'],
   soltero:true,
   contacto:{
      email:'hukranya@gmail.com',
      twitter:"@apez_hugo",
      movil:3111479539
   },
   saludar(){//metodo para funciones dentro de un objeto
      console.log('holi uwu');
   },
   decirMiNombre(){
      console.log(`Me llamo ${this.nombre} ${this.apellido} sigueme en ${this.contacto.twitter}`);//esta sirve aqui para hacer refencia a una propiedad del mismo objeto
   }
 }
 
 console.log(a['nombre']);
 console.log(a.apellido);
 console.log(a.pasatiempos[0]);
 console.log(a.contacto.twitter);
 a.saludar();
 a.decirMiNombre();
 console.log(Object.keys(a));
 console.log(Object.values(a));
 console.log(a.hasOwnProperty('nombre'));
  */
/*
 ///////////////////////////////////////////////////////////////////////////////////////////////
 //operadores

//aritmeticos + - * / % ( )
 let a = 5+5;
 let modulo = 5%2; // el porciento es para calcular el residuo de una division
 console.log(a);
 console.log(modulo);

 //Relacionales

 //   > , < , >= , <= , == , === , != , !== 

 console.log(8>9);//mayor que
 console.log(8<9);//menor que
 console.log(8>=9);//mayor o igual que
 console.log(8<=9);//menor o igual que
 console.log('7'==7);//comparacion de valores
 console.log(0 == false);
 console.log('7'===7);//comparacion de datos
 console.log(0 === false);

 //incremento decremento

 let i = 1;
 i+=2;
 //operador unario
 i++;
 console.log(i);

 //logicos ! , || , &&

 console.log(!true);//negar
 console.log(('7'===7)||(7===7));//si una o mas son verdaderas regresa true
 console.log(('7'===7)&&(7===7));//solo si todas son verdaderas regresa true
 */

///////////////////////////////////////////////////////////////////////////////////////////////
//if else xdd
/*
 let edad = 2;
 if(edad >= 18){
console.log('Eres mayor de edad');
 }else{
console.log('Eres menor de edad');
 }

//if anidados

let hora = 20;
if(hora >=0 && hora<6){
console.log('Dejame dormir');
 }else if(hora >=6 && hora<=11){
console.log('buenos dias');
 }else if(hora >=12 && hora<=18){
console.log('Buenas tardes');
 }else {
console.log('Buenas Noches');
 }

 //operador ternario (ternera xdd)

 let eresMayor = (edad >=18)?'Eres Mayor de edad':'Eres Menor de edad';
 console.log(eresMayor);

 //switch case

 let dia = 9;
 switch(dia){
      case 0:
      console.log('Domingo');
      break;
      case 1:
      console.log('Lunes');
      break;
      case 2:
      console.log('Martes');
      break;
      case 3:
      console.log('Miercoles');
      break;
      case 4:
      console.log('Jueves');
      break;
      case 5:
      console.log('Viernes');
      break;
      case 6:
      console.log('Sabado');
      break;
      default:
      console.log('ese dia no existe :p');
      break;
 }
 */

///////////////////////////////////////////////////////////////////////////////////////////////
//ciclos
/*
let contador = 0;
while(contador<5){
   console.log(contador);
   contador++;
}
do{
   console.log(contador);
   contador++;
}while(contador<5);

//for
for (let i = 0; 1 < 5; i++) {
   console.log(i);
}

let numeros = [10,20,30,40,50,60,70,80,90];
for(let i = 0;1<numeros.length;i++){
console.log(numeros[i]);
}

let numeros = [10,20,30,40,50,60,70,80,90];
 const a = {
   nombre:'Hugo',//propiedad para variables dentro de un objeto
   apellido:'Palafox',
   edad:26,
   pasatiempos:['jugar','paja'],
   soltero:true,
   contacto:{
      email:'hukranya@gmail.com',
      twitter:"@apez_hugo",
      movil:3111479539
   },
   saludar(){//metodo para funciones dentro de un objeto
      console.log('holi uwu');
   },
   decirMiNombre(){
      console.log(`Me llamo ${this.nombre} ${this.apellido} sigueme en ${this.contacto.twitter}`);//esta sirve aqui para hacer refencia a una propiedad del mismo objeto
   }
 }
 for (const porpiedad in a) {
   console.log(`Key: ${porpiedad}, Value: ${a[porpiedad]} `);
 }
 for (const elemento of numeros) {
   console.log(elemento);
 }
let cadena = 'uwu owo';
for (const caracter of cadena) {
   console.log(caracter);
}
*/
/*
let cancionAEliminar= 2;
switch(cancionAEliminar){
   case 1:
   case 'Smooth Criminal':
   cancionAEliminar = 'Smooth Criminal';
   break;
   case 2:
   case 'Flower Dance':
   cancionAEliminar = 'Flower Dance';
   break;
   case 3:
   case 'Here comes Hope':
   cancionAEliminar = 'Here comes Hope';
   break; 
   case 4:
   case 'Cupid':
   cancionAEliminar = 'Cupid';
   break;
   case 5:
   case '4Blood':
   cancionAEliminar = '4Blood';
   break;  
   default:
   console.log('esa cancion no esta bro');
   break;    
}
let canciones = ['Smooth Criminal', 'Flower Dance', 'Here comes Hope', 'Cupid','4Blood'];
let eliminar = canciones.filter(canciones=>canciones!==cancionAEliminar);
console.log(eliminar);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Prototipos

//clases modelo a seguir
//objeto instancia de una clase
//    atributo: caracteristiva o propiedad de un objeto
//    metodo: acciones que un objeto puede realizar(son funciones dentro de un objeto)
/*const animal={
nombre:'Snoopy',
sonar(){
   console.log('BAU BAU');
}
}
console.log(animal);
*/

//funcion constructora
/*function Animal(nombre,genero){
   //atributos
   this.nombre = nombre;
   this.genero = genero;
   //metodos
   this.sonar = function(){
      console.log('BAU BAU');
   }
   this.saludar=function(){
      console.log(`Hola me llamo ${this.nombre}`);
   }
}*/
/*
//funcion constructora donde se asignan metodos al prototipo, no a la funcion como tal
function Animal(nombre,genero){
   this.nombre = nombre;
   this.genero = genero;
}
//metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function(){
      console.log('sonidos de animal');
   } 
Animal.prototype.saludar=function(){
      console.log(`Hola me llamo ${this.nombre}`);
   }

// herencia prototipica

function Perro(nombre,genero,tamanio){
   this.super = Animal;
   this.super(nombre,genero);
   this.tamanio = tamanio;
}
//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
//Soreescritura de metodos del prototipo padre a hijo
Perro.prototype.sonar = function(){
   console.log('BAU BAU');
}
Perro.prototype.ladrar = function(){
   console.log('Extreme Violence');
}
const snoopy = new Perro('Snoopy','Macho','Mediano'),
lolaBunny = new Animal('Lola Bunny','Hembra');
console.log(snoopy);
console.log(lolaBunny);
snoopy.saludar();
lolaBunny.saludar();
snoopy.sonar();
lolaBunny.sonar();
snoopy.ladrar();
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
//clases
/*
class Animal{
   constructor(nombre,genero){
   this.nombre = nombre;
   this.genero = genero;
}
sonar(){
      console.log('sonidos de animal');
   } 
saludar(){
      console.log(`Hola me llamo ${this.nombre}`);
   }
}
class Perro extends Animal{
   constructor(nombre,genero,tamanio){
      //super es un metodo que manda llamar al constructor de la clase padre
      super(nombre,genero);
      this.tamanio = tamanio;
      this.raza = null;
   }
   sonar(){
      console.log('BAU BAU');
   }
   ladrar(){
   console.log('Extreme Violence');
   }
   static queEres(){
      console.log('Los perros son animales mamiferos que pertenecen a la familia de los caninos');
   }
   get getRaza(){
      return this.raza;
   }
   set setRaza(raza){
      this.raza = raza;
   }
}
Perro.queEres();
const fuwawa = new Perro('Fuwawa','Hembra','Grande'),
mumei = new Animal('Mumei','Hembra');
fuwawa.saludar();
fuwawa.sonar();
fuwawa.ladrar();
console.log(mumei);
fuwawa.setRaza = 'chiwawa';//los metodos get y set js los maneja como propiedad por eso no llevan parentesis
console.log(fuwawa.getRaza);
console.log(fuwawa);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//temporizadores
/*
console.log('inicio');
setTimeout(() => {//ejecuta solo una vez
   console.log('holi retrasado');
}, 3000);
setInterval(() => {//ejecuta cada cierto tiempo las operaciones
   console.log('holi retrasado cada segungo');
}, 1000);
let temporizador = setInterval(() => {
   console.log(new Date().toLocaleTimeString());
}, 1000);
clearTimeout(temporizador);
*/

//operacion bloqueante es la que no le da control a la aplicacion hasta que termine su tarea
/*
(()=>{
console.log('Codigo sincrono');
console.log('Inicio');
const dos=()=>console.log('Dos');
const uno=()=>{
   console.log('Uno');
   dos();
   console.log('Tres');
}
uno();
console.log('Fin');
})();
console.log('*************************');
//operacion no bloqueante devuelve el control al hilo principal sin importar si acabaron o no
(()=>{
   console.log('Codigo asincrono');
console.log('Inicio');
const dos=()=>{
   setTimeout(()=>{
      console.log('Dos');
   },1000);
}
const uno=()=>{
   setTimeout(()=>{
      console.log('Uno');
   },0);
   dos();
   console.log('Tres');
}
uno();
console.log('Fin');
})();
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//callback
/*
const cuadradoCallback=(value, callback)=>{
setTimeout(() => {
   callback(value, value*value);
}, 1000);
}
cuadradoCallback(0,(value, result)=>{
   console.log('inicia callback');
   console.log(`Callback: ${value} ${result}`);
   cuadradoCallback(1,(value, result)=>{
      console.log(`Callback: ${value} ${result}`);
   cuadradoCallback(2,(value, result)=>{
      console.log(`Callback: ${value} ${result}`);
   cuadradoCallback(3,(value, result)=>{
      console.log(`Callback: ${value} ${result}`);
   cuadradoCallback(4,(value, result)=>{
      console.log(`Callback: ${value} ${result}`);
   cuadradoCallback(5,(value, result)=>{
      console.log(`Callback: ${value} ${result}`);
   });
   });
   });
   });
   });
});
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Promise
/*
const cuadradoPromise=(value)=>{
   if(typeof value!=='number'){
      return Promise.reject(`Error el valor " ${value} " ingresado no es un numero`);
   }
   return new Promise((resolve,reject)=>{
      setTimeout(() => {
         resolve({
            value,//como se llama igual al valor que sera ingresado no es necesario darle valor en el objeto
            result:value*value
         });
      }, 1000);
   });
   }
   cuadradoPromise(0)
   .then(obj=>{
      //console.log(obj);
      console.log('Inicio Promise');
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise(1);
   })
   .then(obj=>{
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise(2);
   })
   .then(obj=>{
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise(3);
   })
   .then(obj=>{
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise(4);
   })
   .then(obj=>{
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      return cuadradoPromise(5);
   })
   .then(obj=>{
      console.log(`Promise: ${obj.value}, ${obj.result}`);
      console.log('Fin Promise');
   })
   .catch(err=>console.error(err));
   */
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Async y await
/*
function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error el valor " ${value} " ingresado no es un numero`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value, //como se llama igual al valor que sera ingresado no es necesario darle valor en el objeto
        result: value * value,
      });
    }, 1000);
  });
}
async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");
    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    console.log("Fin de Async Function");
  } catch (err) {
    console.error(err);
  }
}
funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");
    let obj = await cuadradoPromise(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(8);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(9);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    obj = await cuadradoPromise(10);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
    console.log("Fin de Async Function");
  } catch (err) {
    console.error(err);
  }
};
funcionAsincronaExpresada();
*/
/*
const mayus = (str)=>{
   let newStr = '';
   newStr = str.split(' ');
   for(let i = 0; i < newStr.length; i++) {
      newStr[i]=newStr[i].charAt(0).toUpperCase()+newStr[i].slice(1);
    }
    let cadena = newStr.join(' ');
    return cadena;
   }
console.log(mayus('owo uwu awa'));
*/
/*
let cadena='uwu uwu uwu owo';
//let expresionRegular = new RegExp('uwu','ig');
//console.log(expresionRegular.test(cadena));
//console.log(expresionRegular.exec(cadena));
let expresionRegular2 = /uwu {1}/ig;
console.log(expresionRegular2.test(cadena));
console.log(expresionRegular2.exec(cadena));
*/
/*
function testinput(re, str) {
   let midstring;
   if (str.search(re) != -1) {
     midstring = " contains ";
   } else {
     midstring = " does not contain ";
   }
   console.log(str + midstring + re);
 }
testinput('a','javaaaaa'); 
*/
/*
let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());//dia del mes
console.log(fecha.getDay());//dia de la semana 0-domingo 6-sabado
console.log(fecha.getMonth());//num de mes 0-enero 11-diciembre
console.log(fecha.getFullYear());
console.log(fecha.getHours());//0-23
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());//para utc 0 
console.log(Date.now());//cuantos segundos han pasado desde el 1-1-1970
let cumple = new Date(1996,8,13);
console.log(Date.now(1996,8,13));*/