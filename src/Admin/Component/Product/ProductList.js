import React, { useEffect, useState } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { BiEditAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import imageDefault from '../../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png';
import { delete_product, set_product } from '../../Redux/Action';
import Pagination from '../Pagination';
import '../Style/ProductList.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { deleteProduct, getProducts, TOKEN } from '../../../api/httpRequest';
import Loading from '../../Loading';
import { formatPrice } from './../../../utils/common';


function ProductList() {
  const [loading, setLoading] = useState(false);
  const [currentSort, setCurrentSort] = useState('default');
  const [deletes, setDeletes] = useState(false)
  const [deleteId, setDeleteId] = useState(0);
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('');
  const productLists = useSelector(state => state.contactProducts.products);

  const dispatch = useDispatch();
  //products list
  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      dispatch(set_product(response.data))
      setLoading(true);
    } catch (error) { }
  }
  useEffect(() => {
    fetchProducts();
  }, [])



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
  const handleDeleteProduct = (_id) => {
    setDeleteId(_id)
    setDeletes(true)
  }
  const hanldeYes = async () => {
    let _id = deleteId;
    try {
      const response = await deleteProduct(_id, TOKEN)
      setDeletes(false);
      toast.success('Xóa thành công')
      dispatch(delete_product(response.data))
    } catch (error) { }
    fetchProducts()

  }

  const handleNo = () => {
    setDeletes(false)
  }

  useEffect(() => {
    setPosts(productLists)
  }, [fetchProducts])

  //category product
  const categoryProduct = productLists.map((brand) => {
    return (brand.brand)
  })
  let result = [];
  result = categoryProduct.filter(item => { return result.includes(item) ? '' : result.push(item) })
 const dataFilter = productLists.filter( item =>{ 
   if(category === category){return item}
   else if(result.includes(category)){return item}
})
 console.log('réult',result );
console.log('dataFilter',category,dataFilter);
// console.log('brand',dataFilter[''].brand);
// const arry=['1','1','2','3','4','5','6','7','8',''];
  // ary.filter((item, index) => ary.indexOf(item) === index)
  /* arry.reduce((unique,index)=>{ 
    return unique.includes(index) ? unique : [...unique ,index]
  },[]) */
  

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
        <select className='sortProduct' name='sort' id='active' value={category} onChange={(e) => setCategory(e.target.value)} disabled={productLists.length === 0}>
          {result.map(item => {
            return (
              <option value={item} >{item}</option>
              
            )
          })}
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
            } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
              return data
            }
          }).map((productList, index) => {
              const { _id, image, countInStock, rating, sizeList, name, price, numReviews } = productList;
              return (
                <div className="productList" key={index}>
                  <div className="productCard">
                    <div className="productImgBx">
                      <img className="productImg" src={/* image.preview ||  */image || imageDefault} alt={index} />
                    </div>

                    <div className="contentBx ">
                      <div className="productTotal">   Reviews: {numReviews}  </div>
                      <div className="productTotal"> Rating: {rating}</div>
                      <div className='productTotal'>
                        <label> Size: </label>
                        <select name='Active' id='Active'  >
                           {sizeList.map(sizelist => {
                            return (
                              <option value={sizelist}>{sizelist}</option>
                            )
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="productRest">
                      Count In Stock: {countInStock}
                    </div>
                    <div className="title__">  <h2 className="productTitle">{name}</h2></div>
                    <h3 className='productPrice'>{formatPrice(price)} </h3>
                  </div>
                  <div className="productIcon">
                    <div><Link to={`updateproduct/${_id}`}><BiEditAlt className='productEdit' /></Link></div>
                    <div><MdDelete className='productDelete' value={deletes} onClick={() => handleDeleteProduct(_id)} /></div>
                  </div>
                </div>
              )
            })) : (<Loading />)}
        </div>
      </div>

    </div>)
}

export default ProductList
