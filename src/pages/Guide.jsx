import { useState } from 'react';

const sections = [
  {
    id: 'faq',
    title: 'سوالات متداول',
    icon: '❓',
    items: [
      { q: 'چطور سفارش بدم؟', a: 'محصول مورد نظر رو انتخاب کن، به سبد خرید اضافه کن و مراحل پرداخت رو طی کن.' },
      { q: 'آیا می‌تونم سفارشم رو کنسل کنم؟', a: 'تا ۲۴ ساعت بعد از ثبت سفارش می‌تونی کنسل کنی. بعد از اون باید با پشتیبانی تماس بگیری.' },
      { q: 'روش‌های پرداخت چیه؟', a: 'پرداخت آنلاین با کارت بانکی و پرداخت در محل هر دو امکان‌پذیره.' },
      { q: 'آیا کالاها اصل هستن؟', a: 'بله، تمام محصولات گالری رها ۱۰۰٪ اصل و دارای ضمانت کیفیت هستن.' },
      { q: 'چطور سایز مناسب رو انتخاب کنم؟', a: 'در صفحه هر محصول راهنمای سایز وجود داره. در صورت شک، سایز بزرگ‌تر رو انتخاب کن.' },
    ],
  },
  {
    id: 'shipping',
    title: 'شرایط ارسال',
    icon: '🚚',
    items: [
      { q: 'هزینه ارسال چقدره؟', a: 'برای سفارش‌های بالای ۵۰۰ هزار تومان ارسال رایگانه. زیر این مبلغ هزینه ارسال ۳۵ هزار تومانه.' },
      { q: 'چقدر طول می‌کشه؟', a: 'آماده‌سازی ۱ تا ۳ روز کاری و تحویل ۲ تا ۷ روز کاری بسته به شهر.' },
      { q: 'آیا به همه شهرها ارسال دارید؟', a: 'بله، به تمام نقاط ایران ارسال داریم.' },
      { q: 'می‌تونم آدرس ارسال رو عوض کنم؟', a: 'تا قبل از ارسال می‌تونی با پشتیبانی تماس بگیری و آدرس رو تغییر بدی.' },
    ],
  },
  {
    id: 'return',
    title: 'بازگشت کالا',
    icon: '🔄',
    items: [
      { q: 'شرایط مرجوعی چیه؟', a: 'تا ۷ روز بعد از دریافت، در صورتی که کالا آسیب ندیده باشه می‌تونی مرجوع کنی.' },
      { q: 'هزینه مرجوعی با کیه؟', a: 'اگه مشکل از طرف ما باشه هزینه ارسال مرجوعی با ماست. در غیر این صورت با خریدار.' },
      { q: 'پول چطور برمی‌گرده؟', a: 'بعد از تایید مرجوعی، مبلغ ظرف ۳ تا ۵ روز کاری به حساب شما برمی‌گرده.' },
      { q: 'کدام کالاها قابل مرجوع نیستن؟', a: 'لباس زیر، جوراب و اکسسوری‌های بهداشتی به دلایل بهداشتی قابل مرجوع نیستن.' },
    ],
  },
];

function Guide() {
  const [activeSection, setActiveSection] = useState('faq');
  const [openItem, setOpenItem] = useState(null);

  const current = sections.find(s => s.id === activeSection);

  return (
    <div className="container mx-auto px-4 py-14" dir="rtl">
      <h1 className="text-3xl font-black text-center text-raha-pink mb-10">
        راهنما و پشتیبانی
      </h1>

      {/* تب‌ها */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => { setActiveSection(s.id); setOpenItem(null); }}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-colors ${
              activeSection === s.id
                ? 'bg-raha-pink text-white'
                : 'bg-white text-gray-700 hover:bg-raha-light border border-gray-200'
            }`}
          >
            {s.icon} {s.title}
          </button>
        ))}
      </div>

      {/* آکاردئون */}
      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {current.items.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <button
              onClick={() => setOpenItem(openItem === i ? null : i)}
              className="w-full text-right px-6 py-4 font-bold text-gray-800 flex justify-between items-center"
            >
              <span>{item.q}</span>
              <span className="text-raha-pink text-xl">{openItem === i ? '−' : '+'}</span>
            </button>
            {openItem === i && (
              <div className="px-6 pb-4 text-gray-500 text-sm leading-7">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guide;