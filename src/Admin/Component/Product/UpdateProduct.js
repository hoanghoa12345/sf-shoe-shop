import React, { useEffect, useState } from 'react';
import '../Style/EditProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import imageDefault from '../../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png'
import { Link, useParams } from 'react-router-dom';
import { MdCloudUpload } from 'react-icons/md'
import { update_product } from '../../Redux/Action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import posterDefault from '../../image/poster.png'

function UpdateProduct() {
  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState('');
  const [rest, setRest] = useState('');
  // const [urlLink, setUrlLink] = useState('');
  const [imgProduct, setImgProduct] = useState('');
  const [detail, setDetail] = useState('');
  const [isForm, setIsForm] = useState(true);
  const navigate = useNavigate();
  const editProducts = useSelector(state => state.contactProducts);
  const dispatch = useDispatch();
  const { id } = useParams();
  const findEditProduct = editProducts.find(editProduct => parseInt(editProduct.id) === parseInt(id));

  const hanldeClickInformation = () => {
    setIsForm(true);

  }
  const hanldeClickInDecripstion = () => {
    setIsForm(false);
  }


  const data = {
    id: parseInt(id),
    imgProduct,
    nameProduct,
    price,
    total,
    rest,
    detail,

  }
  const hanldeClickUpdateProduct = () => {
    dispatch(update_product(data))
    toast.success('Cập nhật dữ liệu thành công.');
    navigate(-1);
  }
  useEffect(() => {
    if (findEditProduct) {
      setImgProduct(findEditProduct.imgProduct)
      setNameProduct(findEditProduct.nameProduct)
      setPrice(findEditProduct.price)
      setTotal(findEditProduct.total)
      setRest(findEditProduct.rest)
      setDetail(findEditProduct.detail)

    }
  }, [findEditProduct])

  //set update image product
  const hanldeImageProduct = (e) =>{
    const imgProduct = e.target.files[0];
    imgProduct.preview=URL.createObjectURL(imgProduct)
    setImgProduct(imgProduct)
  }
  useEffect(() => {
    return () =>{
      imgProduct && URL.revokeObjectURL(imgProduct.preview)
    }
  },[imgProduct])
  return (
    <div className='container_edit'>
      <div className="editProduct">
        <div className="topProduct ">
          <div className='userShowLeft'>
            {imgProduct.preview ? (<img className=' avatar' src={imgProduct.preview } alt={id} />) :(<img className=' avatar' src={imgProduct || imageDefault} alt='b' />)}
            <div className='userShowInforTitle'>
              <h3 className='edit_name'>{findEditProduct.nameProduct}</h3>
              <h6 className='edit_fullname price'>{findEditProduct.price} đ</h6>
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
                <lable className='lable_'>Name:</lable>
                <input className='input_'
                  type='text'
                  placeholder={findEditProduct.nameProduct}
                  value={nameProduct}
                  onChange={(e) => setNameProduct(e.target.value)}
                />
              </div>
              <div className='left-input_'>
                <lable className='lable_'>Price:</lable>
                <input className='input_'
                  type='number'
                  placeholder={findEditProduct.price}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className='left-input_'>
                <lable className='lable_'>Total</lable>
                <input className='input_'
                  type='number'
                  placeholder={findEditProduct.total}
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                />
              </div>
              <div className='left-input_'>
                <lable className='lable_'>Rest</lable>
                <input className='input_'
                  type='number'
                  placeholder={findEditProduct.rest}
                  value={rest}
                  onChange={(e) => setRest(e.target.value)}
                />
              </div>
            </div>
            <div className='right_bottom'>
              <div className='right_body'>
                {/* <div className='right-input_'>
                  <lable className='lable_'>Product Images</lable>
                  <input className='input_'
                    placeholder='Link...'
                    value={urlLink}
                    onChange={(e) => setUrlLink(e.target.value)}
                  />
                </div> */}
                 {/*  {urlLink ? (<img className=' avatar' src={urlLink  } alt={id} />) : (<img className=' avatar' src={findEditProduct.urlLink || imageDefault} alt='b' />)} */}
                <div className='uploadImageProduct'>
                  <label htmlFor='file'>
                    {imgProduct.preview ? (<img className=' avatar' src={imgProduct.preview } alt={id} />):
                    (<img className=' avatar' src={imgProduct || imageDefault} alt={id} />)}
                  </label>
                  <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeImageProduct}  /> 
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
                  placeholder={findEditProduct.detail}
                  value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
              </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default UpdateProduct