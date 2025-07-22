import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; 

function Header() {
  const { isLoggedIn, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();     //  Update context and remove user from storage
    navigate("/");
  };

  return (
    <header className="header">
      <nav className="nav-menu">
        <div className="left-section">
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/cart" className="nav-link">Cart</Link></li>
          </ul>
        </div>

        <div className="center-section">
          <h1 className="brand-name">🛍️ ShoppyGlobe</h1>
        </div>

        <div className="right-section">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="nav-link logout-btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="nav-link login-link">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
