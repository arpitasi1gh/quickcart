import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, isLoading } = useCart();

  if (isLoading) {
    return (
      <div className="cart-page">
        <p>Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <p>Your cart is empty</p>
          <Link to="/" className="back-home-link">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-page-content">
          <div className="cart-items-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-page-item">
                <img src={item.image} alt={item.name} />

                <div className="cart-item-main">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <p className="line-total">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="checkout-btn checkout-link">
              Checkout
            </Link>
            <Link to="/" className="continue-link">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}

export default CartPage;
