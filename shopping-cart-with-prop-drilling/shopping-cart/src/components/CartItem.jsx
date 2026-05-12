function CartItem({
  item,
  increase,
  decrease,
  removeItem,
}) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>Quantity : {item.quantity}</p>
      <button
        onClick={() => increase(item.id)}
      >
        +
      </button>
      <button
        onClick={() => decrease(item.id)}
      >
        -
      </button>
      <button
        onClick={() => removeItem(item.id)}
      >
        Remove
      </button>
    </div>
  );
}
export default CartItem;