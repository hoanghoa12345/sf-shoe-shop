import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "swiper";
import "./ListProduct.css";

// let products = [
  //   {
  //     id: 1,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/1.png",
  //     categori: 4,
  //   },
  //   {
  //     id: 2,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/2.png",
  //     categori: 2,
  //   },
  //   {
  //     id: 3,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/3.png",
  //     categori: 1,
  //   },
  //   {
  //     id: 4,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/4.png",
  //     categori: 3,
  //   },
  //   {
  //     id: 5,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/5.png",
  //   },
  //   {
  //     id: 6,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/6.png",
  //   },
  //   {
  //     id: 7,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/7.png",
  //   },
  //   {
  //     id: 8,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/8.png",
  //   },
  //   {
  //     id: 9,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/9.png",
  //   },
  //   {
  //     id: 10,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/10.png",
  //   },
  //   {
  //     id: 11,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/11.png",
  //   },
  //   {
  //     id: 12,
  //     title: " Nike air jordan 1",
  //     price: "$100",
  //     image: "../image/12.png",
  //   },
  // ];
function ListProduct() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const categories = [
    {
      id: 1,
      name: "Giày Tây",
    },
    {
      id: 2,
      name: "Giày Bốt Nam",
    },
    {
      id: 3,
      name: "Giày lười nam",
    },
    {
      id: 4,
      name: "Giày Vans",

    },
  ];

  const getProductAPI = async () => {
    return await axios.get('https://sf-shoe-shop-be.herokuapp.com/api/products/');
  }
  useEffect(() => {
    const getProduct = async () =>{
      const {data} = await getProductAPI();
      setProducts([...data]);
    }    
    getProduct();
  }, [])

  // const[pagination,setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 11,
  // });
  // function handlePageChange(newPage){
  //   console.log("new page:", newPage);
  // }
  const hanldeClick = (catItem) => {
    const result = products.filter((curData) => {
      return curData.categori === catItem;
    });
    setProducts(result)
  }
  return (
    <div className="category container">
      <div className="category__left">
        <h4 className="category__heading">KHÁM PHÁ DANH MỤC</h4>
        <ul className="category__menu">
          <li className="category__item"  >
            <span to={`/category`} onClick={() =>setProducts('catId')}>ALL</span>
          </li>
          {categories.map((item) => {
            const { id } = item
            return (
              <li className="category__item" key={item.id} >
                <span to={`/category/${item.id}`} onClick={() => hanldeClick(item.id)}>{item.name}</span>
              </li>
            )
          }
          )}
        </ul>
      </div>
      <div className="category__right">
        <div className="category__list">
          {console.log('product', products)}
          {products.map((item) => (
            <div className="category__product" key={item.id}>
              <div className="category__image">
                <img src={item.image} alt="" />
              </div>
              <div className="category__name">{item.name}</div>
              <div className="category__price">{item.price}</div>
              <div className="category__action">
                <button onClick={() => navigate("/detailProduct")}>
                  Mua Ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
            
            {/* <Pagination 
                pagination={pagination}
                onPageChange={handlePageChange}
              /> */}       
    </div>
  );
}

export default ListProduct;
