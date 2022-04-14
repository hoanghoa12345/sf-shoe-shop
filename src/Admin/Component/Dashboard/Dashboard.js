import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";

import "../Style/Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard_container ">
      <div className="Dashboard_Wapper">
        <div className="Dashboard_Menu">
          <ul className="Dashboard_List">
            <div className="Dashboard_wrap">
              <NavLink
                to="/admin"
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  isActive ? "Dashboard_active" : ""
                }
                end
              >
                <li className="Dashboard_Li">
                  <AiOutlineHome className="Dashboard_Icon " /> Dashboard
                </li>
              </NavLink>
            </div>
            <li className="Dashboard_Li">
              <div className="Dashboard_wrap">
                <NavLink
                  to="search"
                  className={({ isActive }) =>
                    isActive ? "Dashboard_active" : ""
                  }
                  style={{ textDecoration: "none" }}
                >
                  <BsSearch className="Dashboard_Icon" /> Tìm kiếm
                </NavLink>
              </div>
            </li>
            <NavLink
              to="userlist"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "Dashboard_active" : ""
              }
            >
              <li className="Dashboard_Li">
                <FaUserSecret className="Dashboard_Icon" /> Người dùng
              </li>
            </NavLink>

            <NavLink
              to="productlist"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "Dashboard_active" : ""
              }
            >    <li className="Dashboard_Li">
                <AiOutlineShoppingCart className="Dashboard_Icon" /> Sản phẩm
              </li>
            </NavLink>
            <NavLink
              to="about"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "Dashboard_active" : ""
              }
            >
              <li className="Dashboard_Li">
                <FcAbout className="Dashboard_Icon" /> Hổ trợ
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
