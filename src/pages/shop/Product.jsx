import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <>
      <img 
        src={productImage}
        alt={productName}
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] object-contain"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {productName}
        </h1>
        <div className="mt-2 flex items-center">
          <span className="block text-sm font-semibold">Price : </span>
          <span className="block cursor-pointer rounded-md p-1 text-sm font-normal">
            ₹ {(price).toLocaleString('en-IN')}
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => addToCart(id)}
        >
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </>
  )
}

export default Product