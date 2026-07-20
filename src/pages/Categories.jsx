import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 'women', name: 'پوشاک زنانه', icon: '👗', desc: 'جدیدترین مدل‌های پوشاک زنانه', count: '۱۲۰+ محصول' },
  { id: 'men', name: 'پوشاک مردانه', icon: '👔', desc: 'استایل مدرن و کلاسیک مردانه', count: '۹۰+ محصول' },
  { id: 'kids', name: 'پوشاک کودکان', icon: '🧸', desc: 'شاد و راحت برای بچه‌ها', count: '۶۰+ محصول' },
  { id: 'shoes', name: 'کفش و صندل', icon: '👟', desc: 'انواع کفش برای هر مناسبت', count: '۸۰+ محصول' },
  { id: 'bags', name: 'کیف و کوله', icon: '👜', desc: 'کیف‌های세련 و باکیفیت', count: '۴۵+ محصول' },
  { id: 'accessories', name: 'اکسسوری', icon: '💍', desc: 'جواهرات و اکسسوری مد روز', count: '۱۰۰+ محصول' },
];

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-14" dir="rtl">
      <h1 className="text-3xl font-black text-center text-raha-pink mb-10">
        دسته‌بندی‌ها
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => navigate(`/products?category=${cat.id}`)}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer border border-raha-pink/10 hover:border-raha-pink/40 p-8 flex flex-col items-center text-center gap-3"
          >
            <span className="text-6xl">{cat.icon}</span>
            <h2 className="text-xl font-black text-raha-dark">{cat.name}</h2>
            <p className="text-gray-500 text-sm">{cat.desc}</p>
            <span className="text-raha-pink text-xs font-bold bg-pink-50 px-3 py-1 rounded-full">
              {cat.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;