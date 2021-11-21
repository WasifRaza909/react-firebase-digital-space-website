import { FaUserAlt } from 'react-icons/fa';
import Table from '../components/Table.js';

const ProfileScreen = () => {
  return (
    <div className="profileScreen my-[30px]">
      <div className="profileScreen__container max-w-[95%] mx-auto">
        <div className="profileScreen__flex flex justify-between">
          <div className="profileScreen__left w-[35%] border-r ">
            <h1 className="heading uppercase text-4xl font-semibold tracking-wide text-[#03045E] flex items-center mb-6">
              <FaUserAlt className="w-[50px]  text-black pr-[14px]" />
              User Profile
            </h1>
            <div className="border-4 p-3 xl:p-5 w-4/5 space-y-4">
              <div className="flex flex-col">
                <label
                  className="text-[#03045E] font-light text-base"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="w-full border border-[#03045E] outline-none px-4 py-3 text-[#03045E] font-medium text-lg"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#03045E] font-light text-base"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="w-full border border-[#03045E] outline-none px-4 py-3 text-[#03045E] font-medium text-lg"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#03045E] font-light text-base"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full border border-[#03045E] outline-none px-4 py-3 text-[#03045E] font-medium text-lg"
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#03045E] font-light text-base"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full border border-[#03045E] outline-none px-4 py-3 text-[#03045E] font-medium text-lg"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#03045E] font-light text-base"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full border border-[#03045E] outline-none px-4 py-3 text-[#03045E] font-medium text-lg"
                  type="text"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex flex-col justify-between h-full">
                <button
                  type="submit"
                  className="btn my-0 px-2 py-[14px] text-lg bg-[#03045E] w-4/5 mx-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="profileScreen__right w-3/5 ">
            <h2 className="uppercase text-4xl font-semibold tracking-wide text-[#03045E] flex items-center mb-6">
              My Orders
            </h2>
            <Table id date total paid delivered />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
