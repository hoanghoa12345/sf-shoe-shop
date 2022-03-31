import React from "react";
import "./Checkout.scss";
const Checkout = () => {
  return (
    <div className="content">
      <div className="page-head">
        <div className="container">
          <h1>Đặt hàng</h1>
          <p>
            Nếu bạn thử không vừa size hoặc không ưng ý, đừng ngại trả lại cho
            nhân viên giao hàng. Mọi chi phí sẽ do Shoe Shop thanh toán.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-60 mb-60">
            <div>
              <div className="notices-wrapper">
                <div className="message">
                  <span className="button">Tiếp tục xem sản phẩm</span>{" "}
                  'product.name' đã được thêm vào giỏ hàng
                </div>
              </div>
              <form className="coupon">
                <div className="coupon_label">
                  Vui lòng nhập mã giảm giá của bạn vào ô bên dưới.
                </div>
                <div className="form-row form-row-first">
                  <input
                    type="text"
                    name="coupon_code"
                    className="input-text"
                    placeholder="Mã giảm giá của bạn"
                  />
                </div>
                <div className="form-row form-row-last">
                  <button type="submit" className="button" name="apply_coupon">
                    Áp dụng
                  </button>
                </div>
              </form>
              <form className="checkout mt-60 mb-60">
                <div className="col-md-6">
                  <div className="customer_details">
                    <h3>Thông tin giao hàng</h3>
                    <div className="field-wrapper">
                      <div className="form-row">
                        <label htmlFor="fullname">Họ và tên</label>
                        <input
                          type="text"
                          className="input-text"
                          name="billing_fullname"
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="phonenumber">Số điện thoại</label>
                        <input
                          type="tel"
                          className="input-text"
                          name="billing_phonenumber"
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="email">Địa chỉ email</label>
                        <input
                          type="email"
                          className="input-text"
                          name="billing_email"
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="state">Tỉnh/Thành phố</label>
                        <input
                          type="text"
                          className="input-text"
                          name="billing_state"
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="city">Quận/Huyện</label>
                        <input
                          type="text"
                          className="input-text"
                          name="billing_city"
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="address2">Xã/Phường/thị trấn</label>
                        <input
                          type="text"
                          className="input-text"
                          name="billing_address2"
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="address">Địa chỉ</label>
                        <input
                          type="text"
                          className="input-text"
                          name="billing_address"
                          placeholder="Địa chỉ"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
