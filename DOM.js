/*
let texto = 'im not a chiwawa, im fuwawa, im not fuwawa im mococo'
const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); 
*/
/*
console.log('****************elementos del documento*******************');
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(()=>{
    console.log(document.getSelection().toString());
},3000);
document.write("<h2>Holi desde el DOM");
*/
/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.querySelector("#menu"));
//console.log(document.getElementById("menu"));//mas rapido que el arriba
console.log(document.querySelector("a"));//regresa el primer elemento que encuentre del tipo que se encuantra en los parentesis
console.log(document.querySelectorAll("a"));//lo de arriba pero con todos
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el)=>console.log(el));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));//solo muestra las li del menu
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//atributos y data attributes
/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector('.link-dom').href);//muestra toda la url incluyendo el live server
console.log(document.querySelector('.link-dom').getAttribute('href'));//solo muestra el nombre del enlace

document.documentElement.lang = 'es';
console.log(document.documentElement.lang);
document.documentElement.setAttribute('lang','es-MX');
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector('.link-dom');//el simbolo de dolar sirve para diferenciar las variables de html de las de js
$linkDOM.setAttribute('target','blank');//al hacer clic que habra en otra pestaña
$linkDOM.setAttribute('rel','noopener');//evita la dependencia de la ventana abierta y la ventana origen
$linkDOM.setAttribute('href','https://www.youtube.com/@FUWAMOCOch');//cambiar al enlace al que accede
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute('rel');
console.log($linkDOM.hasAttribute("rel"));
//Data-Attributes
console.log($linkDOM.getAttribute('data-description'));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute('data-description','Modelo de Objeto del Documento');//cambiar el valor de un data
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description='FuwaMoco my beloved';
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute('data-id');
console.log($linkDOM.hasAttribute("data-id"));
*/
/*
const $linkDOM = document.querySelector('.link-dom');
console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));//lista de propiedades computadas d CSS un chingo
console.log(getComputedStyle($linkDOM).getPropertyValue('color'));

$linkDOM.style.setProperty('text-decoration','none');//borrar el subrayado de un enlace
$linkDOM.style.setProperty('display','block');//para que se muestre a todo lo ancho
$linkDOM.style.width='50%';
$linkDOM.style.textAlign='center';
$linkDOM.style.marginLeft = 'auto';//margenes
$linkDOM.style.marginRight= 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '.5rem';
console.log($linkDOM.getAttribute('style'));

//variables CSS-Custom Properties CSS

const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varAquaColor = getComputedStyle($html).getPropertyValue("--aqua-color");
console.log(varDarkColor,varAquaColor);
$body.style.backgroundColor = varDarkColor;
$body.style.color = varAquaColor;
$html.style.setProperty('--dark-color','#000');
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty('background-color',varDarkColor);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//clases css
/*
const $card = document.querySelector('.card');
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains('rotate-45'));
$card.classList.add('rotate-45');//agregar clases
console.log($card.classList.contains('rotate-45'));
console.log($card.className);
console.log($card.classList);
$card.classList.remove('rotate-45');//eliminar clases
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');//agregar la clase si no la tiene, si la tiene la remueve
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
$card.classList.replace('rotate-45','rotate-135');
$card.classList.add('opacity-80','sepia');
$card.classList.remove('opacity-80','sepia');
$card.classList.toggle('opacity-80','sepia');
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//texto y HTML
/*
const $whatIsDOM = document.getElementById('que-es');
let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM-Document Object Model</i></b>)es una API para
    documentos HTML y XML.
    </p>
    <p>
    Este provee una representacion estructurada del documento, permitiendo modificar su contenido y 
    presentacion visual mediante codigo JS.
    </p>
    <p>
    <mark>El DOM no es parte de la espicificacion de JavaScript, es una API para los navegadores
    </mark>
    </p>
`;

//$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;//usado cuando quieres insertar solo texto
$whatIsDOM.innerHTML = text;//usado cuando quieres insertar codigo HTML
$whatIsDOM.outerHTML = text;//remplaza el contenido del DOM por el seleccionado
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//DOM Traversing
/*
const $cards = document.querySelector('.cards');
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
//console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
//console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest('div'));
console.log($cards.closest('body'));
console.log($cards.children[3].closest('section'));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Elementos y fragmentos
/*
const $figure = document.createElement("figure"),//creando una nueva figura
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");

    $img.setAttribute("src","https://placeimg.com/200/200/animals");
    $img.setAttribute("alt","Animals");
    $figure.classList.add("card");
    $figcaption.appendChild($figcaptionText);
    $figure.appendChild($img);
    $figure.appendChild($figcaption);
    $cards.appendChild($figure);

const $figure2 = document.createElement("figure");//creando otra figura pero no genera un nodo
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
            <figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ['Primavera','Verano','Otoño','Invierno'],//lista automatica
    $ul = document.createElement("ul");
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);
estaciones.forEach((el)=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const continentes = ['Africa','America','Asia','Europa','Oceania'];//creando otra lists pero no genera un nodo
$ul2 = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML= '';
continentes.forEach((el)=>($ul2.innerHTML +=`<li>${el}</li>`));

//fragmentos YAAY

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];
$ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();
meses.forEach(el=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});
document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Templates HTML
/*
const $card = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title:"Tecnologia",
            img:"https://placeimg.com/200/200/tech" 
        },
        {
            title:"Animales",
            img:"https://placeimg.com/200/200/animals" 
        },
        {
            title:"Arquitectura",
            img:"https://placeimg.com/200/200/arch" 
        },
        {
            title:"Gente",
            img:"https://placeimg.com/200/200/people" 
        },
        {
            title:"Naturaleza",
            img:"https://placeimg.com/200/200/nature"
        }
    ];
cardContent.forEach(el=>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent=el.title;
    let $clone  = document.importNode($template,true);
    $fragment.appendChild($clone);
});
$card.appendChild($fragment);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Modificando elementos

//A la antigua
/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

    $newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
    `;
    $newCard.classList.add("card");
    //$cards.replaceChild($newCard,$cards.children[2]);//remplaza la tarjeta
    //$cards.removeChild($cards.lastElementChild);//elimina la ultima tarjeta
    //$cards.insertBefore($newCard,$cards.firstElementChild);//crea la tarjeta al principio
document.body.appendChild($cloneCards);
*/

