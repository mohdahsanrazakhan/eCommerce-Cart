import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, deleteFromCart } = useContext(ShopContext);

  return (
    <div className="" key={id}>
      <li className="flex py-6 sm:py-6 ">
            <div className="flex-shrink-0">
              <img
                src={productImage}
                alt={productName}
                className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-sm">
                      <a href="#" className="font-semibold text-black">
                        {productName}
                      </a>
                    </h3>
                  </div>
                  <div className="mt-1 flex items-end">
                    <p className="text-sm font-medium text-gray-900">₹ {(price).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </div>
            </div>
      </li>
      <div className="mb-2 flex">
        <div className="min-w-24 flex">
          <button 
            type="button" 
            onClick={() => removeFromCart(id)} 
            className="h-7 w-7">
            -
          </button>
          <input
            type="text"
            className="mx-1 h-7 w-9 rounded-md border text-center"
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            value={cartItems[id]}
          />
          <button
            type="button"
            onClick={() => addToCart(id)}
            className="flex h-7 w-7 items-center justify-center"
          >
            +
          </button>
        </div>
        <div className="ml-6 flex text-sm">
          <button
            type="button"
            onClick={() => deleteFromCart(id)}
            className="flex items-center space-x-1 px-2 py-1 pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-500"
            >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
          <span className="text-xs font-medium text-red-500">Remove</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;