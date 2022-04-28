import React, { useEffect, useState } from 'react';
import { GiRunningShoe } from 'react-icons/gi';
import { GrOverview } from 'react-icons/gr';
import { MdCategory } from 'react-icons/md';
import { AiTwotoneStar } from 'react-icons/ai';
import { useParams } from 'react-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getProduct, getProducts } from '../../api/httpRequest';
import Loading from './../components/Loading/index';
import './detail.css';
import { formatPrice } from '../../utils/common';
import { useNavigate } from 'react-router';



function DetailProduct() {
    const [data, setData] = useState([]);
    const [productList, setProductList] = useState([]);
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const fetchProducts = async () => {
        const responseProductList = await getProducts()
        setProductList([...responseProductList.data])

    }


    const { id } = useParams()
    const fetchIdProducts = async () => {
        const response = await getProduct(id)
            .catch(err => {
                console.log('err', err);
            })
        setData([response.data]);
        setSearch(response.data.brand)
    }
    console.log(search);
    useEffect(() => {
        fetchProducts()
        fetchIdProducts()
    }, [])


    return (
        <div>
            <div className="card-wrapper">
                <div className="card">
                    {data.length === 0 ? (<Loading />) : (data.map(data => {
                        const { _id, price, rating, numReviews, name, image, brand, category, description } = data;
                        return (
                            <div className="productDetailUi" key={_id}>
                                <div className="productLeft">
                                    <img className="productImage" src={image} alt="" />
                                </div>
                                <div className="productRight">
                                    <div className="productBod">
                                        <p className="productName">{name}</p>
                                        <p className="productprice">{formatPrice(price)} </p>
                                        <MdCategory className='iconBrand' /><span className="productBrand">{brand}</span>
                                        <p className="productBrand">  <AiTwotoneStar className='iconBrand' />{category}</p>
                                        <p className="productBrand">  <GrOverview className='iconBrand' />{numReviews}</p>
                                        <p className="productBrand">  <AiTwotoneStar className='iconBrand' />{rating}</p>
                                        <p className="productDecrip">{description}</p>
                                        <div><button className="btnBuy">Thêm vào giỏ hàng</button></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }))}

                    <div >
                        <span className="titleDetail">Sản phẩm tương tự</span>
                        <div className="containerDetail">
                            {productList.filter((data) => {
                                if (data.brand.toLowerCase().includes(search.toLocaleLowerCase())) { return data }
                            }).map(data => {
                                const { _id, price, rating, numReviews, name, image, brand, category, description } = data;
                                return (
                                    <form className="detailProduct__" key={_id} >
                                        <div>
                                            <img className="imgDetailProduct" src={data.image} />
                                            <h4 className="detailName">{name}</h4>
                                            <h4 className="detailPrice">{formatPrice(price)}</h4>
                                            <button className="btn_detail" onClick={() => navigate(`/detailProduct/${_id}`)}>
                                                Mua Ngay
                                            </button>
                                        </div>
                                    </form>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;