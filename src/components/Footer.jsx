import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-raha-dark text-white mt-14">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* درباره */}
        <div>
          <h3 className="font-bold text-lg mb-4">رها گالری</h3>
          <p className="text-white/70 text-sm leading-7">
            فروشگاه آنلاین رها پیشرو در ارائه جدیدترین و با کیفیت‌ترین
            پوشاک و اکسسوری با بهترین قیمت‌ها. تجربه‌ای خرید آسان و
            لذت‌بخش را با ما داشته باشید.
          </p>
        </div>

        {/* دسترسی سریع */}
        <div>
          <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">صفحه اصلی</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">همه محصولات</Link></li>
            <li><Link to="/categories" className="hover:text-white transition-colors">دسته‌بندی‌ها</Link></li>
            <li><Link to="/login" className="hover:text-white transition-colors">ورود / ثبت نام</Link></li>
            <li><Link to="/cart" className="hover:text-white transition-colors">سبد خرید</Link></li>
          </ul>
        </div>

        {/* خدمات مشتریان */}
        <div>
          <h3 className="font-bold text-lg mb-4">خدمات مشتریان</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link to="/guide?section=faq" className="hover:text-white transition-colors">سوالات متداول</Link></li>
            <li><Link to="/guide?section=shipping" className="hover:text-white transition-colors">شرایط ارسال</Link></li>
            <li><Link to="/guide?section=return" className="hover:text-white transition-colors">بازگشت کالا</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">تماس با ما</Link></li>
          </ul>
        </div>

        {/* خبرنامه */}
        <div>
          <h3 className="font-bold text-lg mb-4">همراه ما باشید</h3>
          <p className="text-white/70 text-sm mb-3">
            برای دریافت آخرین اخبار و تخفیف‌ها، ایمیل خود را وارد کنید:
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="آدرس ایمیل شما"
              className="flex-1 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none"
            />
            <button className="bg-raha-pink px-4 py-2 rounded-lg text-sm hover:bg-pink-600 transition-colors">
              ارسال
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-white/50 text-sm">
        © ۱۴۰۵ فروشگاه رها — تمامی حقوق محفوظ است
      </div>
    </footer>
  );
}

export default Footer;