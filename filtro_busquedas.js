const d = document;
export default function searchFilters(input, selector){
    d.addEventListener("keyup",e=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            //console.log(e.target.value);
            if(e.key==="Escape") e.target.value = "";//si se presiona esc borra el contenido
            d.querySelectorAll(selector).forEach(el =>
                el.textContent.toLowerCase().includes(e.target.value)
                ?el.classList.remove("filter")
                :el.classList.add("filter")//operador ternera, si no encuentra lo escrito le aplica el filtro, si lo encuentra se lo quita
            );
        }
    });
}