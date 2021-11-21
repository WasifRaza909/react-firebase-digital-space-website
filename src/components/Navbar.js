import { FaUserAlt } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';

const Navbar = ({ history, location }) => {
  const dispatch = useDispatch();

  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [adminDropdownToggle, setAdminDropdownToggle] = useState(false);

  const { user } = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="h-20 bg-[#023E8A] ">
      <div className="navbar__container max-w-[95%] mx-auto flex items-center justify-between h-full">
        <div className="navbar__left flex  items-center justify-between w-1/2">
          <Link to="/">
            <h1 className="logo font-semibold  text-[#caf0f8] text-2xl xl:text-3xl tracking-wide cursor-pointer">
              Digital Space
            </h1>
          </Link>

          <div className="navbar__input bg-white flex py-2 xl:py-2.5 px-4 rounded-lg items-center">
            <HiSearch className="w-6 h-6" />
            <input
              type="text"
              placeholder="Search Product"
              className="placeholder-black font-semibold mx-3 outline-none"
            />
          </div>
        </div>

        <div className="navbar__right flex items-center justify-between text-[#CAF0F8] tracking-wide">
          <Link className="nav-link mr-10" to="/cart">
            Cart
          </Link>

          {user ? (
            <div className="flex">
              <div
                className="dropdown cursor-pointer relative"
                onClick={() => setDropdownToggle(!dropdownToggle)}
              >
                <div className="dropdown-title flex items-center">
                  {user.firstName} {user.lastName}
                  <IoMdArrowDropdown className="ml-1" />
                </div>
                <div
                  className={`dropdown-items bg-black px-4 py-2 text-sm rounded-md absolute right-0 ${
                    !dropdownToggle && 'hidden'
                  }`}
                >
                  <div className="dropdown-item pb-2">
                    <Link to="/profile">Profile</Link>
                  </div>
                  <div className="dropdown-item" onClick={logoutHandler}>
                    Logout
                  </div>
                </div>
              </div>
              {user.isAdmin && (
                <div
                  className="dropdown cursor-pointer relative ml-8"
                  onClick={() => setAdminDropdownToggle(!adminDropdownToggle)}
                >
                  <div className="dropdown-title flex items-center">
                    Admin
                    <IoMdArrowDropdown className="ml-1" />
                  </div>
                  <div
                    className={`dropdown-items bg-black px-4 py-2 text-sm rounded-md absolute right-0 ${
                      !adminDropdownToggle && 'hidden'
                    }`}
                  >
                    <div className="dropdown-item pb-2">
                      <Link to="/users">Users</Link>
                    </div>

                    <div className="dropdown-item pb-2">
                      <Link to="/products">Products</Link>
                    </div>

                    <div className="dropdown-item pb-2">
                      <Link to="/orders">Orders</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="block">
              <div className="cursor-pointer">
                <p>
                  <FaUserAlt className="text-black mr-1 inline-block" /> SIGN IN
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
