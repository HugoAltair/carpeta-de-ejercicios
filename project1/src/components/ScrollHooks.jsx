import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const detectarScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", detectarScroll);
    return () => window.removeEventListener("scroll", detectarScroll);
  }, [scrollY]);
  //solo se actualiza una vez
  useEffect(() => console.log("Fase de Montaje"), []);
  //   useEffect(() => console.log("Fase de Actualizacion"));
  //   useEffect(() => {
  //     return () => {
  //       console.log("Fase de Desmontaje");
  //     };
  //   });
  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}
