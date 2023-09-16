const d = document;
export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb=(entries)=>{
        //console.log("entries",entries);
        entries.forEach(entry=>{//para cada una de las entradas
            //console.log("entry",entry);
            const id = entry.target.getAttribute("id");
            //console.log(id);
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        });
    }
    const observer = new IntersectionObserver(cb,{
        //root
        //rootMargin:"-250px",//en negativo para que no se solapen los margenes
        threshold: [0.5,0.75],//hasta que se visualize un 50% a 75% del contenido
    });
    $sections.forEach(el=>observer.observe(el));//observar las sections
}