//la manera chiplocuda

/*
.insertAdjacent...
.insertAdjacentElement(position, el)
.insertAdjacentHTML(position, html)
.insertAdjacentText(position, text)

Posiciones:
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/
/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

 let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
    `;
$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
//$cards.insertAdjacentElement("afterbegin",$newCard);

$cards.prepend($newCard);//agrega la tarjeta como primer hijo
$cards.before($newCard);//agrega la tarjeta como hermano anterior
$cards.append($newCard);//agrega la tarjeta como ultimo hijo
$cards.after($newCard);//agrega la tarjeta como hermano siguiente
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Manejadores de eventos
/*
function holaMundo(){
    alert('Hola Mundo');
    console.log(event);
}
const saludar = (nombre = 'Desconocid@') => {
    alert(`Hola ${nombre}`);
    console.log(event);
}
const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;//no lleva parentesis porque si no el navegador la ejecuta de inmediato
$eventoSemantico.onclick =(e)=>{
    alert('Hola Mundo Manejador de Eventos Semantico');//solo ejecutara esto y no la funcion original-solo puede ejecutar una funcion por evento
    console.log(e);
};
$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
    alert('Hola Mundo Manejador de Eventos Multiple');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Eventos con parametros y remover eventos
/*
const removerDobleClick = (e) =>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoMultiple.addEventListener("click",()=>{
    saludar();
    saludar('Hugo');
});
$eventoRemover.addEventListener("dblclick",removerDobleClick);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Delegacion de eventos
/*
const $divEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a");

function flujoeventos(e){
    console.log(`Hola desde ${this}, el click lo origino ${e.target.className}`);
}
document.addEventListener("click",(e)=>{
    console.log("click",e.target);
    if(e.target.matches(".eventos-flujo div")){
        flujoeventos(e);
    }
    if(e.target.matches(".eventos-flujo a")){
        alert("This link contains the most flufy content");
        e.preventDefault();
    }
});
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
//BOM
/*
window.addEventListener("resize",(e)=>{
console.clear();
console.log('***evento resize***');
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.outerWidth);
console.log(e);
});
window.addEventListener("scroll",e=>{
    console.clear();
    console.log('***evento scroll***');
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});
window.addEventListener("load",e=>{
    console.log('***evento load***');
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});
document.addEventListener("DOMContentLoaded",e=>{//mas rapido que el de arriba
    console.log('***evento DOMContentLoad***');
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});
*/
//window.alert('Alerta");
//window.confirm('confirmacion');
//window.prompt('Aviso');//igual que la confirmacion pero aparece una ventana en la que puedes escribir
//alert('alerta');//no es necesario el window
/*
const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");
let ventana;
$btnAbrir.addEventListener("click",e=>{
    ventana = window.open("https://www.youtube.com/@FUWAMOCOch");
});
$btnCerrar.addEventListener("click",e=>{
    //window.close();//cierra la ventana en la que estas xdd
    ventana.close();
});
$btnImprimir.addEventListener("click",e=>{
    window.print();
});
*/
/*
console.log('***Objeto URL(location)***');
console.log(location);
console.log(location.origin);//gewnera la ruta url 
console.log(location.protocol);//protocolo de internet
console.log(location.host);//servidor
console.log(location.hostname);
console.log(location.port);//puerto
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);
*/
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);