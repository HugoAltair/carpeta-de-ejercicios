//////////////////////////////////////////////////////////////////////////////////////////////////////
//symbol
/*
const NOMBRE = Symbol('nombre');
const SALUDAR = Symbol('saludar');//se usan generalmente para tener elementos privados en un objeto con referencias unicas
const persona={
    [NOMBRE]:'Hugo',
    edad:26
};
console.log(persona);
persona.NOMBRE='awa de uwu';
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);
persona[SALUDAR]=()=>{
    console.log('Holi BAU BAU');
}
console.log(persona);
persona[SALUDAR]();
for (const propiedad in persona) {
   console.log(propiedad);
   console.log(persona[propiedad]);
}
console.log(Object.getOwnPropertySymbols(persona));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Set---------se parecen a los arreglod
/*
const set = new Set([1,2,3,3,4,5,true,false,false,{},{},'holi','HOLI']);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});
set2.add('holi');
set2.add('xdd');
console.log(set2);
console.log(set2.size);
console.log('Recoriendo set');
for (const item of set) {
    //console.log(item);
}
console.log('Recoriendo set2');
set2.forEach(item => {
        //console.log(item);
});
let setArreglo = Array.from(set);
console.log(setArreglo);
console.log(setArreglo[0]);

set.delete('HOLI');
console.log(set);
console.log(set.has('holi'));
set2.clear();
console.log(set2);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Map-------se parecen a los objetos
/*
const mapa = new Map();
mapa.set('nombre','Hugo');
mapa.set('apellido','Palafox');
mapa.set('edad',26);
console.log(mapa);
console.log(mapa.size);
console.log(mapa.has('correo'));
console.log(mapa.has('nombre'));
console.log(mapa.get('nombre'));
mapa.set('nombre','Hugo Palafox');
console.log(mapa.get('nombre'));
mapa.delete('apellido');

mapa.set(19,'diecinueve');
mapa.set(false,'falso');
mapa.set({},{});
console.log(mapa);
for (const [key,value] of mapa) {
    console.log(`LLave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
    ['nombre','Fuwawa'],
    ['edad','???'],
    ['animal','Perro'],
    [null,'nulo']
]);
console.log(mapa2);

const llaveMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];
console.log(llaveMapa2);
console.log(valoresMapa2);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//WeakSet y WeatMap
/*
const ws = new WeakSet();//si uno de sus propiedades se hace 0, el wS borrara todos sus propiedades
let valor1=({'valor1':1});
let valor2=({'valor2':2});
let valor3=({'valor3':3});
ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
console.log(ws);
console.log(ws.has(valor1));
console.log(ws.has(valor2));
console.log(ws.has(valor3));
ws.delete(valor2);
console.log(ws);
ws.add(valor2);
console.log(ws);

setInterval(() => {
    console.log(ws);
}, 1000);
setTimeout(()=>{
    valor1=null;
    valor2=null;
    valor3=null;
    },5000);
*/
/*
const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};
wm.set(llave1,1);
wm.set(llave2,2);
console.log(wm);
console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2);
console.log(wm);

wm.set(llave2,2);
wm.set(llave3,3);
console.log(wm);

setInterval(() => {
    console.log(wm);
}, 1000);
setTimeout(()=>{
    llave1=null;
    llave2=null;
    llave3=null;
    },5000);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Iterables e iterators
/*
// const iterable = [1,2,3,4,5];
// const iterable = new Set([1,2,3,3,4,5,6,6]);
const iterable = new Map([['Nombre','Hugo'],['edad',26]]);
//Acceder al iterador del iterable
const iterator = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
let next = iterator.next();
while(!next.done){
    console.log(next.value);
    next = iterator.next();
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Generators
/*
function* iterable(){//el * al lado de funcion indica que es un generador
    yield 'holi';
    console.log('holi console');
    yield 'holi x2';
    console.log('mas instrucciones YAAY');
    yield 'holi x3';
    yield 'holi x4';
}
let iterador = iterable();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
for (let y of iterador){
    console.log(y);
}
const arr = [...iterable()];
console.log(arr);

const cuadrado = valor =>{
    setTimeout(() => {
        console.log({
            valor, 
            resultado:valor*valor
        });
    }, Math.random()*1000);
}
function* generador(){
    console.log('Inicia Generator');
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log('Termina Generator');
}
let gen = generador();
for (let y of gen){
    console.log(y);
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Proxi
/*
const persona = {
    nombre:'',
    apellido:'',
    edad:0
}
const manejador = {
    set(obj,prop,valor){
        if(Object.keys(obj).indexOf(prop)===-1){//si la propiedad no existe en el objeto del que se deriva el proxi
           return console.error(`La propiedad ${prop} no existe en el objeto persona`);
        }
        if(
            (prop==='nombre'||prop==='apellido')&&
            !(/^[A-Za-zÑñáéíóúüÁÉÍÚÜ\s]+$/g.test(valor))
        ){
            return console.error(`La propiedad ${prop} solo acepta letras y espacios en blanco`);
        }
        if((prop==='edad')&&!(/^[0-9]+$/g.test(valor)) && valor<=0){
            return console.error(`La propiedad ${prop} solo acepta numeros positivos`);
        }
        obj[prop]=valor;//para que las propiedades del proxi puedan asignarsele un valor
    }
}
const hugo = new Proxy(persona,manejador);
hugo.nombre='Hugo';
hugo.apellido='Palafox';
hugo.edad=26;
hugo.twitter='@apez_hugo';
console.log(hugo);
console.log(persona);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Propiedaddes dinamicas de los objetos
/*
let aleatorio=Math.round(Math.random()*100+5);
const objUsuarios ={
    propiedad:'valor',
    [`id_${aleatorio}`]:'Valor aleatorio'
}
const usuarios = ['Hugo','Beto','Fergro','Bijou','Fauna'];
console.log(objUsuarios);
usuarios.forEach((usuario,index)=>objUsuarios[`id_${index}`]=usuario);
console.log(objUsuarios);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//this
/*
console.log(this);
console.log(window);
console.log(this===window);

this.nombre='contexto global';
console.log(this.nombre);

function imprimir(){
    console.log(this.nombre);
}
imprimir();
const obj = {
    nombre:'contexto objeto',
    imprimir:function(){
        console.log(this.nombre);
    }
}
obj.imprimir();
const obj2 = {
    nombre:'contexto objeto 2',
    imprimir
}
obj2.imprimir();
const obj3 = {
    nombre:'contexto objeto 3',
    imprimir:()=>{
        console.log(this.nombre);
    }
}
obj3.imprimir();

function Persona(nombre){
    this.nombre=nombre;
    return console.log(this.nombre);
}
let uwu = new Persona('Hugo');
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//call apply bind
/*
console.log(this);
this.lugar = 'contexto global';
function saludar(saludo,aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}
saludar('Hola','Hugo');
const obj = {
    lugar:'contexto objeto'
}
saludar.call(obj,'holi','uwu');
saludar.call(null,'holi','uwu');
saludar.call(this,'holi','uwu');
saludar.apply(obj,['adios','umu']);
saludar.apply(null,['adios','umu']);
saludar.apply(this,['adios','umu']);

const persona={
    nombre:'Hugo',
    saludar:function(){
        console.log(`Hola ${this.nombre}`)
    }
}
persona.saludar();
const otraPersona={
    saludar:persona.saludar.bind(persona)
}
otraPersona.saludar();
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//JSON
/*
const json={
    cadena:'uwu',
    numero:26,
    booleano:true,
    arreglo:['monster hunter','kekw'],
    objeto:{
        twitter:'@apez_hugo',
        email:'hukranya@gmail.com'
    },
    nullo:null
}
console.log(json);
console.log(JSON);
console.log(JSON.parse("{}"));//parse transforma el json para que js lo detecte
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.stringify({}));//transdorma un elemento de js en cadena de texto con notacion JSON
console.log(JSON.stringify({x:2,y:3})); 
console.log(JSON.stringify(json));
*/
$divEventos.forEach(div=>{
    //Fase de burbuja(elemento mas interno al externo)
div.addEventListener("click",flujoeventos);
// div.addEventListener("click",flujoeventos,{
//     capture:false,
// });
//div.addEventListener("click",flujoeventos,false);
     //Fase de captura(elemento externo al mas interno)
//div.addEventListener("click",flujoeventos,true);
// div.addEventListener("click",flujoeventos,{
//      capture:false,
//      once:true,//solo se ejecuta una sola vez
//  });
});
$linkEventos.addEventListener("click",(e)=>{
alert("This link contains the most flufy content");
e.preventDefault();//evita que se ejecute la operacion por defecto, en este caso no se abre el enlace
e.stopPropagation();//evita que se propague diferentes acciones que se encuentran dentro de un seccion, div etc
});
