import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

function ProductList({ products, onAddToCart, onViewProduct, onToggleWishlist, isInWishlist }) {
  return (
    <div className="product-list">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={onAddToCart}
            onViewProduct={onViewProduct}
            onToggleWishlist={onToggleWishlist}
            isWishlisted={isInWishlist ? isInWishlist(product.id) : false}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;