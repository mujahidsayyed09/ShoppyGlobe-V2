import "./ProductItem.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cartSlice";
import { useUser } from "../context/UserContext"; 

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useUser(); // use context

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("Please log in to add items to cart.");
      navigate("/login");
      return;
    }

    dispatch(addProductToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-stock">Stock: {product.stockQuantity}</p>
        <p className="product-price">${product.price}</p>
        <div className="product-buttons">
          <Link to={`/product/${product._id}`} className="product-link">
            View Details
          </Link>
          <button onClick={handleAddToCart} className="add-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
