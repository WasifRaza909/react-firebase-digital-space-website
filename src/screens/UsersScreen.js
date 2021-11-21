import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/Table.js';
import Loader from 'react-loader-spinner';

import { listUsers } from '../redux/actions/userActions.js';
const UsersScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.listUsers);
  const { user } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (user.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/');
    }
  }, [dispatch, history, user]);

  return (
    <div className="users__screen my-[40px]">
      <div className="users__screen__container max-w-[95%] mx-auto">
        {loading && (
          <Loader
            className="flex justify-center"
            type="BallTriangle"
            color="#03045E"
            height={50}
            width={50}
          />
        )}
        <h1 className="heading uppercase text-[40px] font-semibold tracking-wide text-[#03045E] flex items-center">
          Users
        </h1>
        <div>
          <div className="rounded-t-xl overflow-hidden p-10 w-full">
            <table className="table-auto w-full text-center">
              <thead>
                <tr className="">
                  {<th className="border px-4 py-2">ID</th>}
                  {<th className="border px-4 py-2">Name</th>}

                  {<th className="border px-4 py-2">Email</th>}

                  {<th className="border px-4 py-2">is Admin</th>}

                  {<th className="border px-4 py-2">Edit / Delete</th>}
                </tr>
              </thead>
              {users &&
                users.map((user, index) => {
                  return (
                    <Table
                      key={user.uid}
                      id={user.uid}
                      name={`${user.firstName}  ${user.lastName}`}
                      email={user.email}
                      isAdmin={user.isAdmin}
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

export default UsersScreen;
