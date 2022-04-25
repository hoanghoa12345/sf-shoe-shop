import React, { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiRefreshLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { delete_user } from "../../Redux/Action";
import avatarDefaul from '../../image/avatart.jpg'
import "../Style/UserList.css";
import Pagination from "../Pagination";


function UserList() {

  const [searchUser, setSearchUser] = useState('');
  const [sortValue, setSortValue] = useState('');

  const userLists = useSelector((state) => state.contactReducer);
  const [posts, setPosts] = useState(userLists);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    setPosts(userLists)
  }, [userLists])
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

  const indexLastPost = currentPage * postPerPage;//10
  const indexFirstPost = indexLastPost - postPerPage;//0
  const currentPost = posts.slice(indexFirstPost, indexLastPost);

  //change page 
  const paginate = pageNumbers => setCurrentPage(pageNumbers)

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
          <FaSearch className="iconSerach "/>
          <input placeholder="Search...."
            onChange={(e) => setSearchUser(e.target.value)}
            className="serach"
            disabled={userLists.length === 0}
          />
          <select className='sortUser'
            value={sortValue}
            onChange={handleSort}  >
            {option.map((item, index) => {
              return (<option key={index} value={item} >{item}</option>)
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
          {currentPost.filter((data) => {
            if (searchUser === '') {
              return data
            } else if (data.fullname.toLowerCase().includes(searchUser.toLowerCase()) || data.userName.toLowerCase().includes(searchUser.toLowerCase())) {
              return data;
            }
          }).map((userList,index) => {
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
              <tr key={index}>
                <td>{index}</td>
                <td>
                  <img
                    className="avatar_user "
                    src={avatar.preview || avatar || avatarDefaul}
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
            );
          })}
        </tbody>
      </table>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate} />
    </div>
  );
}

export default UserList;
