import React, { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiRefreshLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { delete_user } from "../../Redux/Action";
import avatarDefaul from '../../image/avatart.jpg'
import "../Style/UserList.css";

function UserList() {

  const [searchUser, setSearchUser] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [page, setPage] = useState(6);
  const userLists = useSelector((state) => state.contactReducer);
  const dispatch = useDispatch();

  //delete uer
  const handleDeleteItem = (id) => {
    dispatch(delete_user(id));
    toast.success("Xóa người dùng thành công !!");
  };
  //sort user list
  const option = ['Tên Người Dùng', 'Tuổi', 'Giới Tính', 'Địa chỉ'];
  const handleSort = (e) => {
    setSortValue(e.target.value)
   }

  //phân trang

  let currentPage = 1;
  let start = 0;
  let end = page;

  const handleClickNext = () => {
    currentPage++;
    start = setPage(parseInt(currentPage - 1 + page));
    end = setPage(parseInt(currentPage * page));
    console.log(start, end);
  };
  const handleClickPrev = () => {
    currentPage--;
    start = parseInt(currentPage - 1) - parseInt(page);
    end = currentPage * page;
  };
  return (
    <div>
      <div className="listUsercontainer">
        <div className="listUser">
          <Link to="adduser">
            <button className="btn_create">
              <AiOutlineUsergroupAdd className="iconBack" />
              Thêm Người Dùng
            </button>
          </Link>
          <input placeholder="Search User"
            onChange={(e) => setSearchUser(e.target.value)}
            className="Serach"
            disabled={userLists.length === 0}
          /> 

          <select className='sortUser'
            value={sortValue}
            onChange={handleSort}  >
            {option.map((item, index) => {
             
              return (
                <option key={index} value={item} >{item}</option>
              )
            })}
          </select>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Số thứ tự</th>
            <th>Hình đại diện</th>
            <th>Tên tài khoản</th>
            <th>Họ tên</th>
            <th>Giới tính</th>
            <th>Tuổi</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Quê quán</th>

            <th>
              <RiRefreshLine className="iconBack" />
            </th>
          </tr>
          {userLists.filter((data)=>{
            if(searchUser == ''){
              return data
            }else if(data.fullname.toLowerCase().includes(searchUser.toLowerCase()) || data.userName.toLowerCase().includes(searchUser.toLowerCase())){
              return data;
            }
          }).map((userList) => {
            const {
              id,
              avatar,
              userName,
              fullname,
              age,
              email,
              phone,
              gender,
              address,
            } = userList;
            return (
              <React.Fragment key={id}>
                {id >= start && id < end ? (
                  <tr>
                    <td>{id}</td>
                    <td>
                      <img
                        className="avatar_user "
                        src={avatar.preview || avatar || avatarDefaul }
                        alt={id}
                      />
                    </td>
                    <td>{userName}</td>
                    <td>{fullname}</td>
                    <td>{gender}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td className='addressUser'>{address}</td>
                    <td>
                      <Link to={`information/${id}`}>
                        <button className="btn_edit">Edit</button>
                      </Link>
                      <button
                        className="btn_delete"
                        onClick={() => handleDeleteItem(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      {userLists.length > 5 ? (
        <div className="center">
          <div className="pagination">
            <a onClick={handleClickPrev}>&laquo;</a>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a onClick={handleClickNext}>&raquo;</a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserList;
