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
          <li className="Dashboard_main">
             -- MAIN
            </li>
            <li className="Dashboard_Li">
              <NavLink
                to=""
                style={{ textDecoration: "none" }}
                activeclassname="Dashboard_Item"
              >
                <AiOutlineHome className="Dashboard_Icon " /> Dashboard
              </NavLink>
            </li>
            <li className="Dashboard_Li">
              <NavLink
                to="search"
                style={{ textDecoration: "none" }}
                activeclassname="Dashboard_Item"
              >
                <BsSearch className="Dashboard_Icon" /> Tìm kiếm
              </NavLink>
            </li>
            <li className="Dashboard_Li">
              <NavLink
                to="userlist"
                style={{ textDecoration: "none" }}
                activeclassname="Dashboard_Item"
              >
                <FaUserSecret className="Dashboard_Icon" /> Người dùng
              </NavLink>
            </li>
            <li className="Dashboard_Li">
              <NavLink
                to="productlist"
                style={{ textDecoration: "none" }}
                activeclassname="Dashboard_Item"
              >
                <AiOutlineShoppingCart className="Dashboard_Icon" /> Sản phẩm
              </NavLink>
            </li>
            <li className="Dashboard_Li">
              <NavLink
                to="about"
                style={{ textDecoration: "none" }}
                activeclassname="Dashboard_Item"
              >
                <FcAbout className="Dashboard_Icon" /> Hổ trợ
              </NavLink>
            </li>        
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
