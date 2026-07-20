import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-raha-light flex items-center justify-center px-4" dir="rtl">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        {/* تب ورود/ثبت‌نام */}
        <div className="flex mb-8 bg-raha-light rounded-xl p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
              isLogin ? 'bg-white text-raha-pink shadow-sm' : 'text-gray-500'
            }`}
          >
            ورود
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
              !isLogin ? 'bg-white text-raha-pink shadow-sm' : 'text-gray-500'
            }`}
          >
            ثبت‌نام
          </button>
        </div>

        <h1 className="text-2xl font-black text-raha-dark mb-6 text-center">
          {isLogin ? 'خوش برگشتی! 👋' : 'عضو جدید 🎉'}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
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
          )}
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
            <label className="text-sm font-bold text-gray-700 mb-1 block">رمز عبور</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="********"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-raha-pink"
            />
          </div>
          <button
            type="submit"
            className="bg-raha-pink text-white font-black py-3 rounded-xl hover:bg-raha-dark transition-colors mt-2"
          >
            {isLogin ? 'ورود به حساب' : 'ساخت حساب کاربری'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;