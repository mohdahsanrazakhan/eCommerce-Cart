import { PRODUCTS } from "../../products";
import Product from "./Product";

const Shop = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl font-semibold mt-5 text-center">Home Appliances</h1>
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {PRODUCTS.map((product) => (
          <div className="rounded-md border" key={product.id}>
            <Product data={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Shop;