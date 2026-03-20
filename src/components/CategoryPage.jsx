import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function CategoryPage({ products, searchTerm = '' }) {
  const { category } = useParams();
  const { addToCart, addToRecent, toggleWishlist, isInWishlist } = useCart();
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = useMemo(() => {
    const scopedProducts = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );

    const searched = scopedProducts.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return [...searched].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
  }, [products, category, searchTerm, sortBy]);
  
  return (
    <div className="category-page">
      <h2 className="category-title">{category} Products</h2>
      <div className="toolbar-row">
        <label htmlFor="sort-category-products">Sort by:</label>
        <select
          id="sort-category-products"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name (A-Z)</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p>😕 No products found in this category</p>
          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <ProductList
          products={filteredProducts}
          onAddToCart={addToCart}
          onViewProduct={addToRecent}
          onToggleWishlist={toggleWishlist}
          isInWishlist={isInWishlist}
        />
      )}
    </div>
  );
}

export default CategoryPage;