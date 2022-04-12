import { useMemo } from 'react';
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai';
import { RiSubtractLine } from 'react-icons/ri';
import './style.scss';

function Cart() {
    const cartList = [
        {
            id: 1,
            name: '639 Denim – Deep Blue SS2022',
            urlImage: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 500000,
            quantily: 1,
            size: 32,
        },
        {
            id: 2,
            name: '639 Denim – Smoked Grey SS2022',
            urlImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 550000,
            quantily: 3,
            size: 30,
        },
        {
            id: 3,
            name: '639 Essential Denim – Dust Blue',
            urlImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 530000,
            quantily: 2,
            size: 28,
        },
    ]

    const totalPrice = useMemo(() => cartList.reduce((total, item) => total + (item.quantily * item.price), 0), [cartList])

    return ( 
        <div className="cart container">
            <div className="cart__title">
                <h4>Sản phẩm</h4>
                <h4>Giá</h4>
                <h4>Số lượng</h4>
                <h4>Size</h4>
                <h4>Tổng</h4>
            </div>

            {
                cartList.length > 0 ? (
                    <>
                        <div className="cart__list">
                            {
                                cartList.map(item => (                                  
                                    <div className='cart__item' key={item.id}>
                                        <div className="cart__infor">
                                            <img src={item.urlImage} className="cart__image" alt={item.name} />
                                            <h4 className="cart__name">{item.name}</h4>
                                        </div>
                                        <div className="cart__price cart__row">
                                            <h5 className='cart__note'>Giá: </h5>
                                            <span className="cart__price-number">{item.price}</span>
                                        </div>
                                        <div className="cart__quantily cart__row">
                                            <h5 className='cart__note'>Số lượng: </h5>
                                            <div className="cart__quantily-wrap">
                                                <RiSubtractLine 
                                                    className='cart__reduce cart__icon' 
                                                />
                                                <span className="cart__quantily-number">{item.quantily}</span>
                                                <AiOutlinePlus 
                                                    className='cart__increase cart__icon'
                                                />
                                            </div>
                                        </div>
                                        <div className="cart__size cart__row">
                                            <h5 className='cart__note'>Size: </h5>
                                            <span className="cart__size-nuumber">{item.size}</span>
                                        </div>
                                        <div className="cart__total cart__row">
                                            <h5 className='cart__note'>Tổng:</h5>
                                            <span className="cart__total-number">{item.price * item.quantily}</span>
                                        </div>
                                        <AiFillDelete 
                                            className='cart__remove cart__icon' 
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        <div className="cart__bottom">
                            <div className="cart__bottom-total">
                                <h4>Tổng tiền:</h4>
                                <span>{totalPrice}</span>
                            </div>
                            <button className="cart__payment">Tiến hành thanh toán</button>
                            <button className="cart__buymore">Mua thêm sản phẩm khác</button>
                        </div>
                    </>
                ) : (
                    <div className='cart__empty'>
                        <h2 className='cart__mess'>Chưa có sản phẩm nào trong giỏ hàng!</h2>
                        <button className="cart__back">Quay trở lại cửa hàng</button>
                    </div>
                )
            }
        </div>
     );
}

export default Cart;