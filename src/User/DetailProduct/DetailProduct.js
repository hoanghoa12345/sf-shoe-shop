import React from 'react';
import './detail.css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import hinh1 from './shoes_images/jordan-1-high-black-white-1.jpg';
import hinh2 from './shoes_images/jordan-2.jpg';
import hinh3 from './shoes_images/jordan-3.jpg';
import hinh4 from './shoes_images/jordan-4.jpg';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function DetailProduct() {
    return (
        <Swiper
            className='swiper container'
            modules={[Navigation, Pagination]}
            loop={true}
            grabCursor={true}
            spaceBetween={50}
            // navigation={true}
            pagination={{ clickable: true }}
        >
            <div>

                <div class="card-wrapper">
                    <div class="card">
                        <div class="product-imgs">
                            <div class="img-display">
                                 <div class="img-showcase">
                                    <img src={hinh1} alt="shoe image" />
                                    <img src={hinh2} alt="shoe image" />
                                    <img src={hinh3} alt="shoe image" />
                                    <img src={hinh4} alt="shoe image" />
                                </div> 
                            </div>
                            <div class="img-select">
                               
                                    <div class="img-item">
                                        <a href="#" data-id="1">
                                            <img src={hinh1} alt="shoe image" />
                                        </a>
                                    </div>
                     

                                <div class="img-item">
                                    <a href="#" data-id="2">
                                        <img src={hinh2} alt="shoe image" />
                                    </a>
                                </div>
                                <div class="img-item">
                                    <a href="#" data-id="3">
                                        <img src={hinh3} alt="shoe image" />
                                    </a>
                                </div>
                                <div class="img-item">
                                    <a href="#" data-id="4">
                                        <img src={hinh4} alt="shoe image" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-content">
                            <h2 class="product-title">nike shoes</h2>
                            <a href="#" class="product-link">visit nike store</a>
                            <div class="product-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span>6.4(22)</span>
                            </div>

                            <div class="product-price">
                                <p class="last-price">Giá cũ: <span>$257.00</span></p>
                                <p class="new-price">Giá mới: <span>$249.00 (5%)</span></p>
                            </div>

                            <div class="product-detail">
                                <h2>Jordan 1 đen trắng: </h2>
                                <p>Với thiết kế thể thao, mạnh mẽ nhưng lại vô cùng hút mắt bởi mọi chi tiết trên đôi giày đều hòa hợp với nhau một cách hoàn hảo: dấu Swoosh đen nổi bật ở cả hai mặt của hông giày, logo Air Jordan ‘winged basketball’ màu trắng huyền thoại nơi cổ giày, lưỡi gà nilon trắng kèm tag có logo Nike Air.</p>
                                <p>Với một đôi giày basic, từ thiết kế đến màu sắc đều khiến bạn có thể dễ dàng phối với mọi phong cách trang phục thì đây chính là đôi giày bạn phải có trong tủ đồ của mình..</p>
                                <ul>
                                    <li>Màu: <span>Đen trắng</span></li>
                                    <li>Mã: <span>NAJ120</span></li>
                                    <li>Thương hiệu: <span>Jorrdan 1 High</span></li>
                                    <li>Khu vực giao hàng: <span>Miễn phí giao hàng toàn quốc</span></li>
                                    <li>Giao hàng: <span>Miễn phí</span></li>
                                </ul>
                            </div>

                            <div class="purchase-info">
                                <input type="number" min="0" value="1" />
                                <button type="button" class="btn">
                                    Mua ngay <i class="fas fa-shopping-cart"></i>
                                </button>
                                <button type="button" class="btn">Liên hệ qua Skype </button>
                            </div>

                            <div class="social-links">
                                <p>Share At: </p>
                                <a href="#">
                                    <FaFacebookF height={32}/>
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <FaFacebookMessenger/>
                                </a>
                                <a href="#">
                                    <FaSkype/>
                                </a>
                                <a href="#">
                                    <FaYoutube/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>        </div></Swiper >
    )
}

export default DetailProduct;