import { useContext } from "react";
import CartContext from "../contexts/cartContext";
import { FaRegWindowClose } from "react-icons/fa";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="m-10 max-w-xl p-4 space-y-4">
      {cartItems &&
        cartItems.map((cartItem) => (
          <div className="flex border border-slate-400 rounded-md p-4 items-center justify-between">
            <div className="flex gap-6">
              <img
                className="size-28 object-contain"
                src={cartItem.image}
                alt=""
              />
              <div className="flex flex-col justify-center">
                <p>{cartItem.title}</p>
                <p>${cartItem.price}</p>
              </div>
            </div>
            <FaRegWindowClose
              className="mr-0"
              onClick={() => removeFromCart(cartItem.id)}
              size={32}
              fill="red"
              opacity="75%"
            />
          </div>
        ))}
      <div>
        <p className="font-bold text-lg">Total Price</p>
        <p>${cartItems.reduce((acc, item) => (item.price += acc), 0)}</p>
      </div>
    </div>
  );
};

export default CartPage;
