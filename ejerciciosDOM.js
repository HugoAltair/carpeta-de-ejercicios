import hamburgerMenu from "./hamburguesas.js";//poner el .js 
import { digitalClock,alarm } from "./CSS/reloj.js";
import { shortcuts, moveBall} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./scroll_top.js";
const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");//el gato porque son ids
    alarm("assest/LilyScarlet_Rose.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Sep 13 23 00:00:00","Feliz cumple uwu");//el id no lleva gato porque no se usa el queryselector
    scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown",e=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");//el punto porque son clases
});

