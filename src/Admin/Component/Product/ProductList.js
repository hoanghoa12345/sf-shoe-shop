import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GrUpdate } from 'react-icons/gr';
import '../Style/ProductList.css';







function ProductList() {

  const productLists = useSelector(state => state.contactProducts);

  return (
    <div>
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
            const { id, name, image, price, total, rest, sold } = productList;
            return (
              <tr>
                <td>{id}</td>
                <td ><img className='avatar_user ' src={image.preview || image} alt={id} /></td>
                <td >{name}</td>
                <td>{price}</td>
                <td>{total}</td>
                <td>{rest}</td>
                <td>{sold}</td>
                <td>
                  <Link to={`information/${id}`}> <button className="btn_edit"  >Edit</button></Link>

                  <button className="btn_delete" /* onClick={() => handleDeleteItem(id)} */ >Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody></table>
      {productLists.length >= 5 ? (
      <div className="center pagination_">
        <div className="pagination ">
          <a>&laquo;</a>
          <a href="#" className="active">{productLists.length}</a>
          <a>&raquo;</a>
        </div>
      </div>) : (null)}
   
    </div>)
}

export default ProductList