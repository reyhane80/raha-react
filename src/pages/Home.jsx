import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div>
      {/* بنر اصلی */}
      <section className="bg-gradient-to-l from-pink-300 to-raha-pink text-white py-24 text-center">
  <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold">
    فروش ویژه
  </span>
  <h1 className="text-5xl font-black mt-5 mb-4 drop-shadow">
    کالکشن جدید فروشگاه رها
  </h1>
  <p className="text-white/90 mb-8 text-lg font-medium">
    بهترین محصولات با قیمت‌های ویژه و ارسال سریع
  </p>
  <Link to="/products">
    <button className="bg-white text-raha-pink font-black px-10 py-3 rounded-full hover:bg-raha-light transition-colors shadow-lg">
      مشاهده محصولات
    </button>
  </Link>
</section>

      {/* محصولات ویژه */}
      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-black text-center text-raha-pink mb-10">
          محصولات ویژه
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* دسته‌بندی‌های محبوب */}
      <section className="container mx-auto px-4 py-14">
        <h2 className="text-3xl font-black text-center text-raha-pink mb-10">
          دسته‌بندی‌های محبوب
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {[
            { name: 'پوشاک مردانه', icon: '👔', link: 'men' },
            { name: 'پوشاک زنانه', icon: '👗', link: 'women' },
            { name: 'پوشاک کودکان', icon: '🧸', link: 'kids' },
            { name: 'کفش و صندل', icon: '👟', link: 'shoes' },
          ].map((cat) => (
            <div
              key={cat.link}
              className="bg-white rounded-2xl py-10 w-full text-center shadow-sm hover:shadow-lg transition-shadow cursor-pointer border border-raha-pink/10 hover:border-raha-pink/40"
            >
              <span className="text-5xl">{cat.icon}</span>
              <p className="mt-4 font-black text-raha-pink text-lg">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;