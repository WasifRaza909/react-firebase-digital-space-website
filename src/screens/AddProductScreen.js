import { useState } from 'react';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProductScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState({});
  const [imageName, setImageName] = useState('');
  const [brand, setBrand] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      name == '' ||
      price == 0 ||
      price == '' ||
      image == {} ||
      imageName == '' ||
      brand == '' ||
      countInStock == 0 ||
      countInStock == '' ||
      description == ''
    ) {
      return toast.error('Please fill in all fields');
    } else {
      const formData = new FormData();

      formData.append('file', image);
      formData.append('upload_preset', 'ep5vdbtr');

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dtj75cffm/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.text();
      const imageUrl = JSON.parse(data).url;

      dispatch(
        addProduct(name, price, imageUrl, brand, countInStock, description)
      );

      setName('');
      setPrice(0);
      setImage({});
      setImageName('');
      setBrand('');
      setCountInStock(0);
      setDescription('');

      history.push('/products');
    }
  };

  return (
    <div className="add__screen">
      <ToastContainer />
      <div className="add__screen__container max-w-[95%] mx-auto">
        <Link to="/products" className="btn">
          Go Back
        </Link>
        <div className="max-w-[60%] mx-auto">
          <h1 className="uppercase text-[40px] font-semibold tracking-wide text-[#03045E]">
            Add Product
          </h1>

          <form className="mt-0 mb-12" onSubmit={submitHandler}>
            <div className="inputs">
              <Input
                label="Name"
                border="1"
                placeholder="Product Name"
                type="text"
                inputId="name"
                value={name}
                state={setName}
              />
              <Input
                label="Price"
                border="1"
                placeholder="0"
                type="number"
                inputId="price"
                value={price}
                state={setPrice}
                min="1"
              />
              <div className="choose__image">
                <Input
                  label="Image Name"
                  border="1"
                  placeholder="Image Path"
                  type="text"
                  inputId="image"
                  value={imageName}
                />

                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => {
                    setImage(e.target.files[0]);

                    const nameWithExt = e.target.files[0].name;

                    const name = nameWithExt.split('.')[0];
                    setImageName(name);
                  }}
                />
              </div>
              <Input
                label="Brand"
                border="1"
                placeholder="Product Brand"
                type="text"
                inputId="brand"
                value={brand}
                state={setBrand}
              />
              <Input
                label="Count In Stock"
                border="1"
                placeholder="0"
                type="number"
                inputId="countInStock"
                value={countInStock}
                state={setCountInStock}
                min="1"
              />
              <Input
                label="Description"
                border="1"
                placeholder="Product Description"
                type="text"
                inputId="description"
                value={description}
                state={setDescription}
              />
            </div>

            <button className="btn px-[95px]" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductScreen;
