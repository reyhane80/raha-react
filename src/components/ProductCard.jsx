import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* عکس و بج */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        {product.discount && (
          <span className="absolute top-3 right-3 bg-raha-pink text-white text-xs px-2 py-1 rounded-full">
            {product.discount}%-
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 right-3 bg-raha-pink text-white text-xs px-2 py-1 rounded-full">
            جدید
          </span>
        )}
      </div>

      {/* اطلاعات */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-xs mb-3">{product.description}</p>

        {/* قیمت */}
        <div className="mb-3">
          <span className="text-raha-pink font-bold">
            {product.price.toLocaleString('fa-IR')} تومان
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 text-xs line-through mr-2">
              {product.oldPrice.toLocaleString('fa-IR')}
            </span>
          )}
        </div>

        {/* دکمه افزودن */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="w-full bg-raha-pink text-white rounded-lg py-2 text-sm hover:bg-raha-dark transition-colors"
        >
          🛒 افزودن به سبد
        </button>
      </div>
    </div>
  );
}

export default ProductCard;