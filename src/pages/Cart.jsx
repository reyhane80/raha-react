import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <span className="text-6xl">🛒</span>
        <h1 className="text-2xl font-bold text-gray-700 mt-4 mb-2">
          سبد خرید شما خالی است
        </h1>
        <p className="text-gray-500 mb-6">
          هنوز محصولی به سبد خرید اضافه نکرده‌اید
        </p>
        <Link
          to="/products"
          className="inline-block bg-raha-pink text-white px-8 py-3 rounded-full hover:bg-raha-dark transition-colors"
        >
          مشاهده محصولات
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="text-2xl font-bold text-center text-raha-pink mb-10">
        سبد خرید
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* لیست محصولات */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <p className="text-raha-pink font-bold text-sm mt-1">
                  {item.price.toLocaleString('fa-IR')} تومان
                </p>
              </div>

              {/* تعداد */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-raha-light text-raha-pink font-bold"
                >
                  −
                </button>
                <span className="w-8 text-center font-bold">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-raha-light text-raha-pink font-bold"
                >
                  +
                </button>
              </div>

              {/* حذف */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 text-xl"
              >
                🗑
              </button>
            </div>
          ))}
        </div>

        {/* خلاصه سفارش */}
        <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
          <h2 className="font-bold text-lg mb-4">خلاصه سفارش</h2>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>جمع کل</span>
            <span>{totalPrice.toLocaleString('fa-IR')} تومان</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>هزینه ارسال</span>
            <span className="text-green-500">رایگان</span>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between font-bold mb-6">
            <span>مبلغ قابل پرداخت</span>
            <span className="text-raha-pink">
              {totalPrice.toLocaleString('fa-IR')} تومان
            </span>
          </div>
          <button className="w-full bg-raha-pink text-white rounded-xl py-3 hover:bg-raha-dark transition-colors">
            ادامه فرآیند خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;