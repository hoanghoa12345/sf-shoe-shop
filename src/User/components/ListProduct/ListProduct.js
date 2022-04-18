import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ListProduct.css";
function ListProduct() {
  const navigate = useNavigate();

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

  let products = [
    {
      id: 1,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/1.png",
      categori: 4,
    },
    {
      id: 2,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/2.png",
      categori: 2,
    },
    {
      id: 3,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/3.png",
      categori: 1,
    },
    {
      id: 4,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/4.png",
      categori: 3,
    },
    {
      id: 5,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/5.png",
    },
    {
      id: 6,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/6.png",
    },
    {
      id: 7,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/7.png",
    },
    {
      id: 8,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/8.png",
    },
    {
      id: 9,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/9.png",
    },
    {
      id: 10,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/10.png",
    },
    {
      id: 11,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/11.png",
    },
    {
      id: 12,
      title: " Nike air jordan 1",
      price: "$100",
      image: "../image/12.png",
    },
  ];

  const hanldeClick = (catItem) => {
    const result = products.filter((curData)=>{
      return curData.categori===catItem;
    });
    setProduct(result)
  }
 
  const [product, setProduct] = useState(products)

  return (
    <div className="category container">
      <div className="category__left">
        <h4 className="category__heading">KHÁM PHÁ DANH MỤC</h4>
        <ul className="category__menu">
          {categories.map((item) => {
            const { id } = item
            return (
              <li className="category__item" key={item.id} >
                {/* <Link to={`/category/${item.id}`} onClick={() => hanldeClick('GiàyTây')}>{item.name}</Link> */}
                <span to={`/category/${item.id}`} onClick={() => hanldeClick(item.id)}>{item.name}</span>
              </li>

            )
          }
          )}
        </ul>
      </div>
      <div className="category__right">
        <div className="category__list">
          {product.map((item) => (
            <div className="category__product" key={item.id}>
              <div className="category__image">
                <img src={item.image} alt="" />
              </div>
              <div className="category__name">{item.title}</div>
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
    </div>
  );
}

export default ListProduct;
