import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({
  product,
  onAddToCart,
  onViewProduct,
  onToggleWishlist,
  isWishlisted,
}) {
  const handleView = () => {
    if (onViewProduct) {
      onViewProduct(product);
    }
  };

  return (
    <div className="product-card" onClick={handleView}>
      <div className="product-image-container">
        <button
          className="wishlist-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleWishlist) {
              onToggleWishlist(product);
            }
          }}
          aria-label="Toggle wishlist"
        >
          {isWishlisted ? '♥' : '♡'}
        </button>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <span className="product-category">{product.category}</span>
        </div>
        
        <button 
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
            handleView();
          }}
        >
          Add to Cart
        </button>
       
      </div>
    </div>
  );
}

export default ProductCard;