import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { IoIosLock } from 'react-icons/io';
import Input from '../components/Input';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
import Loader from 'react-loader-spinner';

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, loading, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));

    setEmail('');
    setPassword('');
  };

  {
    error && toast.error(error);
  }

  return (
    <div className="login__screen  my-[120px]">
      {loading && (
        <Loader
          className="flex justify-center mb-[60px]"
          type="BallTriangle"
          color="#03045E"
          height={50}
          width={50}
        />
      )}

      <div className="login__screen__container max-w-[95%] mx-auto flex justify-center items-center">
        <div className="login  bg-[#023E8A] border-4 rounded-[93px] border-black  w-[550px]  relative">
          <ToastContainer autoClose="3000" />
          <div className="title bg-[#00B4D8] border-4 border-black rounded-[100px] absolute -top-10 left-[24%] flex justify-center items-center mx-auto w-[50%]">
            <h1 className="text-3xl py-4 font-semibold tracking-wide ">
              Sign In
            </h1>
          </div>
          <form onSubmit={submitHandler} className="px-10 pb-14 pt-8">
            <Input
              className="w-[100%]"
              placeholder="Email"
              type="email"
              Icon={MdEmail}
              value={email}
              state={setEmail}
            />
            <Input
              className="w-[100%]"
              placeholder="Password"
              type="password"
              Icon={IoIosLock}
              value={password}
              state={setPassword}
            />

            <p className="text-2xl font-medium tracking-wide text-[#CAF0F8] py-6">
              New Customer?{' '}
              <Link className="underline" to="/register">
                Register
              </Link>
            </p>
            <button
              type="submit"
              className="text-white uppercase tracking-wide text-xl py-[15px] px-[52px] bg-[#00B4D8] rounded"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
