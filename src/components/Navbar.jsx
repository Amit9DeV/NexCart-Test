import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { useState, useEffect } from "react";

export default function Navbar() {


  // const [bagItemCount, setBagItemCount] = useState(0);

  // // Load items from localStorage when component mounts
  // useEffect(() => {
  //   const bagItemSTR = localStorage.getItem('bagItem');
  //   const bagItems = bagItemSTR ? JSON.parse(bagItemSTR) : [];
  //   setBagItemCount(bagItems.length);
  // }, []);


  return (
    <>
      <section id="header">
        <a href="#">
          {" "}
          <img class="logo" src="./img/logo.png" alt="img" />{" "}
        </a>

        <div id="search">
          <input type="text" placeholder="search" />
          <i><CiSearch /></i>
        </div>

        <div>
          <ul class="nav-item">
            <li>
              <NavLink class="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/About">about</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/Register">Register</NavLink>
            </li>
        

            <div class="user">
              <li>
                <a href="">
                  <i class="fa-regular fa-user">
                  <NavLink to="/login"><FaUserAlt/></NavLink>
                    {/* <FaUserAlt /> */}
                  </i>
                </a>
              </li>
              <div class="dropdown">
                <a href="index.html">
                  <li>LOGOUT</li>
                </a>
                <li>Setting</li>
                <li>Account</li>
              </div>
            </div>

            <li>
              <NavLink to="/Cart">
                {" "}
                <i class="fa-solid fa-cart-shopping">
                  <IoCartOutline />
                </i>
                {/* <span className="bag-item-count">
                     bagItemCount
               </span> */}
              </NavLink>
            </li>

            <a href="#" id="close">
              <i class="fa-solid fa-xmark"></i>
            </a>
          </ul>
        </div>

      </section>
    </>
  );
}
