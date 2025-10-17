import React from "react";

const Cart = ({ title, price, image, rating }) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={image} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button>-</button>
        <span></span>
        <button>+</button>
      </div>
      <div className="item-total">${price}</div>
    </div>
  );
};

export default Cart;
