const d = document,
w = window,
n = navigator;
export default function networkStatus(){
    const isOnline = () =>{
        const $div = d.createElement("div");//crear un div
        if(n.onLine){//si hay conexion de internet
            $div.textContent = "Conexion reestablecida"
            $div.classList.add("online");
            $div.classList.remove("offline");
        }else{
            $div.textContent = "Conexion perdida"
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin",$div);//para que sea el primer chamaco
        setTimeout(()=> d.body.removeChild($div),2000);//que solo aparezca 2 seg.
    }
    w.addEventListener("online",e=> isOnline());
    w.addEventListener("offline",e=> isOnline());
}