import React, { useState } from "react";
import { SelectList } from "./SelectList";

export const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  const token = "70afa25f-3f13-4a0c-8c8b-df67f641cb7c";
  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Mexico</h3>
      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${token}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      <SelectList
        title="municipios"
        url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${token}`}
        handleChange={(e) => {
          setTown(e.target.value);
        }}
      />
      <SelectList
        title="colonia"
        url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${token}`}
        handleChange={(e) => {
          setSuburb(e.target.value);
        }}
      />
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};
