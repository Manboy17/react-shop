import React from "react";
import "./Header.css";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import user from "../../assets/images/user-icon.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/shop",
    display: "Shop",
  },
  {
    path: "/cart",
    display: "Cart",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickuHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickuHeaderFunction();

    return () => {
      window.removeEventListener("scroll", stickuHeaderFunction);
    };
  });

  const menuToggle = () => toggleRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo" onClick={() => navigate("/home")}>
              <img src={logo} alt="logo" />
              <div>
                <h1>Blowmind</h1>
              </div>
            </div>

            <div className="navigation" ref={toggleRef} onClick={menuToggle}>
              <ul className="menu">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="cart__icon">
                <i
                  onClick={() => navigate("/cart")}
                  class="ri-shopping-cart-2-line"
                ></i>
                <div className="badge">{totalQuantity}</div>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={user} alt="user" />
              </span>
              <div className="mobile__menu" onClick={menuToggle}>
                <span>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
