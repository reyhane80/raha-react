import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { totalItems } = useCart();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${search.trim()}`);
      setSearch('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-raha-pink text-white text-center text-sm py-2 font-medium tracking-wide">
        آماده‌سازی و تحویل سفارشات ۳ تا ۱۲ روز کاری می‌باشد
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-black text-raha-pink tracking-tight">
          گالری رها
        </Link>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو بین هزاران محصول..."
            className="w-full rounded-full border border-gray-200 px-5 py-2.5 focus:outline-none focus:border-raha-pink"
          />
          <button
            type="submit"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-raha-pink"
          >
            🔍
          </button>
        </form>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-700 hover:text-raha-pink text-sm font-medium">
            ورود / ثبت نام
          </Link>
          <Link to="/cart" className="relative">
            <span className="text-2xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-raha-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      <nav className="border-t-2 border-raha-pink/20 bg-raha-light">
        <ul className="container mx-auto px-4 flex justify-center gap-6 py-3 text-sm font-semibold">
          <li><Link to="/" className="text-raha-pink">خانه</Link></li>
          <li><Link to="/products" className="text-gray-700 hover:text-raha-pink transition-colors">محصولات</Link></li>
          <li><Link to="/categories" className="text-gray-700 hover:text-raha-pink transition-colors">دسته‌بندی‌ها</Link></li>
          <li><Link to="/about" className="text-gray-700 hover:text-raha-pink transition-colors">درباره ما</Link></li>
          <li><Link to="/contact" className="text-gray-700 hover:text-raha-pink transition-colors">تماس با ما</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;