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
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';
import { ToastContainer, toast } from 'react-toastify'

function DetailProduct() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    
    // const cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []

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

        window.scrollTo(0, 0)
    }, [])

    const handleAddToCart = data => {
        const newProduct = {
            id: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            quantity: 1,
            size: 30,
            product: data._id
        }

        dispatch(addToCart(newProduct))
        toast.success('Thêm vào giỏ hàng thành công!')

        // SAVE LOCAL STORAGE
        const cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
        const product = cart.find(item => item.id === newProduct.id && item.size === newProduct.size)
        let newCart

        if(product) {
            newCart = cart.map(item => {
                if(item.id === newProduct.id && item.size === newProduct.size) {
                    item.quantity = parseInt(item.quantity) + 1
                }
                return item
            })
        }
        else {
            newCart = [...cart, newProduct]
        }
        
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    return (
        <div>
            <div className="card-wrapper">
                <div className="card">
                    {data.length === 0 ? (<Loading />) : (data.map(data => {
                        const { _id, price, rating, numReviews, name, image, brand, category, description } = data;
                        return (
                            <div key={_id}>
                                <div className="productDetailUi">
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
                                            <div><button className="btnBuy" onClick={() => handleAddToCart(data)}>Thêm vào giỏ hàng</button></div>
                                            <ToastContainer />
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