import { useState } from "react";
import CartIcon from "../assets/CartIcon.png";
import { Link } from "react-router";
import { useSelector } from "../reduxContext";

const Header = () => {
  const cartItem = useSelector((state) => state.cartList);
  console.log(cartItem);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/" className="text-2xl font-bold">
            Shopee
          </Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" className="w-10" />
          <div className="cart-items-count mt-1.5">
            {cartItem.reduce((acc, curr) => acc + curr.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
