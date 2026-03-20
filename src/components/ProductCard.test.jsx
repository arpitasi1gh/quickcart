import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  test('renders product name', () => {
    const product = {
      id: 999,
      name: 'Test Product',
      price: 10,
      image: 'https://example.com/image.jpg',
      description: 'Test description',
      category: 'Test',
    };

    render(
      <ProductCard
        product={product}
        onAddToCart={() => {}}
      />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});
