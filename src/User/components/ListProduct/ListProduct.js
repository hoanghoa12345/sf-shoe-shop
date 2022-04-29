import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Pagination } from 'swiper'

import './ListProduct.css'
import Loading from './../Loading/index'

function ListProduct() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const categories = [
        {
            id: 1,
            name: 'Giày Tây'
        },
        {
            id: 2,
            name: 'Giày Bốt Nam'
        },
        {
            id: 3,
            name: 'Giày lười nam'
        },
        {
            id: 4,
            name: 'Giày Vans'
        }
    ]

    const getProductAPI = async () => {
        return await axios.get(
            'https://sf-shoe-shop-be.herokuapp.com/api/products/'
        )
    }
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await getProductAPI()
            setProducts([...data])
            console.log(data)
        }
        getProduct()
    }, [])

    // const[pagination,setPagination] = useState({
    //   _page: 1,
    //   _limit: 10,
    //   _totalRows: 11,
    // });
    // function handlePageChange(newPage){
    //   console.log("new page:", newPage);
    // }
    const hanldeClick = catItem => {
        const result = products.filter(curData => {
            return curData.categori === catItem
        })
        setProducts(result)
    }
    return (
        <div className="category container">
            <div className="category__left">
                <h4 className="category__heading">KHÁM PHÁ DANH MỤC</h4>
                <ul className="category__menu">
                    <li className="category__item">
                        <span
                            to={`/category`}
                            onClick={() => setProducts('catId')}
                        >
                            ALL
                        </span>
                    </li>
                    {categories.map(item => {
                        const { id } = item
                        return (
                            <li className="category__item" key={id}>
                                <span
                                    to={`/category/${item.id}`}
                                    onClick={() => hanldeClick(item.id)}
                                >
                                    {item.name}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="category__right">
                <div className="category__list">
                    {products.length !== 0 ? (
                        products.map(item => (
                            <div className="category__product" key={item.id}>
                                <div>
                                    <img
                                        className="category__img "
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
