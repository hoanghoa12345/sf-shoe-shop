import React from 'react';
import '../Style/AddUser.css';
import {BiArrowBack} from 'react-icons/bi'

import { useNavigate } from 'react-router-dom';
function AddUser() {
  const navigater =useNavigate()
 const hanldeClickAdminHome = () =>{
   navigater('')
 }
  return (
    <div>
        <div>
            <button className='listUser_btn btn ' onClick={hanldeClickAdminHome}> <BiArrowBack className='iconBack'/>Quay lại</button>
        </div>
        <div></div>
    </div>
  )
}

export default AddUser