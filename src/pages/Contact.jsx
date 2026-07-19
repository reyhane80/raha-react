import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="container mx-auto px-4 py-14" dir="rtl">
      <h1 className="text-3xl font-black text-center text-raha-pink mb-10">
        تماس با ما
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* اطلاعات تماس */}
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-6">
          <div>
            <h2 className="font-black text-lg text-raha-dark mb-1">آدرس</h2>
            <p className="text-gray-500 text-sm">شیراز، ایران</p>
          </div>
          <div>
            <h2 className="font-black text-lg text-raha-dark mb-1">ایمیل</h2>
            <p className="text-gray-500 text-sm">info@rahagallery.ir</p>
          </div>
          <div>
            <h2 className="font-black text-lg text-raha-dark mb-1">تلفن</h2>
            <p className="text-gray-500 text-sm">۰۷۱-۱۲۳۴۵۶۷۸</p>
          </div>
          <div>
            <h2 className="font-black text-lg text-raha-dark mb-1">ساعت کاری</h2>
            <p className="text-gray-500 text-sm">شنبه تا پنج‌شنبه — ۹ صبح تا ۶ عصر</p>
          </div>
        </div>

        {/* فرم */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <span className="text-5xl">✅</span>
              <p className="text-raha-pink font-black text-xl">پیام شما ارسال شد!</p>
              <p className="text-gray-500 text-sm">به زودی با شما تماس می‌گیریم.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-bold text-gray-700 mb-1 block">نام و نام خانوادگی</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="مثلاً: سارا احمدی"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-raha-pink"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700 mb-1 block">ایمیل</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-raha-pink"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700 mb-1 block">پیام</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="پیام خود را بنویسید..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-raha-pink resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-raha-pink text-white font-black py-3 rounded-xl hover:bg-raha-dark transition-colors"
              >
                ارسال پیام
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;