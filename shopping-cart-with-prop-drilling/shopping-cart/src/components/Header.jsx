import { Link } from "react-router-dom";
function Header({ totalItems }) {
  return (
    <div className="header">
      <h2>Shopping Cart</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({totalItems})
        </Link>
      </div>
    </div>
  );
}
export default Header;