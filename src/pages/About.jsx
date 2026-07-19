function About() {
  return (
    <div className="container mx-auto px-4 py-14" dir="rtl">
      <h1 className="text-3xl font-black text-center text-raha-pink mb-10">
        درباره ما
      </h1>

      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {/* معرفی */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-black text-raha-dark mb-4">گالری رها کیست؟</h2>
          <p className="text-gray-600 text-sm leading-8">
            گالری رها یک فروشگاه آنلاین پوشاک است که با هدف ارائه جدیدترین و
            باکیفیت‌ترین محصولات پوشاک و اکسسوری تأسیس شده است. ما باور داریم
            که هر کسی لایق بهترین استایل با مناسب‌ترین قیمت است.
          </p>
        </div>

        {/* ارزش‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '💎', title: 'کیفیت', desc: 'تنها محصولاتی با بالاترین کیفیت به دست شما می‌رسد' },
            { icon: '🚀', title: 'ارسال سریع', desc: 'سفارش شما در کمترین زمان ممکن تحویل داده می‌شود' },
            { icon: '❤️', title: 'رضایت مشتری', desc: 'رضایت شما اولویت اول ماست' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="font-black text-raha-dark mt-3 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* تیم */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-black text-raha-dark mb-4">تیم ما</h2>
          <p className="text-gray-600 text-sm leading-8">
            تیم گالری رها متشکل از افراد متخصص و علاقه‌مند به دنیای مد و فناوری است.
            ما هر روز تلاش می‌کنیم تا تجربه خریدی لذت‌بخش و آسان برای شما فراهم کنیم.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;