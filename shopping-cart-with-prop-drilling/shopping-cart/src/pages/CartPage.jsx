import CartItem from "../components/CartItem";
function CartPage({
  cart,
  increase,
  decrease,
  removeItem,
}) {
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice =
      totalPrice + item.price * item.quantity;
  });
  return (
    <div className="cart">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              increase={increase}
              decrease={decrease}
              removeItem={removeItem}
            />
          );
        })
      )}
      <h2>Total :  {totalPrice}</h2>
    </div>
  );
}
export default CartPage;