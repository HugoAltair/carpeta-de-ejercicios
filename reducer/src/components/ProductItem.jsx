export const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;
  return (
    <div className="product-item">
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};
