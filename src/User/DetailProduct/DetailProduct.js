import React, { useEffect, useState } from 'react';
import { GiRunningShoe } from 'react-icons/gi';
import { GrOverview } from 'react-icons/gr';
import { AiTwotoneStar } from 'react-icons/ai';
import { useParams } from 'react-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getProduct } from '../../api/httpRequest';
import Loading from './../components/Loading/index';
import './detail.css';
function DetailProduct() {
    const [data, setData] = useState([]);

    const { id } = useParams()
    const fetchIdProducts = async () => {
        const response = await getProduct(id)
            .catch(err => {
                console.log('err', err);
            })
        setData([response.data]);

    }
    useEffect(() => {
        fetchIdProducts()
    }, [])
    return (
        <div>
            <div ClassName="card-wrapper">
                <div ClassName="card">
                    {data.length === 0 ? (<Loading />) : (data.map(data => {
                        const { _id, price, rating, numReviews, name, image, brand, category, description } = data;
                        return (
                            <div>
                                <div className="productDetailUi" key={_id}>
                                    <div className="productLeft">
                                        <img className="productImage" src={image} alt="" />
                                    </div>
                                    <div className="productRight">
                                        <div className="productBod">
                                            <p className="productName">{name}</p>
                                            <p className="productprice">{price} đ</p>
                                            <GiRunningShoe className='iconBrand' /><span className="productBrand">{brand}</span>
                                            <p className="productBrand">  <GrOverview className='iconBrand' />{numReviews}</p>
                                            <p className="productBrand">  <AiTwotoneStar className='iconBrand' />{rating}</p>
                                            <p className="productDecrip">{description}</p>
                                            <div><button className="btnBuy">Mua Ngay</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }))}

                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;