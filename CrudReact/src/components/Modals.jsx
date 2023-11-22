import { useModal } from "../hooks/useModal";
import { ContactForm } from "./ContactForm";
import { Modal } from "./Modal";
import { ModalPortal } from "./ModalPortal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      {/* al presionar se activa la prop de abrir la ventala */}
      <button onClick={openModal1}>Modal 1</button>
      {/* tiene propiedades para abrir y cerrar el primer modal */}
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="src\assets\monika.png" alt="Monika" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro modal</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          provident sapiente rem dolor, quaerat aspernatur quae consequatur.
          Voluptatibus consectetur rerum saepe soluta omnis maxime obcaecati
          quae molestias, dolor fuga assumenda?
        </p>
        <img src="src\assets\Captura de pantalla (31).png" alt="aniss" />
      </Modal>
      <button onClick={openModal3}>Modal 3</button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <ContactForm />
      </Modal>
      <button onClick={openModalPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM
          diferente a donde carga nuestra app de react gracias a los portales
        </p>
        <img src="src\assets\Captura de pantalla (123).png" alt="aniss" />
      </ModalPortal>
    </div>
  );
};
/*okay entonces este es el funcionamiento: al hacer click en el boton de cualquier
 modal, se activa la propiedad 'openModal', la cual setea el valor de isOpen a true,
 lo cual hace que se le agregue la clase de is-open al componente, lo cual
 a traves de css hace posible que aparezca el contenedor en pantalla, y al presionar 
 el boton de x o cualquier parte del dom que no sea el contenedor le enviara la 
 propiedad de 'closeModal', la cual setea el valor de isOpen a false, lo cual remueve
 la clase de is-open del componente, lo cual en css oculta el contenedor.
 En cuanto al contenedor se hace a traves de la prop children, la cual permite crear
 componentes modificados de un componente padre, permitiendo el crear diferentes 
 instancias de un componente, en este ejemplo tenemos 3 veces el mismo componente
 los cuales podemos modificarlos con diferentes propiedades, como en este caso el 
 componente padre en un contenedor vacio con un boton de cierre, y en base a eso se
 pueden creear "diferentes" componentes a partir de otro.

*/
