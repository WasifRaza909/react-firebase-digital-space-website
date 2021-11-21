import Card from '../components/Card.js';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listProducts } from '../redux/actions/productActions.js';
import Loader from 'react-loader-spinner';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.listProducts
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  let count = 0;
  const sliderFunction = (e) => {
    const numberOfSlides = document.querySelectorAll('.slide');

    if (e.target.id === 'next-btn') {
      count++;
      if (count === numberOfSlides.length) {
        count = 0;
      }
      numberOfSlides.forEach((slide) => {
        slide.classList.add('hidden');
      });

      numberOfSlides[count].classList.remove('hidden');
    } else {
      count--;

      if (count < 0) {
        count = numberOfSlides.length - 1;
      }

      numberOfSlides.forEach((slide) => {
        slide.classList.add('hidden');
      });

      numberOfSlides[count].classList.remove('hidden');
    }
  };

  return (
    <div>
      <div className="home my-6">
        <div className="home__container max-w-[95%] mx-auto font-semibold text-3xl ">
          <div className="home__top">
            <h1 className="uppercase text-[#03045E]">Featured Products</h1>
            <div className="home__slider mb-6">
              <div className="home__slider__container h-[430px] bg-blue-500  my-6 flex items-center justify-between">
                <ChevronLeftIcon
                  className="h-20 cursor-pointer text-black"
                  id="prev-btn"
                  onClick={sliderFunction}
                />
                <div className="slides relative w-full h-full">
                  <div className="slide  absolute left-[40%]  top-[22%] bottom-[78%]">
                    <div className="w-[150px] h-[150px]">
                      <img
                        className="w-full h-full"
                        src="https://images.unsplash.com/photo-1630570000756-16dc154dc229?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
                        alt=""
                      />
                    </div>
                    <h1>slide 1</h1>
                  </div>
                  <div className="slide hidden absolute left-[40%]  top-[22%] bottom-[78%]">
                    <div className="w-[150px] h-[150px]">
                      <img
                        className="w-full h-full"
                        src="https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=60"
                        alt=""
                      />
                    </div>
                    <h1>slide 2</h1>
                  </div>
                  <div className="slide  hidden absolute left-[40%]  top-[22%] bottom-[78%]">
                    <div className="w-[150px] h-[150px]">
                      <img
                        className="w-full h-full"
                        src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=60"
                        alt=""
                      />
                    </div>
                    <h1>slide 3</h1>
                  </div>
                </div>
                <ChevronRightIcon
                  className="h-20 cursor-pointer text-black "
                  onClick={sliderFunction}
                  id="next-btn"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold uppercase mb-9 text-[#03045E]">
              Latest Products
            </h2>

            <div className="home__bottom flex justify-between ">
              <div className="home__bottom__left w-[68%]">
                {loading ? (
                  <Loader
                    className="flex justify-center"
                    type="BallTriangle"
                    color="#03045E"
                    height={50}
                    width={50}
                  />
                ) : (
                  <div className="cards grid grid-cols-2 xl:grid-cols-3 gap-8">
                    {products &&
                      products.map((product) => (
                        <Card
                          name={product.name}
                          price={product.price}
                          imageUrl={product.imageUrl}
                        />
                      ))}
                  </div>
                )}
              </div>
              <div className="home__bottom__right w-[30%]">
                <div className="cart__items p-7 border-[5px] border-black rounded-[40px] sticky top-6 right-0 w-full">
                  <h2 className="mb-2 uppercase text-4xl xl:text-5xl font-semibold text-center">
                    Cart Items
                  </h2>
                  <ul className="text-2xl font-semibold">
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                    <li>4.</li>
                    <li>5.</li>
                  </ul>
                  <p className="underline text-center text-2xl font-semibold tracking-wide mt-[15px]">
                    More Items
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
