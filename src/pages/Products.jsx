import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = [
  { id: 'all', name: 'همه' },
  { id: 'men', name: 'مردانه' },
  { id: 'women', name: 'زنانه' },
  { id: 'kids', name: 'کودکان' },
  { id: 'bags', name: 'کیف' },
  { id: 'accessories', name: 'اکسسوری' },
];

function Products() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get('category') || 'all';
  const searchParam = params.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchText, setSearchText] = useState(searchParam);

  useEffect(() => {
    setActiveCategory(categoryParam);
    setSearchText(searchParam);
  }, [location.search]);

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = searchText === '' || p.name.includes(searchText) || p.description.includes(searchText);
    return matchCategory && matchSearch;
  });

  return (
    <div className="container mx-auto px-4 py-14" dir="rtl">
      <h1 className="text-3xl font-black text-center text-raha-pink mb-8">
        همه محصولات
      </h1>

      {/* سرچ */}
      {searchText && (
        <p className="text-center text-gray-500 mb-6">
          نتایج جستجو برای: <span className="text-raha-pink font-bold">«{searchText}»</span>
        </p>
      )}

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
          محصولی یافت نشد
        </p>
      )}
    </div>
  );
}

export default Products;