import React, { useEffect, useState } from 'react';
import '../Style/EditProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import imageDefault from '../../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png'
import { Link, useParams } from 'react-router-dom';
import { MdCloudUpload } from 'react-icons/md'
import { remove_product, select_product, update_product } from '../../Redux/Action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import posterDefault from '../../image/poster.png';
import { getProduct, updateProduct } from '../../../api/httpRequest';
import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVmNzljNjkwZTkyOTY2OTg1ZWY3ZmUiLCJuYW1lIjoiaG9hbmdob2EiLCJlbWFpbCI6ImhvYW5naG9hQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDQ0MDg3MSwiZXhwIjoxNjUwNjEzNjcxfQ.-DIqLP6fPqYW4afVyUbVvRmsAdUL8yGsbaA9S7QR9T0"

function UpdateProduct() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [countInStock, setCountInStock] = useState('');
  // const [urlLink, setUrlLink] = useState('');
  const [isForm, setIsForm] = useState(true);
  const navigate = useNavigate();
  const editProducts = useSelector(state => state.contactProducts.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log('id', id);


  const fetchUpdateProduct = async () => {
    try {
      const response = await getProduct(id)
      dispatch(update_product(response.data))
    } catch (error) { console.log(error) }
  }

  useEffect(() => {
    fetchUpdateProduct()
  }, [])
  const hanldeClickInformation = () => {
    setIsForm(true);

  }
  const hanldeClickInDecripstion = () => {
    setIsForm(false);
  }


  const data = {
    id,
    image,
    name,
    price,
    brand,
    category,
    description,
    countInStock

  }
  const hanldeClickUpdateProduct = async () => {
    try {
      const response = await updateProduct(id, data, token)
      dispatch(update_product(response.data))
      toast.success('Cập nhật dữ liệu thành công.');
      navigate(-1);
    } catch (error) { }
  }
  //set update image product
  const hanldeImageProduct = (e) => {
    const image = e.target.files[0];
    image.preview = URL.createObjectURL(image)
    setImage(image)
  }
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview)
    }
  }, [image])
  return (
    <div className='container_edit'>
      {Object.keys(editProducts).length === 0 ? (
        <div className="loading">
          <div className="loader">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
          </div>
        </div>
      ) : ((
        <div className="editProduct">
          <div className="topProduct ">
            <div className='userShowLeft'>
              {image ? (<img className=' avatar' src={image } alt={id} />) : (<img className=' avatar' src={imageDefault} alt='b' />)}
              <div className='userShowInforTitle'>
                <h3 className='edit_name'>{editProducts.name}</h3>
                <h6 className='edit_fullname price'>{editProducts.price} đ</h6>
              </div>
            </div>
            <div className='left_btn topbtn'>
              <button className='btn_information' onClick={hanldeClickUpdateProduct}>Update</button>
              <button className='btn_overview' value={isForm} onClick={hanldeClickInformation} >Information</button>
              <button className='btn_setting' value={!isForm} onClick={hanldeClickInDecripstion}>Decripstion</button>
            </div>
          </div>
          <div className="bottomProduct"></div>
          {isForm ? (
            <div className='bottom_edit'>
              <div className='left_bottom'>
                <div className='left-input'>
                  <lable className='lable_'>Image:</lable>
                  <input className='input_'
                    type='text'
                    placeholder={editProducts.image}
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <div className='left-input_'>
                    <lable className='lable_'>Name:</lable>
                    <input className='input_'
                      type='text'
                      placeholder={editProducts.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className='left-input_'>
                  <lable className='lable_'>Price:</lable>
                  <input className='input_'
                    type='number'
                    placeholder={editProducts.price}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className='left-input_'>
                  <lable className='lable_'>Count In Stock</lable>
                  <input className='input_'
                    type='number'
                    placeholder={editProducts.countInStock}
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                  />
                </div>
                <div className='left-input_'>
                  <lable className='lable_'>brand</lable>
                  <input className='input_'
                    type='text'
                    placeholder={editProducts.brand}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
                <div className='left-input_'>
                  <lable className='lable_'>Category</lable>
                  <input className='input_'
                    type='number'
                    placeholder={editProducts.category}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
              </div>

              <div className='right_bottom'>

                <div className='right_body'>
                  <div className='uploadImageProduct'>
                    <label htmlFor='file'>
                      {image ? (<img className=' avatar' src={image} alt={id} />) :
                        (<img className=' avatar' src={imageDefault} alt={id} />)}
                    </label>
                    <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeImageProduct} />
                  </div>
                </div>
              </div>
            </div>
          ) : (<div className='bottom_edit'>
            <div className='leftDecreption'>
              <img src={posterDefault} alt='poster' />
            </div>
            <div className='rightDecreption'>
              <div className='left-input_'>
                <label className='lable_' >Decripstion:</label>
                <textarea cols='50' rows='20'
                  type='text'
                  className='ProductUpdatedetail'
                  placeholder={editProducts.description}
                  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
            </div>
          </div>)}
        </div>))}

    </div>
  )
}

export default UpdateProduct