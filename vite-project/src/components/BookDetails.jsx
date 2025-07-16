import { useParams, Link } from "react-router-dom";
import { Books } from "../utils/mockData";
import "./style.css";

function BookDetails() {
  const { id } = useParams();
  const book = Books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="bookDetails">
      <img
        src={book.coverImage}
        alt={book.title}
        style={{ width: "220px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
      />
      <h1 style={{ fontSize: "2rem", color: "#0c3a6b" }}>{book.title}</h1>
      <p style={{ fontSize: "1.2rem", color: "#0c3a6b" }}><strong>Author:</strong> {book.author}</p>
      <p style={{ fontSize: "1rem", color: "#0c3a6b", maxWidth: "600px" }}>
        <strong>Description:</strong> {book.description}
      </p>
      <p style={{ fontSize: "1.1rem", color: "#0c3a6b" }}><strong>Rating:</strong> ⭐ {book.rating}</p>

      <Link to="/" className="back-button">
        ← Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;
