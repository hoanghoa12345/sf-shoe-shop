import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Pagination } from 'swiper'
import './ListProduct.css'
import Loading from './../Loading/index'


function ListProduct() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productsTemp, setProductsTemp] = useState([]);

    const categories = [
        {
            id: "Sneaker",
            name: "Giày Tây",
        },
        {
            id: "Shoe",
            name: "Giày Bốt Nam",
        },
        {
            id: "GUCI",
            name: "Giày lười nam",
        },
        {
            id: "Shoe",
            name: "Giày Vans",
        }
    ]

    const getProductAPI = async () => {
        return await axios.get(
            'https://sf-shoe-shop-be.herokuapp.com/api/products/'
        );
    }
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getProductAPI();
            setProducts([...data]);
            setProductsTemp([...data]);
        }
        getProduct();
    }, [])

    // const [pagination, setPagination] = useState({
    //     _page: 1,
    //     _limit: 10,
    //     _totalRows: 11,
    // });
    // function handlePageChange(newPage) {
    //     console.log("new page:", newPage);
    // }
    const hanldeClick = catItem => {
        const result = productsTemp.filter(curData => {
            return curData.category === catItem;
        });
        setProducts(result)
    }
    return (
        <div className="category container">
            <div className="category__left">
                <h4 className="category__heading">KHÁM PHÁ DANH MỤC</h4>
                <ul className="category__menu">
                    <li className="category__item"  >
                        <span to={`/category`} onClick={() => setProducts(productsTemp)}>ALL</span>
                    </li>
                    {categories.map((item, index) => {
                        const { id } = item
                        return (
                            <li className="category__item" key={index} >
                                <span to={`/category/${id}`} onClick={() => hanldeClick(item.id)}>{item.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="category__right">
                <div className="category__list">
                    {products.length !== 0 ? (
                        products.map(item => (
                            <div className="category__product" key={item._id}>
                                <div>
                                    <img
                                        className="category__image "

                                        src={item.image}
                                        alt=""
                                    />
                                </div>

                                <div className="category__name">
                                    {item.name}
                                </div>
                                <div className="category__price">
                                    {item.price}
                                </div>
                                <div className="category__action">
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/detailProduct/${item._id}`
                                            )
                                        }
                                    >
                                        Mua Ngay
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListProduct
