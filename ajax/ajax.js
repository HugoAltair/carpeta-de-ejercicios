(()=>{//funcion anonima autojecutable
    const xhr = new XMLHttpRequest(),//instancia el objeto xml
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange",e=>{//asignacion de eventos
        if(xhr.readyState!==4)return;//el cuatro es cuando se completa la peticion, por eso si no es 4 que no haga nada
        console.log(xhr);
        if(xhr.status >=200 && xhr.status <300){//status satisfactorios
            console.log('exito');
            //console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);//para transformar el json a formato js
            console.log(json); 
            //json.forEach((el)=>{
                const $li = document.createElement("li");
                $li.innerHTML = `${json.name}--Numero: ${json.id}`;
                $fragment.appendChild($li); 
            //});
            $xhr.appendChild($fragment);
        }else{
            console.log('error');
            let message = xhr.statusText || 'Ese pokemon no existe';
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
    });
    xhr.open("GET","https://pokeapi.co/api/v2/pokemon/ditto");//abrir la peticion, metodo y recurso (end point)
    xhr.send();//enviar la peticion
})();

(()=>{
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();
    fetch("https://pokeapi.co/api/v2/pokemon/gardevoir")//puede llevar opciones
    .then(res => res.ok ? res.json() : Promise.reject(res))//.json-.text-.blop//el operador ternario es para que si la url esta mal vaya al catch
    .then(json=>{//el primer then es para transformar ya sea a json o a text, y el segundo es la logica de programacion
        console.log(json);
        const $li = document.createElement("li");
        $li.innerHTML = `${json.name}--Numero: ${json.id}`;
        $fragment.appendChild($li); 
        $fetch.appendChild($fragment);
    })
    .catch(err=>{
        console.log(err);
        let message = err.statusText || 'Ese pokemon no existe';
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(()=> console.log("Esto se ejecutara independientemente del resultado de la promesa Fetch"));
})();