import "./App.css";
import { motion } from "framer-motion";
// images import
import menuIcon from "./images/icon-menu.svg";
import logo from "./images/logo.svg";
import cartIcon from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";

const App = () => {
  return (
    <div className="app">
      <header>
        <div className="navLogoContainer">
          <motion.button whileHover={{ scale: 1.1 }} className="menuBtn">
            <img src={menuIcon} alt="menu" />
          </motion.button>
          <img src={logo} alt="sneakers logo" className="logo" />
        </div>
        <div className="profileCartContainer">
          <motion.button whileHover={{ scale: 1.1 }}>
            <img src={cartIcon} alt="your cart" />
          </motion.button>
          <img src={avatar} alt="your avatar" className="avatar" />
        </div>
      </header>
    </div>
  )
}

export default App;