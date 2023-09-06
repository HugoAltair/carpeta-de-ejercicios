async function fetchData(param){
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/ditto';
    const fetchData = await fetch(baseURL + param);
    console.log(fetchData)
}
fetchData('ditto');