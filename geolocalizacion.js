const d = document,
n = navigator;
export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0,//cada vez que tome una lectura no tome en cuenta la anterior
    };
    const success = (position) =>{
        let coords = position.coords;
        //console.log(position);
        $id.innerHTML=`
            <p>Tu posicion Actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precision: <b>${coords.accuracy} metros</b></li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;//las zetas son para el zoom del maps, dende va de 1z a 20z que es el maximo zoom
    };
    const error = (err) =>{
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`);
    };
    n.geolocation.getCurrentPosition(success,error,options);
}