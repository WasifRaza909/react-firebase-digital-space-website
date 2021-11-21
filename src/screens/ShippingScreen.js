import {
  FaMapMarkerAlt,
  FaShippingFast,
  FaCity,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { IoCardSharp } from 'react-icons/io5';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const ShippingScreen = () => {
  return (
    <div className="shipping__screen my-[60px]">
      <div className="shipping__screen__container max-w-[95%] mx-auto">
        <div className="max-w-[80%] mx-auto">
          <h1 className="heading uppercase text-[52px] font-semibold tracking-wide text-[#03045E] flex items-center">
            <FaShippingFast className="w-[60px] h-[60px] text-black pr-[14px]" />
            Shipping
          </h1>
          <form className="mt-0">
            <Input
              border="1"
              placeholder="Address"
              type="text"
              Icon={FaMapMarkerAlt}
            />
            <Input border="1" placeholder="City" type="text" Icon={FaCity} />
            <Input
              border="1"
              placeholder="Country"
              type="text"
              Icon={FaMapMarkedAlt}
            />
            <Input
              border="1"
              placeholder="Postal Code"
              type="text"
              Icon={IoCardSharp}
            />
            <Input
              border="1"
              placeholder="Phone Number"
              type="telephone"
              Icon={FaPhoneAlt}
            />
            <button type="submit" className="btn mt-[50px] px-[50px]">
              <Link to="/payment">Continue</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingScreen;
