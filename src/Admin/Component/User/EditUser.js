import {  useEffect, useState } from 'react';
import { BsCalendarDate, BsGenderAmbiguous } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { delete_user, update_user } from '../../Redux/Action';
import '../Style/EditUser.css';
import '../Style/UserList.css';


function EditUser(props) {
    
  const [isOpen, setIsOpen] = useState(false)
  const [avatar, setAvatar] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  const userLists = useSelector(state => state.contactReducer);

  const dispatch = useDispatch()

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
  const handleUpdate = (id) =>{
    const data ={
      id:parseInt(id),    
      avatar,
      fullname,
      username,
      email,
      phone,
      age,
      gender,
      address,}
      dispatch(update_user(data));
    toast.success("Cập nhật dữ liệu thành công.")
  }

console.log(isOpen);
    return (
        <>
            {isOpen === true ?
                userLists.map((userEdit) => (
                    <div className="container_edit" key={userEdit.id} >
                        <div className="edit_user">
                            <div className="left_edituser">
                                <div className='userShowLeft'>
                                    <div>
                                        <label htmlFor='file'>
                                            {avatar.preview ? (<img className='edit_avatar' src={avatar.preview} alt={userEdit.id} />)
                                                :
                                                (<img className='edit_avatar' src={userEdit.avatar} />)}

                                        </label>
                                        <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeAvatar} />
                                    </div>
                                    <div className='userShowInforTitle'>
                                        <input
                                            placeholder={userEdit.username}
                                            className='edit_name  left_name'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className='userShowInforTitle '>
                                        <div className='edit_age'><BsCalendarDate className='icon_age' />
                                            <input
                                                className='left_name'
                                                placeholder={userEdit.age}
                                                value={age}
                                                onChange={(e) => setAge(e.target.value)}

                                            />
                                        </div>

                                        <div className='edit_gender'> <BsGenderAmbiguous className='icon_gender' />
                                            <input
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
                                <form className='userUpdateForm' >
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
                                        <button className='listUser_btn btn update'>Update</button>
                                        <button className='listUser_btn btn' onClick={hanldeClickAdminHome} >  Cancel </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>)) : (null)}

        </>
    )
}

export default EditUser