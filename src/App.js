// styles and packages import
import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// component import
import Nav from "./components/Nav";
import ProductImgs from "./components/ProductImgs";
import AddProduct from "./components/AddProduct";
// images import
import menuIcon from "./images/icon-menu.svg";
import logo from "./images/logo.svg";
import cartIcon from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";

const App = () => {
  let [navVisibility, setNavVisibility] = useState(false);
  let [cartVisibility, setCartVisibility] = useState(false);
  let [cart, setCart] = useState(0);
  let [itemAmt, setItemAmt] = useState(0);
  let [imgIndex, setImgIndex] = useState(0);
  let [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const lightboxClick = () => {
    if (navVisibility) { setNavVisibility(false) }
    if (cartVisibility) { setCartVisibility(false) }

  }

  return (
    <div className="app">
      <header>
        <div className="navLogoContainer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="menuBtn mobileElement"
            onClick={() => { setNavVisibility(!navVisibility) }}
          >
            <img src={menuIcon} alt="menu" />
          </motion.button>
          <img src={logo} alt="sneakers logo" className="logo" />
          <Nav navVisibility={navVisibility} setNavVisibility={setNavVisibility} width={width} />
        </div>
        <div className="profileCartContainer">
          <motion.button whileHover={{ scale: 1.1 }}>
            <img src={cartIcon} alt="your cart" />
          </motion.button>
          <img src={avatar} alt="your avatar" className="avatar" />
        </div>
      </header>
      <main>
        <ProductImgs imgIndex={imgIndex} setImgIndex={setImgIndex} />
        <div className="productInfo">
          <p className="companyName">SNEAKER COMPANY</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p className="description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          <div className="price">
            <div className="salePrice">
              <p className="price">$125.00</p>
              <p className="sale">%50</p>
            </div>
            <p className="originalPrice">$250.00</p>
          </div>
          <AddProduct cart={cart} addCart={cart} itemAmt={itemAmt} setItemAmt={setItemAmt} />
        </div>
      </main>
      <div
        className={`lightbox ${navVisibility || cartVisibility ? "" : "hidden"}`}
        onClick={lightboxClick}
      />
    </div>
  )
}

export default App;