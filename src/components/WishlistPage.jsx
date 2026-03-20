import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

function WishlistPage() {
  const { wishlist, addToCart, removeFromWishlist } = useCart();

  return (
    <div className="cart-page">
      <h1>Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="empty-cart-page">
          <p>Your wishlist is empty</p>
          <Link to="/" className="back-home-link">Browse Products</Link>
        </div>
      ) : (
        <div className="cart-items-list">
          {wishlist.map((item) => (
            <div key={item.id} className="cart-page-item">
              <img src={item.image} alt={item.name} />

              <div className="cart-item-main">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>

              <div className="cart-item-actions">
                <button className="checkout-btn" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
