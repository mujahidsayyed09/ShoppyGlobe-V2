import { useSelector, useDispatch } from "react-redux";
import { removeProductFromCart, updateProductQuantity } from "../redux/cartSlice";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(
      updateProductQuantity({
        productId: item._id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateProductQuantity({
          productId: item._id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeProductFromCart(item._id));
    }
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/" className="back-link">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div className="quantity-control">
                <button onClick={() => handleDecrease(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item)}>+</button>
              </div>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeProductFromCart(item._id))}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total: ₹{getTotalPrice()}</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
