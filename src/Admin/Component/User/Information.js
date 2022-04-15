import { useState, useEffect } from "react";
import "../Style/information.css";
import { FcUpload } from "react-icons/fc";
import {  useNavigate } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { update_user } from "../../Redux/Action";
import { toast } from "react-toastify";

function Information() {
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");
  const [information, setInformation] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEdits = useSelector((state) => state.contactReducer);
  const { id } = useParams();
  const findEditUser = userEdits.find(
    (userEdit) => userEdit.id === parseInt(id)
  );

  useEffect(() => {
    if (findEditUser) {
      setAvatar(findEditUser.avatar);
      setUserName(findEditUser.userName);
      setFullname(findEditUser.fullname);
      setAge(findEditUser.age);
      setEmail(findEditUser.email);
      setPhone(findEditUser.phone);
      setAddress(findEditUser.address);
    }
  },[findEditUser])
      const data = {
        id: parseInt(id),
        avatar,
        userName,
        fullname,
        gender,
        age,
        email,
        phone,
        address,
      };
      const hanldeClickInformation = () => {
        setInformation(true);
        console.log(information);
      };
      const hanldeClickOverview = () => {
        setInformation(false);
      };
      const hanldeAvatar = (e) => {
        const avatar = e.target.files[0];
        avatar.preview = URL.createObjectURL(avatar);
        setAvatar(avatar);
      };
      useEffect(() => {
        return () => {
          //clean

          avatar && URL.revokeObjectURL(avatar.preview);
        };
      }, [avatar]);
      const hanldeUpdate = (e) => {
        e.preventDefault();
        dispatch(update_user(data));
        toast.success("Update successful !!");
        navigate(-1);
      };
      //data example
      const data1 = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];




      return (
        <>
          <div className="container_edit"   >
            <div className="edit_user">
              <div className="left_edituser">
                <div className='userShowLeft'>
                  <div >
                    {avatar.preview ? (<img className='edit_avatar' src={avatar.preview} alt={id} />)
                      :
                      (<img className='edit_avatar' src={avatar} alt=''/>)}
                  </div>
                  <div className='userShowInforTitle'>
                    <h3 className='edit_name'>{fullname}</h3>
                    <h6 className='edit_fullname'>{userName}</h6>
                  </div>
                  <div className='recharts'>
                    <ResponsiveContainer width="80%" height="85%">
                      <LineChart width={300} height={100} data={data1}>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className='left_btn'>
                <button className='btn_information' value={!information} onClick={hanldeClickOverview}>Overview</button>
                <button className='btn_overview' value={information} onClick={hanldeClickInformation} >Information</button>
                <button className='btn_setting'>Settings</button>
              </div>
              {information ? (
                <div className="right_edituser">
                  <div className='right_'>
                    <div className='edit_flex_left'>
                      <div className='userUpdateItem'>
                        <div className='userUpdateItem'>
                          <label className='title_edit'>FullName:</label>
                          <input type='text'
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            placeholder={findEditUser.fullname}
                            className='userUpdateInput' />
                        </div>
                        <label className='title_edit'>UserName:</label>
                        <input type='text'
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder={findEditUser.userName}
                          className='userUpdateInput' />
                      </div>
                      <div className='userUpdateItem'>
                        <label className='title_edit'  >Age:</label>
                        <input type='number'
                          value={age}
                          placeholder={findEditUser.age}
                          onChange={(e) => setAge(e.target.value)}
                          className='userUpdateInput' />
                      </div>
                      <button className='listUser_btn ' onClick={hanldeUpdate}>Update</button>
                      <button className='listUser_btn ' onClick={() => navigate(-1)} >cancel</button>
                    </div>
                    <div className='edit_flex_right'>
                      <div className='userUpdate'>
                        <form className='userUpdateForm'>
                          <div className='userUpdateLeft'>

                            <div className='userUpdateItem'>
                              <label className='title_edit'>Email:</label>
                              <input type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={findEditUser.email}
                                className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                              <label className='title_edit' >Phone:</label>
                              <input type='number'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder={findEditUser.phone}
                                className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                              <label className='title_edit'>Address:</label>
                              <input type='tex'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder={findEditUser.address}
                                className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                              <label className='title_edit'>Gender:</label>
                              <select className='userUpdateInput' name='Gender' id='active' value={gender} onChange={(e) => setGender(e.target.value)} >
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                              </select>
                            </div>
                          </div>
                          <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                              <label htmlFor='file'>
                                {avatar.preview ? (<img className=' avatar' src={avatar.preview} alt={id} />)
                                  :
                                  (<img className=' avatar' src={avatar} alt='' />)}
                                <FcUpload className='userUpdateIcon' />
                              </label>
                              <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeAvatar} />
                            </div>
                          </div>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>) : (
                <div className="right_edituser">
                  <div className='right_'>
                    <div className='edit_left'>
                      No thoungth out
                    </div>
                    <div className='edit_right'>

                    </div>
                  </div>
                </div>)}
            </div>
          </div>

        </>
      );
 }
    export default Information;
