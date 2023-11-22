import ReactDOM from "react-dom";
import "./Modal.css";
export const ModalPortal = ({ children, isOpen, closeModal }) => {
  //esta funcion se encarga de evitar que al presionar el contenedor este se cierre
  const handleModalContainerClick = (e) => e.stopPropagation();
  return ReactDOM.createPortal(
    //si tiene la prop isOpen entonces le agrega la clase, y al hacer click en cualquier parte del article le pasa la prop para cerrar
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      {/* en este caso si hace click dentro del contenedor del modal hace llamar a una funcion */}
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
};
