import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { formatPrice } from "../../../utils/";
import { removeItem, setQuantity } from "../../redux/actions/cartAction";
import "./style.scss";
import Loading from "../../components/Loading";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [loading, setLoading] = useState(true)

  const cartList = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
      setTotalPrice(cartList.reduce((total, item) => total + item.quantity * item.price, 0))
  }, [cartList])

  useEffect(() => {
    setTimeout(() => setLoading(false), 800)
  })

  const handleSetQuantity = (id, quantity) => {
    if(quantity >= 1) dispatch( setQuantity({id, quantity}) )
  }

  const handleRemoveItem = id => {
    setLoading(true)
    dispatch( removeItem(id) )
  }

  const handleNavigateShop = () => {
    navigate('/products')
  }

  return (
    !loading ? (
      <div className='cart container'>
        <div className="cart__title">
          <h4>Sản phẩm</h4>
          <h4>Giá</h4>
          <h4>Số lượng</h4>
          <h4>Size</h4>
          <h4>Tổng</h4>
        </div>

        {cartList.length > 0 ? (
          <>
            <div className="cart__list">
              {cartList.map((item) => (
                <div className="cart__item" key={item.id}>
                  <div className="cart__infor">
                    <img
                      src={item.urlImage}
                      className="cart__image"
                      alt={item.name}
                    />
                    <h4 className="cart__name">{item.name}</h4>
                  </div>
                  <div className="cart__price cart__row">
                    <h5 className="cart__note">Giá: </h5>
                    <span className="cart__price-number">{formatPrice(item.price)}</span>
                  </div>
                  <div className="cart__quantily cart__row">
                    <h5 className="cart__note">Số lượng: </h5>
                    <div className="cart__quantily-wrap">
                      <RiSubtractLine 
                        className="cart__reduce cart__icon"
                        onClick={() => handleSetQuantity(item.id, item.quantity - 1)} 
                        />
                      <span className="cart__quantily-number">
                        {item.quantity}
                      </span>
                      <AiOutlinePlus 
                        className="cart__increase cart__icon" 
                        onClick={() => handleSetQuantity(item.id, item.quantity + 1)} 
                      />
                    </div>
                  </div>
                  <div className="cart__size cart__row">
                    <h5 className="cart__note">Size: </h5>
                    <span className="cart__size-nuumber">{item.size}</span>
                  </div>
                  <div className="cart__total cart__row">
                    <h5 className="cart__note">Tổng:</h5>
                    <span className="cart__total-number">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                  <AiFillDelete className="cart__remove cart__icon" onClick={() => handleRemoveItem(item.id)} />
                </div>
              ))}
            </div>

            <div className="cart__bottom">
              <div className="cart__bottom-total">
                <h4>Tổng tiền:</h4>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <button className="cart__payment">Tiến hành thanh toán</button>
              <button className="cart__buymore" onClick={handleNavigateShop}>Mua thêm sản phẩm khác</button>
            </div>
          </>
        ) : (
          <div className="cart__empty">
            <h2 className="cart__mess">Chưa có sản phẩm nào trong giỏ hàng!</h2>
            <button className="cart__back" onClick={handleNavigateShop}>Quay trở lại cửa hàng</button>
          </div>
        )}
      </div>
    ) : (
      <Loading />
    )
  );
}

export default Cart;
