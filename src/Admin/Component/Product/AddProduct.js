import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import imageDefault from '../../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png'
import { add_product } from '../../Redux/Action';


function AddProduct() {
  const [imgProduct, setImgProduct] = useState('');
  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState('');
  const [rest, setRest] = useState('');
  const [detail, setDetail] = useState('');
  const navigate = useNavigate();
  const addProducts = useSelector(state => state.contactProducts)
  const dispatch = useDispatch();

  const data = {
    id: addProducts.length + 1,
    imgProduct,
    nameProduct,
    price,
    total,
    rest,
    detail

  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const hanldeCreate = () => {

    /*   if (!nameProduct || !price || !rest || !total || !rest) {
        return (toast.warning(`Please enter full information !!!`))
      } */
    dispatch(add_product(data));
    toast.success("Thêm sản phẩm mới thành công.")
    navigate(-1);

  }
  const hndaleSubmitForm = (e) => {
    e.preventDefault();
  }
  const hanldeClickAdminHome = () => {
    navigate(-1);
  }
  const hanldeImageProduct = (e) =>{
    const imgProduct= e.target.files[0];
    imgProduct.preview = URL.createObjectURL(imgProduct)
    setImgProduct(imgProduct);
  }
  useEffect(() => {
    return()=>{
      imgProduct && URL.revokeObjectURL(imgProduct.preview)
    }
  },[imgProduct])
  return (
    <div>
      <div className='newUserHome'>
        <div className='newUser'>
          {/*  <div className='newUserItem'>
            {urlLink ? (<img className='userUpdateImg' src={urlLink} alt='a' />) : (<img className='userUpdateImg'  src={imageDefault}   alt='Upload' />)}
            <input placeholder='URL Link' value={urlLink} onChange={(e) => setUrlLink(e.target.value)} />
          </div> */}
          <div className='uploadImageProduct'>
            <label htmlFor='file'>
              {imgProduct.preview ? (<img className=' avatar' src={imgProduct.preview} alt='img' />) :
                (<img className=' avatar' src={imageDefault} />)}
            </label>
            <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeImageProduct} />
          </div>
          <form className='newUserForm' onSubmit={hndaleSubmitForm}  >
            <div className='newUserItem'>
              <label>Name Product</label>
              <input type='text' placeholder='Enter your Name Product' value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Price</label>
              <input type='number' placeholder='00.00' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Total</label>
              <input type='number' placeholder='00.00' value={total} onChange={(e) => setTotal(e.target.value)} />
            </div>

            <div className='newUserItem'>
              <label>Rest</label>
              <input type='number' placeholder='00.00' value={rest} onChange={(e) => setRest(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Detail</label>
              <textarea className='detail_Texttarea' rows='10' placeholder='Description...' value={detail} onChange={(e) => setDetail(e.target.value)} />
            </div>
          </form>
          <button className='listUser_btn btn create' onClick={hanldeCreate} >Create</button>
          <button className='listUser_btn btn' onClick={hanldeClickAdminHome}  > Cancel </button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct