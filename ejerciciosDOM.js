import hamburgerMenu from "./hamburguesas.js";//poner el .js 
import { digitalClock,alarm } from "./CSS/reloj.js";
import { shortcuts, moveBall} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./scroll_top.js";
import darkMode from "./tema-oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTerter from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispo.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFromValidations from "./validacione_formulario.js";
import speechReader from "./narrador.js";
const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");//el gato porque son ids
    alarm("assest/LilyScarlet_Rose.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Sep 13 23 00:00:00","Feliz cumple uwu");//el id no lleva gato porque no se usa el queryselector
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=Fwc-LH8IGj8" target="blank"
    rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/Fwc-LH8IGj8?si=6l3PSqwpsbMXmBOH" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
     encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width:1024px)",
    `<a href="https://goo.gl/maps/oQr4ZRdBLnM3kHA37" target="blank"
    rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14929.288704147788!2d-103.3933895!3d20.6971379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae4e98d5453d%3A0xc4fdd3929a2ecbd1!2sCentro%20de%20Ense%C3%B1anza%20T%C3%A9cnica%20Industrial%20(Plantel%20Colomos)!5e0!3m2!1ses-419!2smx!4v1694113258900!5m2!1ses-419!2smx" 
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTerter("responsive-tester");
    userDeviceInfo("user-devive");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter",".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFromValidations();
});

d.addEventListener("keydown",e=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");//el punto porque son clases
});
darkMode(".dark-mode-btn","dark-mode");
networkStatus();
speechReader();
