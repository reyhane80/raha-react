import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div className="text-center py-20 text-xl">محصول پیدا نشد!</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-10" dir="rtl">
      {/* دکمه برگشت */}
      <button
        onClick={() => navigate(-1)}
        className="text-raha-pink font-bold mb-6 flex items-center gap-1 hover:underline"
      >
        → برگشت
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        {/* عکس */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-2xl object-cover max-h-[500px]"
        />

        {/* جزئیات */}
        <div className="flex flex-col gap-5 flex-1">
          <div>
            <span className="text-xs text-gray-400 font-bold">{product.category}</span>
            <h1 className="text-3xl font-black text-raha-dark mt-1">{product.name}</h1>
          </div>

          <p className="text-gray-500 text-sm leading-7">{product.description}</p>

          {/* قیمت */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-raha-pink">
              {product.price.toLocaleString('fa-IR')} تومان
            </span>
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-sm">
                {product.oldPrice.toLocaleString('fa-IR')}
              </span>
            )}
            {product.discount && (
              <span className="bg-raha-pink text-white text-xs px-2 py-1 rounded-full">
                {product.discount}% تخفیف
              </span>
            )}
          </div>

          {/* سایز */}
          {product.sizes && (
            <div>
              <p className="text-sm font-black text-raha-dark mb-2">سایز:</p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-xl border text-sm font-bold transition-colors ${
                      selectedSize === size
                        ? 'bg-raha-pink text-white border-raha-pink'
                        : 'border-gray-200 text-gray-700 hover:border-raha-pink'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* رنگ */}
          {product.colors && (
            <div>
              <p className="text-sm font-black text-raha-dark mb-2">رنگ:</p>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-xl border text-sm font-bold transition-colors ${
                      selectedColor === color
                        ? 'bg-raha-pink text-white border-raha-pink'
                        : 'border-gray-200 text-gray-700 hover:border-raha-pink'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* دکمه افزودن */}
          <button
            onClick={handleAddToCart}
            className={`py-3 px-6 rounded-xl font-black transition-colors ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-raha-pink text-white hover:bg-raha-dark'
            }`}
          >
            {added ? '✅ به سبد اضافه شد!' : '🛒 افزودن به سبد خرید'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;