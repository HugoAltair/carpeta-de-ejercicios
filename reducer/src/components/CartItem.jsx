export const CartItem = ({ data, deleteFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
      <br />
      <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  );
};
