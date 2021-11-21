import { FaCheck, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';

const Table = ({
  id,
  name,
  email,
  isAdmin,
  editDelete,
  price,
  brand,
  user,
  paid,
  delivered,
  details,
  total,
  date,
  countInStock,
}) => {
  return (
    <tbody>
      <tr className="">
        {id && <td className="px-4 py-2 border">{id}</td>}
        {name && <td className="px-4 py-2 border">{name}</td>}
        {email && <td className="px-4 py-2 border">{email}</td>}
        {user && <td className="px-4 py-2 border">{user}</td>}
        {price && <td className="px-4 py-2 border">{price}</td>}
        {brand && <td className="px-4 py-2 border">{brand}</td>}
        {date && <td className="px-4 py-2 border">11-11-2021</td>}
        {total && <td className="px-4 py-2 border">{total}</td>}
        {countInStock && <td className="px-4 py-2 border">{countInStock}</td>}
        {paid && (
          <td className="px-4 py-2 border">
            <FaCheck />
          </td>
        )}
        {delivered && (
          <td className="px-4 py-2 border">
            <FaCheck />
          </td>
        )}
        {details && (
          <td className="px-4 py-2 border">
            <button className="bg-[#03045E]  inline-flex justify-center items-center text-white px-4 py-1 my-2">
              Details
            </button>
          </td>
        )}

        {email ? (
          isAdmin ? (
            <td className="px-4 py-2 border ">
              <FaCheck className="text-[#4fff38] mx-auto" />
            </td>
          ) : (
            <td className="px-4 py-2 border">
              <FaTimes className="text-[red] mx-auto " />
            </td>
          )
        ) : (
          ''
        )}

        {editDelete && (
          <td className="py-2 border">
            <div>
              <button className="bg-[#03045E] w-16 h-10 inline-flex justify-center items-center ">
                <TiPencil className="text-white" />
              </button>
              <button className="bg-[#FF0000] w-16 h-10 inline-flex justify-center items-center ">
                <FaTrashAlt className="text-white" />
              </button>
            </div>
          </td>
        )}
      </tr>
    </tbody>
  );
};

export default Table;
