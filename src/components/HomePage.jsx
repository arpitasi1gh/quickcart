import { useMemo, useState } from 'react';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function HomePage({ products, searchTerm }) {
  const { addToCart, addToRecent, recentlyViewed, toggleWishlist, isInWishlist } = useCart();
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return [...filtered].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
  }, [products, searchTerm, sortBy]);

  return (
    <div className="home-page">
      <div className="toolbar-row">
        <label htmlFor="sort-products">Sort by:</label>
        <select
          id="sort-products"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name (A-Z)</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {searchTerm && (
        <p className="search-results">Found {filteredProducts.length} products</p>
      )}

      <ProductList
        products={filteredProducts}
        onAddToCart={addToCart}
        onViewProduct={addToRecent}
        onToggleWishlist={toggleWishlist}
        isInWishlist={isInWishlist}
      />

      {filteredProducts.length === 0 && (
        <p className="no-results">No products found</p>
      )}

      {recentlyViewed.length > 0 && (
        <section className="recently-viewed">
          <h3>Recently Viewed</h3>
          <div className="recent-grid">
            {recentlyViewed.map((product) => (
              <button
                key={product.id}
                className="recent-item"
                onClick={() => addToRecent(product)}
              >
                {product.name}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default HomePage;