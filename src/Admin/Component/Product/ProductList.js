import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GrUpdate } from 'react-icons/gr';
import '../Style/ProductList.css';
import imageDefault from '../../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png'
import { delete_product } from '../../Redux/Action';
import { AiFillPlusSquare } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { BsSortNumericDown } from 'react-icons/bs';
import { BsSortNumericDownAlt } from 'react-icons/bs';
import { FcNext } from 'react-icons/fc';
import { toast } from 'react-toastify';


function ProductList() {
  const [currentSort, setCurrentSort] = useState('default')
  const [deletes, setDeletes] = useState(false)
  const [deleteId, setDeleteId] = useState(0);
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(9);
  const productLists = useSelector(state => state.contactProducts);
  const dispatch = useDispatch();

  //Sort
  const sortTypes = {
    Ascending: {
      className: '',
      fn: (a, b) => a.price - b.price
    },
    Decrease: {
      className: '',
      fn: (a, b) => b.price - a.price
    },
    default: {
      className: '',
      fn: (a, b) => a
    }
  }


  const handleDeleteProduct = (id) => {
    setDeleteId(id)
    setDeletes(true)

  }

  const hanldeYes = () => {
    let id = deleteId;
    dispatch(delete_product(id));
    setDeletes(false);
    toast.success('Xóa thành công')
  }

  const handleNo = () => {
    setDeletes(false)
  }
  //edit 
  const handleClickEdit = () => {

  }
  let currentPage = 1;
  let start = 0;
  let end = page;
  return (
    <div>
      <div>
        {deletes === true ? (
          <form className=" product_delete">
            <div className='body_delete' onClick={handleNo} >
              <h2 className='title_deltete'>Are you sure you want to delete!</h2>
              <div className='deletes'>
                <button className='deleteYes' onClick={() => hanldeYes()}>Yes</button>
                <button className='deleteNo' onClick={handleNo}>No</button>
              </div>
            </div>
          </form>
        ) : (null)}
      </div>
      <div className='headerProductList'>
        <div className='headerLeft'>
          <Link to='addproduct'><button className='btn_create add'> <AiFillPlusSquare className='iconNewProduct' />New Product</button></Link>
          <span className='lengthProduct'>  {productLists.length}</span>
        </div>
        <div className='headerRight'>
          <input className='inputSearchProduct' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} disabled={productLists.length === 0} />
        </div>
        <select className='sortProduct' name='sort' id='active' onChange={(e) => setCurrentSort(e.target.value)} >
          <option value='default'>Sort Price Product </option>
          <option value='Ascending'>Ascending</option>
          <option value='Decrease'>Decrease </option>
        </select>
      </div>
      {/*    <table>
        <tbody>
          <tr >
            <th>ID</th>
            <th>Image</th>
            <th>NameProduct</th>
            <th>Price</th>
            <th>Total</th>
            <th>Rest</th>
            <th>Sold</th>
            <th><GrUpdate className='iconBack' /></th>
          </tr>
          {productLists.map((productList) => {
            const { id, name, urlLink, price, total, rest } = productList;
            return (
              <React.Fragment key={id}>
                {id >= start && id <= end ? (
                  <tr key={id}>
                    <td>{id}</td>
                    <td ><img className='avatar_user ' src={urlLink.preview || urlLink || imageDefault} alt={id} /></td>
                    <td >{name}</td>
                    <td>{price}</td>
                    <td>{total}</td>
                    <td>{rest}</td>
                    <td>{total - rest}</td>
                    <td>
                      <Link to={`updateproduct/${id}`}> <button className="btn_edit" onClick={handleClickEdit} >Edit</button></Link>
                      <button className="btn_delete" value={deletes} onClick={() => handleDeleteProduct(id)}  >Delete</button>
                    </td>
                  </tr>
                ) : (null)}
              </React.Fragment>)
          })}
        </tbody></table> */}
      <div className="productContainer" >
        <div className="productBody">
          {productLists.length !== 0 ? (productLists.filter((data) => {
            if (search == '') {
              return data
            } else if (data.nameProduct.toLowerCase().includes(search.toLowerCase())) {
              return data
            }
          })
            .map((productList) => {
              const { id, nameProduct, urlLink, price, total, rest } = productList;
              return (
                <React.Fragment key={id}>
                  {id >= start && id < end ?( <div className="productList" >
                    <div className="productCard">
                      <div className="productImgBx">
                        <img className="productImg" src={urlLink.preview || urlLink || imageDefault} alt='{productList.id}' />
                      </div>
                      <h2 className="productTitle">{nameProduct}</h2>
                      <h3 className='productPrice'>{price} đ</h3>
                      <div className="contentBx ">
                        <div className="productTotal"> Total: {total}  </div>
                        <div className="productTotal"> Rest: {rest}</div>
                      </div>
                      <div className="productRest">
                        {total - rest}
                      </div>
                    </div>
                    <div className="productIcon">
                      <div><Link to={`updateproduct/${id}`}><BiEditAlt className='productEdit' onClick={handleClickEdit} /></Link></div>
                      <div><MdDelete className='productDelete' value={deletes} onClick={() => handleDeleteProduct(id)} /></div>
                    </div>
                  </div>):(null)}
                 
                </React.Fragment>

              )
            })) : (<div className="productList">No data.</div>)}
        </div>
      </div>
      {productLists.length > 8 ? (<div>
        <IoIosArrowBack className='iconProductBack' />
        <FcNext className='iconProductNext' />
      </div>) : (null)}
    </div>)
}

export default ProductList