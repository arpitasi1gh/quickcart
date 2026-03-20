import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart, wishlist, theme, toggleTheme } = useCart();
  const categories = ['Electronics', 'Accessories', 'Home', 'Sports'];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <Link to="/" className="header-logo">
            <h1 className="header-title">🛒 QuickCart</h1>
          </Link>
          
          <div className="header-actions">
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <button className="cart-icon-btn" onClick={toggleCart}>
              🛒
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
            </button>
          </div>
        </div>
        
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          {categories.map(cat => (
            <Link 
              key={cat} 
              to={`/category/${cat}`} 
              className="nav-link"
            >
              {cat}
            </Link>
          ))}
          <Link to="/wishlist" className="nav-link">
            Wishlist {wishlist.length > 0 ? `(${wishlist.length})` : ''}
          </Link>
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>
        
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>
    </header>
  );
}

export default Header;