import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul className="nav-menu">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/books/All" className="nav-link">Browse Books</Link></li>
        <li><Link to="/add-book" className="nav-link">Add Books</Link></li>

      </ul>
    </div>
  );
}

export default Header;
