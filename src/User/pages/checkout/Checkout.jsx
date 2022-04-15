import React, { useState, useEffect } from "react";
import "./Checkout.scss";
const Checkout = () => {
  const [provinces, setProvinces] = useState({});
  const [districts, setDistricts] = useState([]);
  const [formData, setFormData] = useState({
    address: "",
    district: "",
    email: "",
    fullname: "",
    phone_number: "",
    province: "",
    ward: "",
  });
  useEffect(() => {
    const fetchProvinces = async () => {
      const data = await (
        await fetch(
          "https://gist.githubusercontent.com/cuduy197/11c93e2ab10eeff1d4cd9185ec29fc0a/raw/22b2d484f7a06d59aea63b08d7fe4cf042668a66/districts_vn.json"
        )
      ).json();
      setProvinces(data);
    };
    fetchProvinces();
  }, []);
  const handleCityChange = (e) => {
    let provinceName = e.target.value;
    setFormData({ ...formData, province: provinceName });
    let districtsObj = Object.values(provinces).filter(
      (item) => item.name === provinceName
    )[0].districts;
    setDistricts(Object.values(districtsObj));
  };
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
          <div className="column mt-60 mb-60">
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
                <div className="row">
                  <div className="column form-row">
                    <input
                      type="text"
                      name="coupon_code"
                      className="input-text"
                      placeholder="Mã giảm giá của bạn"
                    />
                  </div>
                  <div className="column">
                    <button
                      type="submit"
                      className="button"
                      name="apply_coupon"
                      style={{ width: "80px" }}
                    >
                      Áp dụng
                    </button>
                  </div>
                </div>
              </form>
              <form className="checkout row mt-60 mb-60">
                <div className="column">
                  <div className="customer_details">
                    <h3>Thông tin giao hàng</h3>
                    <div className="field-wrapper">
                      <div className="form-row">
                        <label htmlFor="fullname">Họ và tên</label>
                        <input
                          type="text"
                          className="input-text"
                          name="billing_fullname"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullname: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="phonenumber">Số điện thoại</label>
                        <input
                          type="tel"
                          className="input-text"
                          name="billing_phonenumber"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone_number: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="email">Địa chỉ email</label>
                        <input
                          type="email"
                          className="input-text"
                          name="billing_email"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="city">Tỉnh/Thành phố</label>
                        <select
                          type="text"
                          className="input-text"
                          id="city"
                          name="billing_city"
                          onChange={handleCityChange}
                        >
                          {Object.values(provinces).map((item, i) => (
                            <option key={i}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-row">
                        <label htmlFor="district">Quận/Huyện</label>
                        <select
                          type="text"
                          id="district"
                          className="input-text"
                          name="billing_district"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              district: e.target.value,
                            })
                          }
                        >
                          {districts.map((item) => (
                            <option>{item}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-row">
                        <label htmlFor="ward">Xã/Phường/thị trấn</label>
                        <input
                          type="text"
                          id="ward"
                          className="input-text"
                          name="billing_ward"
                          onChange={(e) =>
                            setFormData({ ...formData, ward: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-row">
                        <label htmlFor="address">Địa chỉ</label>
                        <input
                          type="text"
                          className="input-text"
                          name="billing_address"
                          placeholder="Địa chỉ"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
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
                <div className="column">
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
                        <td>Giày nam (1)</td>
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
                        <span>Thanh toán sau khi nhận hàng (COD)</span>

                        <div>
                          <img
                            src="https://www.viettelidc.com.vn/Themes/itmetech/img/cash@2x.png"
                            alt="cash"
                            height="32"
                            width="64"
                          />
                        </div>
                      </li>
                      <li>
                        <span>Thanh toán bằng ví điện tử</span>

                        <div>
                          <img
                            src="https://www.viettelidc.com.vn/Themes/itmetech/img/group-3@2x.png"
                            height="32"
                            width="64"
                            alt="vnpay"
                          />
                        </div>
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
                    <button
                      type="button"
                      onClick={() => console.log(formData)}
                      className="place-order button"
                    >
                      Đặt hàng
                    </button>
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
