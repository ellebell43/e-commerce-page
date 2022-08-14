import { motion } from "framer-motion";
import xIcon from "../images/icon-close.svg";

const Nav = (props) => {
  let listAnimation = {
    show: { x: 260 },
    hidden: { x: 0 }
  }

  let itemAnimation = {
    show: { x: 0, opacity: 1 },
    hidden: { x: -20, opacity: 0 }
  }

  let noAnimation = { show: { x: 0 }, hidden: { x: 0 } }


  return (
    <motion.nav
      variants={props.width < 860 ? listAnimation : noAnimation}
      initial="hidden"
      animate={props.navVisibility ? "show" : "hidden"}
      transition={{
        bounce: .2,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }}
    >
      <motion.button onClick={() => { props.setNavVisibility(!props.navVisibility) }} className="closeBtn mobileElement">
        <img src={xIcon} alt="close nav menu" />
      </motion.button>
      <motion.a variants={props.width < 860 ? itemAnimation : noAnimation}>Collecitons</motion.a>
      <motion.a variants={props.width < 860 ? itemAnimation : noAnimation}>Men</motion.a>
      <motion.a variants={props.width < 860 ? itemAnimation : noAnimation}>Women</motion.a>
      <motion.a variants={props.width < 860 ? itemAnimation : noAnimation}>About</motion.a>
      <motion.a variants={props.width < 860 ? itemAnimation : noAnimation}>Contact</motion.a>
    </motion.nav>
  )
}

export default Nav;