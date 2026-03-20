import '../styles/CartSidebar.css';
import { useCart } from '../context/CartContext';

function CartSidebar() {
    const {
        isCartOpen,
        toggleCart,
        cart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getTotalPrice,
        isLoading,
    } = useCart();

    return (
        <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>

            {/* Header */}
            <div className="cart-header">
                <h2>Your Cart</h2>
                <button onClick={toggleCart} className="close-btn">✕</button>
            </div>

            {/* Cart Items */}
            <div className="cart-items">
                {isLoading ? (
                    <p className="empty-cart">Loading cart...</p>
                ) : cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                ) : (
                    cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item-image" />

                            <div className="cart-item-details">
                                <h4 className="cart-item-name">{item.name}</h4>
                                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                            </div>

                            <div className="cart-item-quantity">
                                <button
                                    className="quantity-btn"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    −
                                </button>
                                <span className="quantity-display">{item.quantity}</span>
                                <button
                                    className="quantity-btn"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
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
                        <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <button className="clear-cart-btn" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartSidebar;