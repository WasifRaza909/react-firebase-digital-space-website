import Input from '../components/Input';

const EditProductScreen = () => {
  return (
    <div className="edit__screen">
      <div className="edit__screen__container container mx-auto">
        <button className="btn">Go Back</button>
        <div className="max-w-[60%] mx-auto">
          <h1 className="uppercase text-[40px] font-semibold tracking-wide text-[#03045E]">
            Edit Product
          </h1>
          <form className="mt-0 mb-12">
            <div className="inputs">
              <Input
                label="Name"
                border="1"
                placeholder="Product Name"
                type="text"
                inputId="name"
              />
              <Input
                label="Price"
                border="1"
                placeholder="0"
                type="number"
                inputId="price"
              />
              <div className="choose__image">
                <Input
                  label="Image"
                  border="1"
                  placeholder="Image Path"
                  type="text"
                  inputId="image"
                />

                <input type="file" name="" id="" />
              </div>
              <Input
                label="Brand"
                border="1"
                placeholder="Product Brand"
                type="text"
                inputId="brand"
              />
              <Input
                label="Count In Stock"
                border="1"
                placeholder="0"
                type="number"
                inputId="countInStock"
              />
              <Input
                label="Description"
                border="1"
                placeholder="Product Description"
                type="text"
                inputId="description"
              />
            </div>

            <button className="btn px-[95px]">update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductScreen;
