import React from "react";
import "./UserProfile.scss";
const UserProfile = () => {
  const profile = {
    name: "Test User",
    username: "testuser",
    email: "testuser@gmail.com",
    address: "12 Science Avenue, Ghềnh Ráng, Qui Nhơn, Bình Định",
    imageUrl:
      "https://th.bing.com/th/id/OIP.udIfmXkDTzwuDF4YKPHBPgHaHk?pid=ImgDet&rs=1",
    phone_number: "09459***789",
  };
  return (
    <div className="profile container">
      <aside className="profile__sidebar">
        <div className="profile__avatar">
          <img src={profile.imageUrl} className="avatar__image" alt="" />
        </div>
        <h2 className="profile__username">{profile.name}</h2>
        <p className="profile__email">{profile.email}</p>
      </aside>
      <main className="profile__main">
        <div>
          <div className="profile__box">
            <h1>Thông tin cá nhân</h1>
            <ul>
              <li>
                <span>Họ và tên:</span> <span>{profile.name}</span>
              </li>
              <li>
                <span>Email:</span> <span>{profile.email}</span>
              </li>
              <li>
                <span>Địa chỉ:</span> <span>{profile.address}</span>
              </li>
              <li>
                <span>Số điện thoại:</span> <span>{profile.phone_number}</span>
              </li>
            </ul>
            <div className="profile__box__button">
              <button className="btn btn-primary w-60">
                Cập nhật thông tin
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
