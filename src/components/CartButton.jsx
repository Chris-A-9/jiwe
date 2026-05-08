import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Link to="/cart" className="btn btn-dark position-relative">
      🛒 Cart

      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartButton;