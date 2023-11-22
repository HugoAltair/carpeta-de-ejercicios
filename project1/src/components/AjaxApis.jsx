import React, { Component } from "react";
function Pokemon(props) {
  return (
    <figure>
      <figcaption>{props.name}</figcaption>
      <img src={props.avatar} alt={props.name}></img>
    </figure>
  );
}
export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };
  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        let pokemons = [];
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((jsonResult) => {
              let pokemon = {
                id: jsonResult.id,
                name: jsonResult.name,
                avatar: jsonResult.sprites.front_default,
              };
              pokemons = [...pokemons, pokemon];
              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones Asincronas en Componentes de Clase</h2>
        {this.state.pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))}
      </>
    );
  }
}
