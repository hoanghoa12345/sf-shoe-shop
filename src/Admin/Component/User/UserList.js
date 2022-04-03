import React from 'react';
import '../Style/UserList.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr'


function UserList() {
  const userLists = useSelector(state => state.contactReducer)


  return (
    <div>
      <div className="listUsercontainer">
        <div className="listUser">
          <Link to='adduser'> <button className="listUser_btn" ><AiOutlineUsergroupAdd className="iconBack" />Thêm Người Dùng</button></Link>
        </div>
       {/*  <div className="listUseravatar">
          {userLists.map(userlist => {
            return (
              <img key={userlist.id} className='avatar_user_top' src={userlist.avatar} alt={userlist.id} />)
          })}
          <button className="btn_view">Xem chi tiết</button>
        </div> */}
      </div>
      <table>
        <tbody>
          <tr >
            <th>Hình đại diện</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Quê quán</th>
            <th><GrUpdate className='iconBack' /></th>
          </tr>
          {userLists.map(userList => {
            const { id, avatar, fullname, date, gender, address } = userList;
            return (
              <tr key={id} >
                <td > <img className='avatar_user' src={avatar} alt={id} /> </td>
                <td >{fullname}</td>
                <td>{date}</td>
                <td>{gender}</td>
                <td>{address}</td>
                <td>
                  <Link to={`/EditUser/${id}`}><button className="btn_edit">Edit</button></Link>
                  <button className="btn_delete" /* onClick={() => handleDeleteItem(id)} */>Delete</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>

    </div>

  )
}

export default UserList