import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartContext from "../contexts/cartContext";

const NavBar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-slate-300 flex justify-around py-6 ">
      <h1 className="text-3xl">Shop Online</h1>
      <ul className="flex gap-4">
        <Link to="/">
          <li className="text-lg font-medium">Home</li>
        </Link>
        <Link to="/cart">
          <li className="text-lg font-medium relative">
            {cartItems.length > 0 && <small className="size-5 bg-red-600 rounded-full absolute bottom-0 text-white text-center inline-flex justify-center items-center">
              {cartItems.length}
            </small>}
            <IoCartOutline size={32} />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
