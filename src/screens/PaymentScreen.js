import { Link } from 'react-router-dom';

const PaymentScreen = () => {
  return (
    <div className="payment__screen">
      <div className="payment__screen__container container mx-auto">
        <div className="max-w-[80%] mx-auto my-44">
          <h1 className="uppercase text-[52px] font-semibold tracking-wide text-[#03045E]">
            Payment Method
          </h1>

          <h2 className="text-[52px] font-semibold text-[#9A9A9D] mt-8">
            Select Method
          </h2>

          <div className="inputs my-[40px]">
            <div className="input__1">
              <input
                className="h-5 w-8 border-4 border-black bg-[#000000]"
                type="radio"
                name=""
                id="jazzcash"
              />
              <label
                className="text-3xl font-medium tracking-wide text-[#03045E] ml-[30px]"
                htmlFor="jazzcash"
              >
                Jazzcash
              </label>
            </div>
            <div className="input__2 mt-[18px]">
              <input
                className="h-5 w-8 border-4 border-black bg-[#000000]"
                type="radio"
                name=""
                id="paypalOrCreditCard"
              />
              <label
                className="text-3xl font-medium tracking-wide text-[#03045E] ml-[30px]"
                htmlFor="paypalOrCreditCard"
              >
                Paypal or credit card
              </label>
            </div>
          </div>
          <button type="submit" className="btn mt-[50px] px-[98px]">
            <Link to="/placeOrder">Continue</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;
