import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div className="text-center py-20 text-xl">محصول پیدا نشد!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10" dir="rtl">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-2xl object-cover"
        />
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500">{product.category}</p>
          <p className="text-2xl font-semibold text-pink-600">{product.price} تومان</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-500 text-white py-3 px-6 rounded-xl hover:bg-pink-600 transition"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;