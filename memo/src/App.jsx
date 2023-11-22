import { SumarRestar } from "./components/SumarRestar";
import { Contador } from "./components/contador";

function App() {
  return (
    <div>
      <h1>Memoizacion en react</h1>
      <hr />
      <h2>Teoria</h2>
      <h3>
        <a
          href="https://es.react.dev/reference/react/memo"
          target="_blank"
          rel="noreferrer"
        >
          memo
        </a>
      </h3>
      <ul>
        <li>Se encarga de memorizar un componente</li>
        <li>
          lo vuelve a memorizar al momento que sus <b>props</b> cambian
        </li>
        <li>Evita Re-renderizados</li>
        <li>
          Hay que evitarlo a medida de lo posible, pues podira ser mas costoza
          la tarea de memorizacion que el re-renderizado del componente
        </li>
        <li>
          Usalo cuando:
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista</li>
            <li>Lamamos datos de API's</li>
            <li>Un componente se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ul>
        </li>
      </ul>
      <hr />
      <h3>
        <a
          href="https://es.react.dev/reference/react/useCallback"
          target="_blank"
          rel="noreferrer"
        >
          useCallBack
        </a>
      </h3>
      <ul>
        <li>Memoriza una funcion, para no volverla a definir en cada render</li>
        <li>
          Usalo siempre que se pase una funcion como <b>prop</b> a un componente
          memorizado
        </li>
        <li>
          Usalo siempre que se pase una funcion como parametro de un efecto
        </li>
      </ul>
      <hr />
      <h3>
        <a
          href="https://es.react.dev/reference/react/useMemo"
          target="_blank"
          rel="noreferrer"
        >
          useMemo
        </a>
      </h3>
      <ul>
        <li>
          Memoriza un valor calculado, es decir, el resultado de una funcion
        </li>
        <li>Genera propiedades computadas</li>
        <li>Usalo en procesos pesados</li>
      </ul>
      <hr />
      <Contador />
      <hr />
      <SumarRestar />
    </div>
  );
}

export default App;
