import React from 'react';
import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>

            {/* Header */}
            <div className="cart-header">
                <h2>Your Cart</h2>
                <button onClick={onClose} className="close-btn">✕</button>
            </div>

            {/* Cart Items */}
            <div className="cart-items">
                {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                ) : (
                    cart.map(item => (
                        <div className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />

                            <div className="cart-item-details">
                                <h4 className="cart-item-name">{item.name}</h4>
                                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                            </div>

                            <div className="cart-item-quantity">
                                <button
                                    className="quantity-btn"
                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                >
                                    −
                                </button>
                                <span className="quantity-display">{item.quantity}</span>
                                <button
                                    className="quantity-btn"
                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => onRemoveItem(item.id)}
                                aria-label="Remove item"
                            >
                                ✕
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Footer with total and clear button */}
            {cart.length > 0 && (
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    <button className="clear-cart-btn" onClick={onClearCart}>
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartSidebar;