import React, { useEffect, useState } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { BiEditAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import imageDefault from '../../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png';
import { delete_product } from '../../Redux/Action';
import Pagination from '../Pagination';
import '../Style/ProductList.css';


function ProductList() {
  const [currentSort, setCurrentSort] = useState('default')
  const [deletes, setDeletes] = useState(false)
  const [deleteId, setDeleteId] = useState(0);
  const [search, setSearch] = useState('')
  const productLists = useSelector(state => state.contactProducts);
  const dispatch = useDispatch();
  //sort


  //phan trang
  const [posts, setPosts] = useState(productLists);
  const [asc, setAsc] = useState('');
  const [des, setDes] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerpage] = useState(8);

  const indexLastPost = currentPage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;
  const currentPost = posts.slice(indexFirstPost, indexLastPost);

  const paginate = pageNumbers => setCurrentPage(pageNumbers);


  //xu ly yes/ no
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


  //Sort products
  const option = ['Sắp xếp Theo Giá ', 'Tăng Dần', 'Giảm Dần'];
  const hanldeAsc = () => {
    productLists.sort((a, b) => { return (a.price - b.price) })
  }

  const hanldeDes = () => {
    productLists.sort((a, b) => { return (b.price - a.price) })
  }
  useEffect(() => {
    setPosts(productLists)
  }, [productLists])
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
        <div className='headerRight'><FaSearch className='iconSearch' />
          <input className='inputSearchProduct' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} disabled={productLists.length === 0} />
        </div>
        <select className='sortProduct' name='sort' id='active' onChange={(e) => setCurrentSort(e.target.value)} disabled={productLists.length === 0}>
          <option>Sắp Xếp theo Giá: </option>
          <option value={posts} onClick={hanldeAsc}>Tăng Dần</option>
          <option value={posts} onClick={hanldeDes}>Giảm Dần</option>
        </select>
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <div className="productContainer" >
        <div className="productBody">
          {productLists.length !== 0 ? (currentPost.filter((data) => {
            if (search == '') {
              return data
            } else if (data.nameProduct.toLowerCase().includes(search.toLowerCase()) || data.price.includes(search)) {
              return data
            }
          })
            .map((productList, index) => {
              const { id, imgProduct, nameProduct, price, total, rest } = productList;
              return (
                <div className="productList" key={index}>
                  <div className="productCard">
                    <div className="productImgBx">
                      <img className="productImg" src={imgProduct.preview || imageDefault} alt={index} />
                    </div>

                    <div className="contentBx ">
                      <div className="productTotal"> Total: {total}  </div>
                      <div className="productTotal"> Rest: {rest}</div>
                    </div>
                    <div className="productRest">
                      {total - rest}
                    </div>
                    <div className="title__">  <h2 className="productTitle">{nameProduct}</h2></div>
                    <h3 className='productPrice'>{price} đ</h3>
                  </div>
                  <div className="productIcon">
                    <div><Link to={`updateproduct/${id}`}><BiEditAlt className='productEdit' /></Link></div>
                    <div><MdDelete className='productDelete' value={deletes} onClick={() => handleDeleteProduct(id)} /></div>
                  </div>
                </div>
              )
            })) : (<div className="productList">No data.</div>)}
        </div>
      </div>

    </div>)
}

export default ProductList