import React, { useEffect, useState } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsCalendarDate, BsGenderAmbiguous } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { delete_user, update_user } from '../../Redux/Action';
import '../Style/UserList.css';




function UserList() {
  const [isOpen, setIsOpen] = useState(false)
  const [avatar, setAvatar] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [page, setPage] =useState(6);
  const dispatch = useDispatch();
  const userLists = useSelector(state => state.contactReducer);



  //delete uer
  const handleDeleteItem = (id) => {
    dispatch(delete_user(id))
    toast.success("Xóa người dùng thành công !!")
  }
  //set true False isOpen form
  const hanldeClickAdminHome = (e) => {
    e.preventDefault();
    setIsOpen(false);
  }

  const hanldeClickEdit = (id) => {
    const findEditUser = userLists.find(editUser => editUser.id === parseInt(id))
    console.log('findEditUser', findEditUser);
    setIsOpen(true);

  }

  //setAvatar
  const hanldeAvatar = (e) => {
    const avatar = e.target.files[0];
    avatar.preview = URL.createObjectURL(avatar)
    setAvatar(avatar);
  }
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar]);

  //update data 
  const handleUpdate = (id) => {
    const data = {
      id: parseInt(id),
      avatar,
      fullname,
      username,
      email,
      phone,
      age,
      gender,
      address,
    }
    dispatch(update_user(data));
    toast.success("Cập nhật dữ liệu thành công.")
  }
  //phân trang
  // let page = 6;
  
  let currentPage = 1;
  let start = 0;
  let end = page;

  
  const handleClickNext = () => {
    currentPage++;
    start =  setPage(parseInt((currentPage - 1) + page))
    end = setPage(parseInt(currentPage * page))
    console.log(start,end);
  }
  const handleClickPrev = () => {

   currentPage--;
   start = parseInt((currentPage - 1)) - parseInt(page);
   end =currentPage * page;

  }

  return (
    <div>
      <div className="listUsercontainer">
        {isOpen === true ?
          userLists.map((userEdit) => (
            <div className="container_edit" key={userEdit.id}   > <button className='btn_cancel' onClick={hanldeClickAdminHome} > Back </button>
              <div className="edit_user">
                <div className="left_edituser">
                  <div className='userShowLeft'>
                    <div onClick={handleUpdate}>
                      <label htmlFor='file'>
                        {avatar.preview ? (<img className='edit_avatar' src={avatar.preview} alt={userEdit.id} />)
                          :
                          (<img className='edit_avatar' src={userEdit.avatar} />)}

                      </label>
                      <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeAvatar} />
                    </div>
                    <div className='userShowInforTitle'>
                      <input
                        type='text'
                        placeholder={userEdit.username}
                        className='edit_name  left_name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className='userShowInforTitle '>
                      <div className='edit_age'><BsCalendarDate className='icon_age' />
                        <input
                          type='number'
                          className='left_name'
                          placeholder={userEdit.age}
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                      <div className='edit_gender'> <BsGenderAmbiguous className='icon_gender' />
                        <input
                          type='number'
                          className='left_name'
                          placeholder={userEdit.gender}
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right_edituser">
                  <form className='userUpdateForm'  >
                    <div>
                      <div className='userUpdateItem'>
                        <label className='title_edit'>Full name</label>
                        <input
                          type='text'
                          placeholder={userEdit.fullname}
                          className='userUpdateInput'
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                        />
                      </div>
                      <div className='userUpdateItem'>
                        <label className='title_edit'>Email</label>
                        <input
                          type='text'
                          placeholder={userEdit.email}
                          className='userUpdateInput'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='userUpdateItem'>
                        <label className='title_edit'>Phone</label>
                        <input
                          type='text'
                          placeholder={userEdit.phone}
                          className='userUpdateInput'
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className='userUpdateItem'>
                        <label className='title_edit'>Address</label>
                        <input
                          type='text'
                          placeholder={userEdit.address}
                          className='userUpdateInput'
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>

                      <button className='listUser_btn btn' onClick={handleUpdate}>Update</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>)) : (null)}
        <div className="listUser">
          <Link to='adduser'> <button className="listUser_btn" ><AiOutlineUsergroupAdd className="iconBack" />Thêm Người Dùng</button></Link>
        </div>
      </div>
      <table>
        <tbody>
          <tr >
            <th>Số thứ tự</th>
            <th>Hình đại diện</th>
            <th>Họ tên</th>
            <th>Giới tính</th>
            <th>Tuổi</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Quê quán</th>
            <th><GrUpdate className='iconBack' /></th>
          </tr>
          {userLists.map((userList) => {
            const { id, avatar, username, fullname, age, email, phone, gender, address } = userList;
            return (
              <React.Fragment key={id}>
                {id >= start && id < end ? (
                  <tr>                    
                    <td>{id}</td>
                    <td > <img className='avatar_user' src={avatar.preview || avatar} alt={id} /><span className='spantitle'>{username}</span> </td>
                    <td >{fullname}</td>
                    <td>{gender}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{address}</td>
                    <td>
                      <button className="btn_edit" value={isOpen} onClick={() => hanldeClickEdit(id)}>Edit</button>
                      <button className="btn_delete" onClick={() => handleDeleteItem(id)} >Delete</button>
                    </td>
                 </tr> ) : (null)
                }
              </React.Fragment>

            )
          })}
        </tbody>
      </table>
      <div className="center">
        <div className="pagination">
          <a onClick={handleClickPrev}>&laquo;</a>
          <a href="#" className="active">1</a>
          <a href="#" >2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a onClick={handleClickNext}>&raquo;</a>
        </div>
      </div>

    </div>
  )
}

export default UserList