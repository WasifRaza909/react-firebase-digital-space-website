import { FaShoppingCart } from 'react-icons/fa';
import CartItems from '../components/CartItems.js';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  return (
    <div className="cart__screen my-[40px]">
      <div className="cart__screen__container max-w-[95%] mx-auto">
        <div className="cart__screen__flex flex justify-between">
          <div className="cart__screen__left w-[70%]">
            <h1 className="heading uppercase text-[40px] font-semibold tracking-wide text-[#03045E] flex items-center">
              <FaShoppingCart className="w-[60px]  text-black pr-[14px]" />
              Cart
            </h1>
            <div className="cart__screen__items">
              <h2 className="font-semibold text-2xl text-[#03045E] py-[30px]">
                ITEMS
              </h2>
              <CartItems
                image="https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                name="I laptop"
                price="100"
                inputCounter
                removeIcon
              />
              <CartItems
                image="https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                name="I laptop"
                price="100"
                inputCounter
                removeIcon
              />
              <CartItems
                image="https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                name="I laptop"
                price="100"
                inputCounter
                removeIcon
              />
            </div>
          </div>
          <div className="cart__screen__right w-[28%] border-4 border-[#03045E] p-3 xl:p-5 h-[240px] xl:h-[280px]">
            <div className="flex flex-col justify-between h-full">
              <h2 className="uppercase text-[40px] font-semibold text-[#03045E] text-center">
                Subtotal
              </h2>
              <div className="text-xl xl:text-[24px] font-medium text-[#03045E]">
                <p className="pb-2">
                  Number of Items <span className="px-4">=</span> 1
                </p>
                <p>
                  Price <span className="px-4">=</span>$ 1
                </p>
              </div>
              <button
                type="submit"
                className="btn my-0 px-2 py-[14px] text-lg xl:text-xl"
              >
                <Link to="/shipping">Proceed To Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
