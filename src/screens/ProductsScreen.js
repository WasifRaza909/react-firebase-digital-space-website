import Table from '../components/Table.js';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux/actions/productActions.js';
import Loader from 'react-loader-spinner';

const ProductsScreen = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.listProducts
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="products__screen my-[40px]">
      <div className="products__screen__container max-w-[95%] mx-auto">
        {loading && (
          <Loader
            className="flex justify-center"
            type="BallTriangle"
            color="#03045E"
            height={50}
            width={50}
          />
        )}
        <Link to="/add">
          <div className="flex justify-between items-center w-full mb-4 cursor-pointer">
            <h1 className="heading uppercase text-[40px] font-semibold tracking-wide text-[#03045E] flex items-center">
              Products
            </h1>

            <div className="flex items-center text-white font-bold bg-[#03045E] py-3 px-4">
              <FaPlus className="mr-2" />
              Add Product
            </div>
          </div>
        </Link>
        <div>
          <div className="rounded-t-xl overflow-hidden p-10 w-full">
            <table className="table-auto w-full text-center">
              <thead>
                <tr className="">
                  {<th className="border px-4 py-2">ID</th>}
                  {<th className="border px-4 py-2">Name</th>}

                  {<th className="border px-4 py-2">Price</th>}

                  {<th className="border px-4 py-2">Brand</th>}

                  {<th className="border px-4 py-2">Count In Stock</th>}

                  {<th className="border px-4 py-2">Edit / Delete</th>}
                </tr>
              </thead>
              {products &&
                products.map((product, index) => {
                  return (
                    <Table
                      key={product.uid}
                      id={product.uid}
                      name={product.name}
                      price={product.price}
                      brand={product.brand}
                      countInStock={product.countInStock}
                      editDelete
                    />
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
