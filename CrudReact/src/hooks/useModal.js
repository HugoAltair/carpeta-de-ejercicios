import { useState } from "react";
export const useModal = (initialValue = false) => {
  //se le indica que no este abierto desde un inicio
  const [isOpen, setIsOpen] = useState(initialValue);
  //al usar la funcion de openMdal este se volvera true, mostrando el contenido
  const openModal = () => setIsOpen(true);
  //al usar la funcion de closeMdal este se volvera false, ocultando el contenido
  const closeModal = () => setIsOpen(false);
  //regresa el estado del modal, la funcion para abrirlo, y la funcion para cerrarlo
  return [isOpen, openModal, closeModal];
};
