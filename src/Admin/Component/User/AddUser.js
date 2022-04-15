import React, { useEffect, useState } from 'react';
import '../Style/AddUser.css';
import { BiArrowBack } from 'react-icons/bi';
import { FcUpload } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { add_user } from '../../Redux/Action';
import { toast } from 'react-toastify';
import avatarDefault from '../../image/avatart.jpg'



function AddUser() {

  const [avatar, setAvatar] = useState('');
  const [fullname, setFullname] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const navigater = useNavigate();
  const dispatch =useDispatch();
  const addUser = useSelector(state => state.contactReducer);

  const hanldeClickAdminHome = () => {
    navigater(-1)
  }
  
  const hanldeCreate = (e) => {
    e.preventDefault();
    dispatch(add_user(data));
    toast.success('Thêm người dùng mới thành công !!');
    navigater(-1);
    
  }
  const data = {
    id: addUser.length + 1,
    avatar,
    userName,
    fullname,
    email,
    password,
    phone,
    address,
    gender,
    age,
  }


  const hanldeChangeImg = (e) => {
    const file =e.target.files[0];
    file.preview=URL.createObjectURL(file)
    setAvatar(file);

  }
  useEffect(() =>{
    //clean
    return () =>{
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  },[avatar])

   /*  //localStorage update
    useEffect(()=>{
      localStorage.getItem('username',JSON.stringify(username))
    },[username]) */
  return (
    <div>
      <div>
        <div className='newUserHome'>
        <div className='newUser'>
            <div className='newUserItem'>
              <label >Avatar</label>
              <div className='userUpdateRight'>
                <div className='userUpdateUpload'>
                  <label htmlFor='file' className='upAvatarIcon' >
                    <FcUpload className='iconAddUser' />
                    {avatar ? (<img className='userUpdateImg' src={avatar.preview} alt='' />) : (<img className='userUpdateImg' src={avatarDefault} />)}
                  </label>
                  <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeChangeImg} />
                </div>
              </div>

            </div>
            <form className='newUserForm' >
              <div className='newUserItem'>
                <label>UserName</label>
                <input type='text' placeholder='Enter your username' value={userName} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className='newUserItem'>
                <label>Full Name</label>
                <input type='text' placeholder='Enter your name' value={fullname} onChange={(e) => setFullname(e.target.value)} />
              </div>
              <div className='newUserItem'>
                <label>Email</label>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='newUserItem'>
                <label>Password</label>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className='newUserItem'>
                <label>Phone</label>
                <input type='number' placeholder='+84 (00 000 000)' value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className='newUserItem'>
                <label>Age</label>
                <input type='number' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
              </div>

              <div className='newUserItem'>
                <label>Gender</label>
                <select className='newUserSelect' name='Gender' id='active' value={gender} onChange={(e) => setGender(e.target.value)} >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
              </div>
              <div className='newUserItem'>
                <label>Address</label>
                <input type='text' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
            </form>
            <button className='listUser_btn btn create' onClick={hanldeCreate}>Create</button>
            <button className='listUser_btn btn' onClick={hanldeClickAdminHome} > Cancel </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser