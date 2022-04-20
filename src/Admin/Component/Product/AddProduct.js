import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import imageDefault from '../../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png'
import { add_product } from '../../Redux/Action';


function AddProduct() {

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [decription, setDecription] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const navigate = useNavigate();
  const addProducts = useSelector(state => state.contactProducts.products)

  const fetchAddProducts= async ()=>{
    const response = await  axios.post("https://sf-shoe-shop-be.herokuapp.com/api/products/").catch(err => 
    console.log('err',err))
    dispatch(add_product(response.data))
  }
  const dispatch = useDispatch();
 
  useEffect(() => {
    fetchAddProducts()
  },[])
  const data = {
   
    image,
    name,
    price,
    brand,
    category,
    decription

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
    const image= e.target.files[0];
    image.preview = URL.createObjectURL(image)
    setImage(image);
  }
  useEffect(() => {
    return()=>{
      image && URL.revokeObjectURL(image.preview)
    }
  },[image  ])

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
              {image.preview ? (<img className=' avatar' src={image.preview} alt='img' />) :
                (<img className=' avatar' src={imageDefault} />)}
            </label>
            <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeImageProduct} />
          </div>
          <form className='newUserForm' onSubmit={hndaleSubmitForm}  >
            <div className='newUserItem'>
              <label>Name Product</label>
              <input type='text' placeholder='Enter your Name Product' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Price</label>
              <input type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Brand</label>
              <input type='text' placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
            </div>

            <div className='newUserItem'>
              <label>Category</label>
              <input type='text' placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className='newUserItem'>
              <label>Decription</label>
              <textarea className='detail_Texttarea' rows='10' placeholder='Description...' value={decription} onChange={(e) => setDecription(e.target.value)} />
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