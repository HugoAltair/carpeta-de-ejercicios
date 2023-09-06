const d = document,
    w = window;
export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener("scroll",e=>{
        //console.log(w.scrollY,d.documentElement.scrollTop);
        let scrollTop =w.scrollY||d.documentElement.scrollTop;//en caso de que tengas un hamster corriendo para encender el pc
        if(scrollTop>600){
            //$scrollBtn.classList.remove("hidden");//si esta a mas de 600px que se le quite lo oculto
            $scrollBtn.classList.remove("d-none");
        }
        else{
            //$scrollBtn.classList.add("hidden");
            $scrollBtn.classList.add("d-none");
        }
    });
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){//si lo que origino el evento fue el boton
            w.scrollTo({
                behavior:"smooth",
                top:0,
                //left:0,//este espara el eje x si eres un peppoclown
            });
        }
    });
}