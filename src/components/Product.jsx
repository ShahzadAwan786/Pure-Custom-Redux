import React from "react";
import { useDispatch } from "../reduxContext";
import { addCartItem } from "../../store/reducer";
const Product = ({ id, title, price, image, rating }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-80  p-3 m-2 border-2">
      <div className="">
        <img src={image} className="w-50 h-60 p-5" />
        <div className="flex ">
          <h2 className="mr-4">{title}</h2>
          <div>${price}</div>
        </div>
        <div className="flex gap-7 mt-4">
          <button
            className="text-[20px] bg-amber-100 border-1 rounded-1xl p-1 cursor-pointer"
            onClick={() =>
              dispatch(
                addCartItem({ id, title, price, image, rating, quantity: 1 })
              )
            }
          >
            Add Cart
          </button>
          <button className="text-[20px] bg-amber-100 border-1 rounded-1xl p-1 cursor-pointer">
            Buy Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
