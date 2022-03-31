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
                  <div className="message_box color-info">
                    <ol>
                      <li>
                        Quý khách vui lòng kiểm tra lại kỹ một lần nữa{" "}
                        <strong>Thông tin giao hàng</strong> trước khi bấm nút{" "}
                        <strong>Đặt hàng.</strong>
                      </li>
                      <li>
                        Nhân viên Shop sẽ xác nhận đơn hàng trong vòng tối đa 4
                        giờ làm việc (không kể Chủ nhật và Ngày lễ).
                      </li>
                    </ol>
                    <p>
                      <ul>
                        <li>
                          Điện thoại đặt hàng nhanh: 1800.6879 (miễn cước)
                        </li>
                        <li>Email: cskh@shoeshop.com.vn</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  style={{ marginLeft: "20px", width: "500px" }}
                >
                  <h3>Chi tiết đơn hàng</h3>
                  <table className="shop_table">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Tạm tính</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Giày nam</td>
                        <td>500.000₫</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>
                          <b>Tạm tính</b>
                        </td>
                        <td>500.000₫</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Giao hàng</b>
                        </td>
                        <td>Miễn phí</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Tổng</b>
                        </td>
                        <td>500.000₫</td>
                      </tr>
                    </tfoot>
                  </table>

                  <div className="checkout-payment">
                    <ul className="payment_method">
                      <li>
                        Thanh toán sau khi nhận hàng (COD){" "}
                        <img
                          src="https://www.viettelidc.com.vn/Themes/itmetech/img/cash@2x.png"
                          alt="cash"
                          height="32"
                        />
                      </li>
                      <li>
                        Thanh toán bằng ví điện tử{" "}
                        <img
                          src="https://www.viettelidc.com.vn/Themes/itmetech/img/group-3@2x.png"
                          height="32"
                          alt="vnpay"
                        />
                      </li>
                    </ul>
                    <div className="payment_box">
                      <p>
                        Tất cả đơn hàng từ Shoe Shop đều hỗ trợ thử sản phẩm
                        trước khi thanh toán. <br />
                        Nếu không vừa size hoặc không ưng ý, vui lòng gửi trả
                        lại nhân viên giao nhận mà không phát sinh thêm bất kỳ
                        chi phí nào.
                      </p>
                    </div>
                    <button className="place-order button">Đặt hàng</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
