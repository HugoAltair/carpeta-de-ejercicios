const d = document;
const ls = localStorage;
export default function darkMode(btn, classDark){
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");//data atribute
    //console.log($selectors);
    let moon = "🌙";
    let sun = "☀️";
    const lightMode=()=>{
        $selectors.forEach(el=>el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light");
    }
    const darkModo=()=>{
        $selectors.forEach(el=>el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");
    }
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent===moon){
                darkModo();
            }
            else{
                lightMode();
            }
        }
    });
    d.addEventListener("DOMContentLoaded",e=>{
        if(ls.getItem("theme")===null)ls.setItem("theme","light");//añadir un valor a una valiable de tipo local storage
        if(ls.getItem("theme")==="light")lightMode();
        if(ls.getItem("theme")==="dark")darkModo();
    });
}