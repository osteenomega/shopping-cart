import { useContext, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Product } from "../hooks/useProducts";
import CartContext from "../contexts/cartContext";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const maxQuantity = 10;
  const [quantity, setQuantity] = useState(0);
//   const [cartItems, setCartItems] = useState<Product[]>([]);
    const { cartItems, setCartItems } = useContext(CartContext);

  const handleOnAddToCart = (product: Product) => {
    const isPresent = cartItems.find((p) => p.id === product.id);
    setCartItems(
      isPresent
        ? cartItems.filter((p) => p.id !== product.id)
        : [...cartItems, product]
    );
    setQuantity(1);
  };

  const handleRemoveFromCart = (product: Product) => {
    setCartItems(cartItems.filter((p) => p.id !== product.id));
    setQuantity(0);
  };

  return (
    <div className="flex flex-col w-[20rem] border border-slate-400 rounded-md overflow-hidden bg-white">
      <img className="h-64 object-contain" src={product?.image} />
      <div className="p-4 space-y-2">
        <p className="text-lg font-semibold">{product?.title}</p>
        <p>{product.price}$</p>

        <div className="flex justify-between">
          {cartItems.find((p) => p.id === product.id) && (
            <div className="flex gap-4 items-center">
              <button
                disabled={quantity >= maxQuantity}
                onClick={() => setQuantity(quantity + 1)}
                className="font-bold bg-blue-700 hover:bg-blue-600 text-white rounded-sm p-2 size-10 disabled:bg-blue-200"
              >
                +
              </button>
              <p>{quantity}</p>
              <button
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
                className="font-bold bg-blue-700 hover:bg-blue-600 text-white rounded-sm p-2 size-10 "
              >
                -
              </button>
            </div>
          )}
          {cartItems.find((p) => p.id === product.id) ? (
            <button
              onClick={() => handleRemoveFromCart(product)}
              className="bg-red-700 hover:bg-red-600 text-white rounded-sm py-2 px-5"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => handleOnAddToCart(product)}
              className="bg-blue-700 hover:bg-blue-600 text-white rounded-sm py-2 px-5"
            >
              <div className="flex items-center gap-4">
                <p>Add to Cart</p>
                <IoCartOutline />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
