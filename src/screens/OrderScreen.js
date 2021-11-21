import CartItems from '../components/CartItems.js';

const OrderScreen = () => {
  return (
    <div className="placeOrder__screen my-[30px]">
      <div className="placeOrder__screen__container max-w-[95%] mx-auto">
        <div className="placeOrder__screen__flex flex justify-between">
          <div className="placeOrder__screen__left w-[70%]">
            <h1 className="heading uppercase text-[40px] font-semibold tracking-wide text-[#03045E] flex items-center">
              Order [ID]
            </h1>
            <div className="placeOrder__screen__left">
              <div className="shipping">
                <h2 className="uppercase font-regular text-4xl text-[#03045E] pt-6 pb-2">
                  Shipping
                </h2>

                <div>
                  <p className="font-ligh text-lg text-[#7F7F7F] ">
                    Name: Wasif Raza
                  </p>
                  <p className="font-ligh text-lg text-[#7F7F7F] py-3">
                    Email: wasif@gmail.com
                  </p>
                  <p className="font-ligh text-lg text-[#7F7F7F] ">
                    Address: example town, example country 111
                  </p>
                </div>
              </div>
            </div>
            <div className="payment">
              <h2 className="uppercase font-regular text-4xl text-[#03045E] pt-6 pb-2">
                Payment
              </h2>

              <div>
                <p className="font-ligh text-lg text-[#7F7F7F] ">
                  Method: JazzCash
                </p>
              </div>
            </div>

            <div className="order__items">
              <h2 className="uppercase font-regular text-4xl text-[#03045E] pt-6 pb-2">
                Order Items
              </h2>
              <div className="space-y-4">
                <CartItems
                  image="https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  name="I laptop"
                  price="100"
                  totalPrice="1 x $60 = $60 "
                />
                <CartItems
                  image="https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  name="I laptop"
                  price="100"
                  totalPrice="1 x $60 = $60 "
                />
                <CartItems
                  image="https://images.unsplash.com/photo-1606787619248-f301830a5a57?ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  name="I laptop"
                  price="100"
                  totalPrice="1 x $60 = $60 "
                />
              </div>
            </div>
          </div>
          <div className="placeOrder__screen__right w-[28%] border-4 border-[#03045E] p-3 xl:p-5 h-[350px]">
            <div className="flex flex-col justify-between h-full">
              <h2 className="uppercase text-3xl font-semibold text-[#03045E] text-center">
                Order Summary
              </h2>
              <div className="text-lg font-medium text-[#03045E] space-y-3">
                <div className="flex items-center justify-between border-b-2 px-2">
                  <p className="">Items Price</p>
                  <p className="text-black">$ 0.00</p>
                </div>
                <div className="flex items-center justify-between border-b-2 px-2">
                  <p className="">Delivery Charges</p>
                  <p className="text-black">$ 0.00</p>
                </div>
                <div className="flex items-center justify-between border-b-2 px-2">
                  <p className="">Tax Price</p>
                  <p className="text-black">$ 0.00</p>
                </div>
                <div className="flex items-center justify-between border-b-2 px-2">
                  <p className="">Total Price</p>
                  <p className="text-black">$ 0.00</p>
                </div>
              </div>
              <button
                type="submit"
                className="btn my-0 px-2 py-[14px] text-lg xl:text-xl "
              >
                Paypal / JazzCash Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
