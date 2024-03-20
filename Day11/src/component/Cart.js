import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/Cartslice";

const Cart = () => {
  const Cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearcart = () => {
    dispatch(clearCart());
  };

  if (Cartitems.length == 0) {
    return (
      <div className="text-center text-2xl font-bold m-auto w-6/12 mt-4">
        You Have no items in cart
      </div>
    );
  }

  return (
    <div className="text-center m-4 p-4">
      <div className=" w-6/12 m-auto flex justify-center align-baseline gap-4 ">
        <h1 className="text-2xl font-bold capitalize"> Cart Items</h1>
        <button
          onClick={handleClearcart}
          className="p-4 m-4 bg-black text-white text-lg rounded-lg"
        >
          Clear cart
        </button>
      </div>

      <div className="w-6/12 m-auto">
        <Itemlist data={Cartitems} />
      </div>
    </div>
  );
};

export default Cart;
