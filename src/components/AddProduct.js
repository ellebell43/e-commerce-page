import { motion } from "framer-motion";
import cartIcon from "../images/icon-cart-white.svg";
import plusIcon from "../images/icon-plus.svg";
import minusIcon from "../images/icon-minus.svg";

const AddProduct = (props) => {
  const incrementCount = (num) => {
    if (props.itemAmt + num >= 0) {
      props.setItemAmt(props.itemAmt + num);
    }
  }

  return (
    <div className="addProduct">
      <div className="increment">
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.1 }}
          className="paleHover"
          onClick={() => { incrementCount(-1) }}
        >
          <img src={minusIcon} alt="decrease amount" />
        </motion.button>
        <p className="itemAmt">{props.itemAmt}</p>
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.1 }}
          className="paleHover"
          onClick={() => { incrementCount(1) }}
        >
          <img src={plusIcon} alt="increase amount" />
        </motion.button>
      </div>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="addToCart paleHover">
        <img src={cartIcon} alt="" />
        <p>Add to cart</p>
      </motion.button>
    </div>
  )
}

export default AddProduct;