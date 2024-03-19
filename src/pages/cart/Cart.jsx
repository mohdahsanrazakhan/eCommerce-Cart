import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
            <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
            <div className="cartItems">
              {PRODUCTS.map((product) => {
                if(cartItems[product.id] !== 0) {
                  return (
                    <ul role="list" className="divide-y divide-gray-200" key={product.id}>
                      <CartItem data={product} />
                    </ul>
                  )
                }
              })}
            </div>
          </section>
          {totalAmount > 0 ?
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900">₹ {(totalAmount).toLocaleString('en-IN')}</dd>
                </div>
              </dl>
            </div>
            <div className="space-y-4 text-center">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Continue Shopping
              </button>
            </div>
          </section> 
          :
          <h2></h2>
          }
        </form>
      </div>
    </div>
  )
}

export default Cart;