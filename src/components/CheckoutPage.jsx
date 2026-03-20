import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

function CheckoutPage() {
  const { cart, getTotalPrice, placeOrder } = useCart();
  const navigate = useNavigate();
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    placeOrder(shippingDetails);
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Checkout</h1>
        <div className="empty-cart-page">
          <p>Your cart is empty</p>
          <Link to="/" className="back-home-link">Go back to shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Checkout</h1>
      <div className="cart-page-content">
        <form className="cart-summary" onSubmit={handleSubmit}>
          <h3>Shipping Details</h3>
          <input name="fullName" placeholder="Full Name" value={shippingDetails.fullName} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={shippingDetails.email} onChange={handleChange} required />
          <input name="address" placeholder="Address" value={shippingDetails.address} onChange={handleChange} required />
          <input name="city" placeholder="City" value={shippingDetails.city} onChange={handleChange} required />
          <input name="postalCode" placeholder="Postal Code" value={shippingDetails.postalCode} onChange={handleChange} required />
          <button className="checkout-btn" type="submit">Place Order</button>
        </form>

        <aside className="cart-summary">
          <h3>Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="summary-row">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-row total-row">
            <span>Total</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CheckoutPage;
