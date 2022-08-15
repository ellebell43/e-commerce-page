import { motion } from "framer-motion";
import cartIcon from "../images/icon-cart-white.svg";
import plusIcon from "../images/icon-plus.svg";
import minusIcon from "../images/icon-minus.svg";

import thumbnail from "../images/image-product-1-thumbnail.jpg";

const AddProduct = (props) => {
  class Product {
    constructor(name, price, thumbnail, id) {
      this.name = name;
      this.price = price;
      this.thumbnail = thumbnail;
      this.id = id;
    }
  }

  let sneakers = new Product("Fall Limited Addition Sneakers", 125, thumbnail, 123);

  const incrementCount = (num) => {
    if (props.itemAmt + num >= 0) {
      props.setItemAmt(props.itemAmt + num);
    }
  }

  const addToCart = (item, amount) => {
    if (amount === 0) { return false; }
    let arr = props.cart;
    let newCartItem = { product: item, amount: amount }

    let itemInCart = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].product.id === newCartItem.product.id) {
        itemInCart = true;
        arr[i].amount += amount;
      }
    }

    if (!itemInCart) {
      arr.push(newCartItem);
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count += arr[i].amount;
    }

    let button = document.getElementById("addToCart");
    button.innerHTML = "<p>Success!</p>"
    setTimeout(() => {
      button.innerHTML =
        `<img src=${cartIcon} alt='' />
          <p>Add to cart</p>`;
    }, 1500);

    props.setCartAmount(count);
    props.setCart(arr);
    props.setItemAmt(0);
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
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="addToCart paleHover"
        id="addToCart"
        onClick={() => { addToCart(sneakers, props.itemAmt) }}
      >
        <img src={cartIcon} alt="" />
        <p>Add to cart</p>
      </motion.button>
    </div>
  )
}

export default AddProduct;