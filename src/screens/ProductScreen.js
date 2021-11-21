import Review from '../components/Review';
import {Link} from 'react-router-dom'

const ProductScreen = () => {
  return (
    <div className="product">
      <div className="product__container max-w-[95%] mx-auto">
        <Link to='/' className="btn">
          Go back</Link>
        <div className="product__main flex flex-col xl:flex-row">
          <div className="flex w-full xl:w-3/4">
            <div className="w-4/6 relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=60"
                className="w-full"
                alt=""
              />
            </div>
            <div className="border p-4 mx-2 w-2/6 h-[450px]">
              <div className="product__name">
                <h2 className="text-2xl border-b w-full pb-3">Product Name</h2>
              </div>
              <div className="product__likes__dislikes flex items-center justify-between tracking-wide text-base font-semibold py-[10px]">
                <p>12 Likes</p>
                <p>2 Dislikes</p>
              </div>
              <div className="product__description">
                <b>Description: </b>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus, commodi aperiam! Modi, magni ex architecto
                  facere dolor qui molestiae fuga.
                </p>
              </div>
            </div>
          </div>
          <div className="product__price p-8 border xl:w-1/4 flex flex-col justify-between  h-[400px] mt-12 xl:mt-0">
            <div className="price text-[#03045E] flex items-center justify-between">
              <p className="text-2xl font-medium">Price :</p>
              <p className="text-2xl font-medium">$00.00</p>
            </div>
            <div className="price text-[#1c1d3b] flex items-center justify-between">
              <p className="text-2xl font-medium">Status :</p>
              <p className="text-2xl font-medium">In Stock</p>
            </div>
            <div className="price text-[#03045E] flex items-center justify-between">
              <p className="text-2xl font-medium">Qty :</p>

              <select name="" className="py-2 px-8 bg-[#0077B6] text-white">
                <option value="0">0</option>
              </select>
            </div>
            <button className="text-xl btn my-0">Add to Cart</button>
          </div>
        </div>
        <div className="product__reviews my-[41px] xl:w-1/2">
          <h2 className="uppercase text-[46px] font-semibold tracking-wide text-[#03045E]">
            Reviews
          </h2>
          <div className="reviews border-b-4 pb-4">
            <Review />
            <Review />
          </div>
          <div className="write__review">
            <h2 className="uppercase py-8  text-[40px] font-bold text-[#0077B6] ">
              Write a Customer Review
            </h2>
            <form>
              <h3 className="text-lg font-semibold tracking-wide pb-5">
                Comment
              </h3>
              <textarea
                className="block w-[500px] h-[150px] bg-[#f1f1f1] p-2 focus:bg-white outline-none border"
                name=""
              ></textarea>
              <button className=" btn my-5 " type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
