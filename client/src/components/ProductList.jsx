import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import ProductItem from "./ProductItem";
import "./ProductList.css";
import Loader from "./Loader";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const { searchText, setSearchText } = useSearch();

  useEffect(() => {
    setLoading(true); // Set loading true
    fetch("http://localhost:5100/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false); // Turn off loading
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText, products]);

  return (
    <div className="product-list-container">
      <h2 className="page-title">All Products</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
      </div>

      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}
