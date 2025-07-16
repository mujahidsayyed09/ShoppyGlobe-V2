import Book from "./Book";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Welcome from "./Welcome";
import { useSelector } from "react-redux";

function BookList() {
  const { category } = useParams(); 

  const allBooks = useSelector((state) => state.books);
  const [searchText, setSearchText] = useState("");  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState(allBooks);

  // Update selectedCategory from route param
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }
  }, [category]);

  // Filter books on search or category change
  useEffect(() => {
    const filterBooks = allBooks.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredBooks(filterBooks);
  }, [searchText, selectedCategory, allBooks]);

  const categories = ["All", ...new Set(allBooks.map((book) => book.category))];

  return (
    <div>
      <Welcome />

      {/* Search + Filter Section */}
      <div className="search">
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", color: "#0c3a6b" }}>
          <h2>Search Books</h2>
          <input
            type="text"
            className="search-input"
            placeholder="Search by title or author..."
            onChange={(e) => setSearchText(e.target.value.trim())}
          />
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center", color: "#0c3a6b" }}>
          <label htmlFor="category"><strong>Category:</strong></label>
          <select
            id="category"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="category-select"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Book List */}
      <div className="bookList">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Book key={book.id} bookDetails={book} />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BookList;
