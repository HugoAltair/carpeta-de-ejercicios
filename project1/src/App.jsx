import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Title from "./components/title";
import Propiedades from "./components/Propiedades";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import Estado from "./components/Estado";

import "./App.css";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/Componentesestilizados";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <Title msg="Un componente funcional desde una prop"></Title>
        <hr />
        <Propiedades
          cadena="Esto es una cadena de Texto"
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "hugo", correo: "hukranya@gmail.com" }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={
            <Title msg="Soy un componente pasado como prop"></Title>
          }
        ></Propiedades>
        <hr />
        <Estado></Estado>
        <hr />
        <RenderizadoCondicional></RenderizadoCondicional>
        <hr />
        <RenderizadoElementos></RenderizadoElementos>
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos></MasSobreEventos>
        <hr />
        <Padre></Padre>
        <hr />
        <CicloVida></CicloVida>
        <hr />
        <AjaxApis />
        <hr />
        <ContadorHooks></ContadorHooks>
        <hr />
        <ScrollHooks></ScrollHooks>
        <hr />
        <RelojHooks></RelojHooks>
        <hr />
        <AjaxHooks></AjaxHooks>
        <hr />
        <HooksPersonalizados></HooksPersonalizados>
        <hr />
        <Referencias></Referencias>
        <hr />
        <Formularios></Formularios>
        <hr />
        <Estilos></Estilos>
        <hr />
        <ComponentesEstilizados></ComponentesEstilizados>
      </section>
    </>
  );
}
export default App;
