import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = [
  { id: 'all', name: 'همه' },
  { id: 'men', name: 'مردانه' },
  { id: 'women', name: 'زنانه' },
  { id: 'kids', name: 'کودکان' },
];

function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="text-2xl font-bold text-center text-raha-pink mb-8">
        همه محصولات
      </h1>

      {/* فیلتر دسته‌بندی */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full text-sm transition-colors ${
              activeCategory === cat.id
                ? 'bg-raha-pink text-white'
                : 'bg-white text-gray-700 hover:bg-raha-light'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* محصولات */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-10">
          محصولی در این دسته‌بندی یافت نشد
        </p>
      )}
    </div>
  );
}

export default Products;