import Input from '../components/Input';

const EditUserScreen = () => {
  return (
    <div className="edit_user">
      <div className="edit_user__container max-w-[95%] mx-auto">
        <button className="btn">Go Back</button>
        <div className="max-w-[60%] mx-auto">
          <h1 className="uppercase text-[40px] font-semibold tracking-wide text-[#03045E]">
            Edit User
          </h1>
          <form className="mt-0 mb-12">
            <div className="inputs">
              <Input
                label="Name"
                border="1"
                placeholder="User name"
                type="text"
                inputId="name"
              />
              <Input
                label="Email"
                border="1"
                placeholder="Email"
                type="email"
                inputId="email"
              />
              <div className="mt-8 flex items-center">
                <input
                  className="w-5 h-5"
                  type="checkbox"
                  name=""
                  id="checkbox"
                />
                <label
                  htmlFor="checkbox"
                  className="pl-3 text-[#03045E] fw-medium text-xl"
                >
                  Is Admin ?
                </label>
              </div>
            </div>

            <button className="btn px-[95px] rounded-md">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserScreen;
