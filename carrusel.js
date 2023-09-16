const d = document;
export default function slider(){
    const $nextBtn = d.querySelector(".slider-btns .next"),//boton de siguiente
        $prevBtn = d.querySelector(".slider-btns .prev"),//boton de atras
        $slides = d.querySelectorAll(".slider-slide");//todas las imagenes
    let i = 0;
    d.addEventListener("click",e=>{
        if(e.target===$prevBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;
            if(i<0){
                i=$slides.length-1;
            }
            $slides[i].classList.add("active");
        }
        if(e.target===$nextBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;
            if(i>=$slides.length){
                i=0;
            }
            $slides[i].classList.add("active");
        }
    });
}