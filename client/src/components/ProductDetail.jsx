import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cartSlice";
import "./ProductDetail.css";
import Loader from "./Loader";
import { useUser } from "../context/UserContext"; 

const BASE_URL = "https://shoppyglobe-v2.onrender.com";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoggedIn } = useUser(); // login status from context

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setError("Product not found"));
  }, [id]);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("Please login to add products to your cart.");
      return;
    }
    dispatch(addProductToCart(product));
  };

  if (error) return <h2 className="error">{error}</h2>;
  if (!product) return <Loader />;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-brand">Brand: {product.brand}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-price">₹{product.price}</p>
        <p className="product-desc">{product.description}</p>
        <button onClick={handleAddToCart} className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
