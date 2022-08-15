import { motion } from "framer-motion";
import trashIcon from "../images/icon-delete.svg";

const Cart = (props) => {
  const removeItem = (el) => {
    let arr = props.cart.filter(item => item !== el);

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count += arr[i].amount;
    }

    props.setCart(arr);
    props.setCartAmount(count);

  }

  return (
    <div id="cart" className="cart hidden">
      <p className="label">Cart</p>
      {props.cartAmount <= 0 ?
        <div className="cartContent"><p className="emptyCart">Your cart is empty</p></div> :
        props.cart.map((el, i) => {
          return (
            <div className="cartContent" key={i}>
              <div className="cartItem">
                <img className="thumbnail" src={el.product.thumbnail} alt={el.product.name} />
                <div className="item">
                  <p className="itemName">{el.product.name}</p>
                  <p className="price">${el.product.price}.00 x {el.amount} <span className="total">${el.product.price * el.amount}.00</span></p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { removeItem(el) }}
                >
                  <img src={trashIcon} alt="remove item" />
                </motion.button>
              </div>
              <motion.button className="checkout" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Checkout
              </motion.button>
            </div>
          )
        })}
    </div>
  )
}

export default Cart;