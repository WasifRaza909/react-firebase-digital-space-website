import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { IoIosLock } from 'react-icons/io';
import { IdentificationIcon } from '@heroicons/react/solid';
import Input from '../components/Input';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';

const RegisterScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { user, loading } = useSelector((state) => state.userLogin);
  const { error } = useSelector((state) => state.userRegister);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (confirmPassword === password) {
      dispatch(registerUser(firstName, lastName, email, password));

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      toast.error('Passwords do not matched!');
    }
  };

  {
    error && toast.error(error);
  }

  return (
    <div className="register  my-[120px]">
      <ToastContainer />
      <div className="register__container max-w-[95%] mx-auto flex justify-center items-center">
        <div className="register  bg-[#023E8A] border-4 rounded-[93px] border-black  w-[550px]  relative">
          <div className="title bg-[#00B4D8] border-4 border-black rounded-[100px] absolute -top-10 left-[24%] flex justify-center items-center mx-auto w-[50%]">
            <h1 className="text-3xl py-4  font-semibold tracking-wide ">
              Register
            </h1>
          </div>
          <form onSubmit={submitHandler} className="px-10 pb-14 pt-8">
            <Input
              required
              placeholder="First Name"
              type="text"
              Icon={IdentificationIcon}
              value={firstName}
              state={setFirstName}
            />
            <Input
              required
              placeholder="Last Name"
              type="text"
              Icon={IdentificationIcon}
              value={lastName}
              state={setLastName}
            />
            <Input
              required
              placeholder="Email"
              type="email"
              Icon={MdEmail}
              value={email}
              state={setEmail}
            />
            <Input
              required
              placeholder="Password"
              type="Password"
              Icon={IoIosLock}
              value={password}
              state={setPassword}
            />
            <Input
              required
              className=""
              placeholder="Confirm Password"
              type="password"
              Icon={IoIosLock}
              value={confirmPassword}
              state={setConfirmPassword}
            />
            <p className="text-2xl font-medium tracking-wide text-[#CAF0F8] py-6">
              New Customer?{' '}
              <Link className="underline" to="/login">
                Sign In
              </Link>
            </p>
            <button
              type="submit"
              className="text-white uppercase tracking-wide text-xl py-[15px] px-[52px] bg-[#00B4D8] rounded"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
