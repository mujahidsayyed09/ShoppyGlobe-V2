import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBookPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    coverImage: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    for (const field in formData) {
      if (!formData[field]) newErrors[field] = "This field is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBook = {
      id: books.length + 1,
      ...formData,
    };

    dispatch(addBook(newBook));
    navigate("/books/All");
  };

  return (
    <div className="bookDetails">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        {["title", "author", "description", "category", "coverImage", "rating"].map((field) => (
          <div key={field}>
            <input
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              className="search-input"
            />
            {errors[field] && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors[field]}</p>}
          </div>
        ))}
        <button type="submit" className="viewDetails-btn">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookPage;
