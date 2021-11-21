// import Image from 'next/image';
import { useState } from 'react';
import { FaTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CartItems = ({
  image,
  name,
  price,
  inputCounter,
  totalPrice,
  removeIcon,
}) => {
  const [inputNumber, setInputNumber] = useState(0);

  const incNumber = () => {
    setInputNumber(inputNumber + 1);
  };

  const decNumber = () => {
    setInputNumber(inputNumber - 1);
    if (inputNumber <= 0) {
      setInputNumber(0);
    }
  };

  return (
    <div className="px-6 py-4 border border-[#707070] flex items-center justify-between">
      {image && (
        <div className="relative  w-[120px] h-[55px]">
          <img className="w-full h-full" src={image} alt="" />
        </div>
      )}
      {name && (
        <p className="uppercase text-[#03045E] font-medium text-xl ">{name}</p>
      )}
      {price && (
        <p className="text-[#03045E] font-medium text-xl ">$ {price}</p>
      )}
      {inputCounter && (
        <div className="relative">
          <input
            className="border border-[#03045E] w-[100px] h-[40px] px-5 py-5 cart-items-input text-[#03045e]"
            min="0"
            type="number"
            value={inputNumber}
            onChange={() => setInputNumber(inputNumber)}
          />
          <FaChevronUp
            className="absolute top-1 right-2 w-3 text-[#03045e] cursor-pointer"
            onClick={incNumber}
          />
          <FaChevronDown
            className="absolute bottom-1 right-2 w-3 text-[#03045e] cursor-pointer"
            onClick={decNumber}
          />
        </div>
      )}
      {removeIcon && <FaTrashAlt className="cursor-pointer" />}
      {totalPrice && (
        <p className="text-[#03045E] font-medium text-xl ">{totalPrice}</p>
      )}
    </div>
  );
};

export default CartItems;
