import { Link } from 'react-router-dom'
import { ShoppingBag, ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className='mx-auto w-full max-w-7xl  px-2 h-[80px] flex justify-between items-center flex-wrap'>
            <Link className='decoration-none text-white text-[25px] hover:text-orange-500 flex items-center gap-2 tracking-wider mr-auto' to="/">
                <ShoppingBag size={38} />
                <em>Applianceify</em>
            </Link>
          <Link className='decoration-none text-white text-[24px] hover:text-orange-500' to="/cart">
            <ShoppingCart size={32} />
          </Link>
      </div>
    </div>
  )
}

export default Navbar;