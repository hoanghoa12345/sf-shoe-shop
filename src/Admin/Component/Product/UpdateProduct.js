import React, { useEffect, useState } from 'react';
import '../Style/EditProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { MdCloudUpload } from 'react-icons/md'
import { update_product } from '../../Redux/Action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import posterDefault from '../../image/poster.png'

function UpdateProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState('');
  const [rest, setRest] = useState('');
  const [urlLink, setUrlLink] = useState('');
  const [imageproduct, setImgproduct] = useState('');
  const [detail, setDetail] = useState('');
  const [isForm, setIsForm] = useState(true);
  const navigate = useNavigate();
  const editProducts = useSelector(state => state.contactProducts);
  const dispatch = useDispatch();
  const { id } = useParams();
  const findEditProduct = editProducts.find(editProduct => editProduct.id === parseInt(id));

  const hanldeClickInformation = () => {
    setIsForm(true);

  }
  const hanldeClickInDecripstion = () => {
    setIsForm(false);
  }
  const hanldeImageProduct = (e) => {
    const imageproduct = e.target.files[0];
    imageproduct.preview = URL.createObjectURL(imageproduct)
    setImgproduct(imageproduct)

  }
  useEffect(() => {
    return () => {
      imageproduct && URL.revokeObjectURL(imageproduct.preview)
    }
  }, [imageproduct])

  const data = {
    id: parseInt(id),
    urlLink,
    imageproduct,
    name,
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
      setUrlLink(findEditProduct.urlLink)
      setName(findEditProduct.name)
      setPrice(findEditProduct.price)
      setTotal(findEditProduct.total)
      setRest(findEditProduct.rest)
      setDetail(findEditProduct.detail)

    }
  }, [findEditProduct])
  return (
    <div className='container_edit'>
      <div className="editProduct">
        <div className="topProduct ">
          <div className='userShowLeft'>
            <img className="edit_avatar" src={findEditProduct.urlLink} />
            <div className='userShowInforTitle'>
              <h3 className='edit_name'>{findEditProduct.name}</h3>
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
                  placeholder={findEditProduct.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <div className='right-input_'>
                  <lable className='lable_'>Product Images</lable>
                  <input className='input_'
                    placeholder='Link...'
                    value={urlLink}
                    onChange={(e) => setUrlLink(e.target.value)}
                  />
                </div>
                <div className='uploadImageProduct'>
                  {urlLink ? (<img className=' avatar' src={urlLink} alt={id} />) : (<img className=' avatar' src={findEditProduct.urlLink} alt='b' />)}
                  {/*  <label htmlFor='file'>
                    <MdCloudUpload className='iconUpload' />
                    {imageproduct.preview || urlLink ? (<img className=' avatar' src={imageproduct.preview || urlLink} alt={id} />)
                    (<img className=' avatar' src={findEditProduct.urlLink} />)}
                  </label>
                  <input type='file' id='file' style={{ display: 'none' }} onChange={hanldeImageProduct} /> */}
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