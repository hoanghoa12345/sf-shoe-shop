import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GrUpdate } from 'react-icons/gr';
import '../Style/ProductList.css';
import { delete_product } from '../../Redux/Action';


function ProductList() {

  const [deletes, setDeletes] = useState(false)
  const [deleteId, setDeleteId] = useState(0);
  const productLists = useSelector(state => state.contactProducts);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    setDeleteId(id)
    setDeletes(true)

  }

  const hanldeYes = () => {
    let id = deleteId;
    dispatch(delete_product(id));
    setDeletes(false)
  }

  const handleNo = () => {
    setDeletes(false)
  }

  return (
    <div>
      <div>
        {deletes === true ? (
          <form  className=" product_delete">
            <div className='body_delete' onClick={handleNo} >
              <h2 className='title_deltete'>Are you sure you want to delete!</h2>
              <div className='deletes'>
                <buton className='deleteYes' onClick={() => hanldeYes()}>Yes</buton>
                <buton className='deleteNo' onClick={handleNo}>No</buton>
              </div>
            </div>
          </form>
        ) : (null)}
      </div>
      <Link to='addproduct'><button className='btn_create add'>Add Product</button></Link>
      <table>
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
              <tr key={id}>
                <td>{id}</td>
                <td ><img className='avatar_user ' src={urlLink.preview || urlLink} alt={id} /></td>
                <td >{name}</td>
                <td>{price}</td>
                <td>{total}</td>
                <td>{rest}</td>
                <td>{total - rest}</td>
                <td>
                  <Link to={`information/${id}`}> <button className="btn_edit"  >Edit</button></Link>
                  <button className="btn_delete" value={deletes} onClick={() => handleDeleteProduct(id)}  >Delete</button>
                </td>
              </tr>

            )

          })}
        </tbody></table>
      <div >
        {productLists.length >= 5 ? (
          <div className="center ">
            <div className="pagination ">
              <a>&laquo;</a>
              <a href="#" className="active">{productLists.length}</a>
              <a>&raquo;</a>
            </div>
          </div>) : (null)}
      </div>
    </div>)
}

export default ProductList