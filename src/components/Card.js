import { Link } from 'react-router-dom';

const Card = ({ name, imageUrl, price }) => {
  return (
    <div className="card p-[30px] border-[3px] border-[#023E8A] flex flex-col ">
      <img className="w-full h-[150px]" src={imageUrl} alt="" />
      <Link
        to="/product"
        className="text-[#03045E] text-lg font-semibold tracking-wide pb-2 leading-5 pt-8 "
      >
        <p className="no-underline hover:underline">{name}</p>
      </Link>
      <div className="flex text-base font-semibold tracking-wide justify-between text-[#03045E] py-2">
        <p>12 Likes</p>
        <p>2 Dislikes</p>
      </div>
      <p className="price text-2xl font-semibold tracking-wide text-[#03045E]">
        ${price}
      </p>
    </div>
  );
};

export default Card;
