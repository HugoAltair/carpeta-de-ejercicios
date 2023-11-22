import React, { useState, useEffect } from "react";
function Pokemon({ avatar, name }) {
  return (
    <figure>
      <figcaption>{name}</figcaption>
      <img src={avatar} alt={name}></img>
    </figure>
  );
}
export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          jsonResult = await res.json();
        let pokemon = {
          id: jsonResult.id,
          name: jsonResult.name,
          avatar: jsonResult.sprites.front_default,
        };
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);
  return (
    <>
      <h2>Peticiones Asincronas en Hooks</h2>
      {pokemons.map((el) => (
        <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
      ))}
    </>
  );
}
//   useEffect(() => {
//     let url = "https://pokeapi.co/api/v2/pokemon/";
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
//         json.results.forEach((el) => {
//           fetch(el.url)
//             .then((res) => res.json())
//             .then((jsonResult) => {
//               let pokemon = {
//                 id: jsonResult.id,
//                 name: jsonResult.name,
//                 avatar: jsonResult.sprites.front_default,
//               };
//               setPokemons((pokemons) => [...pokemons, pokemon]);
//             });
//         });
//       });
//   }, []);
