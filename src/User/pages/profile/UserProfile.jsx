import React, { useState } from 'react'
import './UserProfile.scss'
import { MdOutlineClose } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
const UserProfile = () => {
    const [open, setOpen] = useState(false)
    const [editUser, setEditUser] = useState({
        email: '',
        name: '',
        password: '',
        confirmed_password: ''
    })
    const profile = {
        name: 'Test User',
        username: 'testuser',
        email: 'testuser@gmail.com',
        address: '12 Science Avenue, Ghềnh Ráng, Qui Nhơn, Bình Định',
        imageUrl:
            'https://th.bing.com/th/id/OIP.udIfmXkDTzwuDF4YKPHBPgHaHk?pid=ImgDet&rs=1',
        phone_number: '09459***789'
    }
    const openModalEdit = () => {
        setEditUser({
            email: profile.email,
            name: profile.name,
            password: '',
            confirmed_password: ''
        })
        setOpen(true)
    }
    const submitHandler = e => {
        e.preventDefault()
        toast.success('Cập nhật thông tin thành công')
        setOpen(false)
    }
    return (
        <div className="profile container">
            <ToastContainer />
            <aside className="profile__sidebar">
                <div className="profile__avatar">
                    <img
                        src={profile.imageUrl}
                        className="avatar__image"
                        alt=""
                    />
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
                                <span>Họ và tên:</span>{' '}
                                <span>{profile.name}</span>
                            </li>
                            <li>
                                <span>Email:</span> <span>{profile.email}</span>
                            </li>
                            <li>
                                <span>Địa chỉ:</span>{' '}
                                <span>{profile.address}</span>
                            </li>
                            <li>
                                <span>Số điện thoại:</span>{' '}
                                <span>{profile.phone_number}</span>
                            </li>
                        </ul>
                        <div className="profile__box__button">
                            <button
                                onClick={openModalEdit}
                                type="buttons"
                                className="btn btn-primary w-60"
                            >
                                Cập nhật thông tin
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            {open && (
                <>
                    <div className="details-modal-overlay"></div>
                    <div className="details-modal">
                        <div className="details-modal-title">
                            <h1>Cập nhật thông tin cá nhân</h1>
                            <button
                                type="button"
                                className="details-modal-close"
                                onClick={() => setOpen(false)}
                            >
                                <MdOutlineClose size="20" />
                            </button>
                        </div>

                        <div className="details-modal-content">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        onChange={e =>
                                            setEditUser({
                                                ...editUser,
                                                email: e.target.value
                                            })
                                        }
                                        value={editUser.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        onChange={e =>
                                            setEditUser({
                                                ...editUser,
                                                name: e.target.value
                                            })
                                        }
                                        value={editUser.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        onChange={e =>
                                            setEditUser({
                                                ...editUser,
                                                password: e.target.value
                                            })
                                        }
                                        value={editUser.password}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmed_password">
                                        Confirmed password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmed_password"
                                        id="confirmed_password"
                                        placeholder="Confirmed password"
                                        onChange={e =>
                                            setEditUser({
                                                ...editUser,
                                                confirmed_password:
                                                    e.target.value
                                            })
                                        }
                                        value={editUser.confirmed_password}
                                    />
                                </div>
                                <div className="button-group">
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="btn-outline"
                                        type="button"
                                    >
                                        Đóng
                                    </button>
                                    <button
                                        className="btn-primary"
                                        type="submit"
                                    >
                                        Lưu thay đổi
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default UserProfile
