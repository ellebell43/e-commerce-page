import { motion } from "framer-motion";

import nextIcon from "../images/icon-next.svg";
import prevIcon from "../images/icon-previous.svg";

// product images
// full images
import img0 from "../images/image-product-1.jpg";
import img1 from "../images/image-product-2.jpg";
import img2 from "../images/image-product-3.jpg";
import img3 from "../images/image-product-4.jpg";
// thumbnails
import thumb0 from "../images/image-product-1-thumbnail.jpg";
import thumb1 from "../images/image-product-2-thumbnail.jpg";
import thumb2 from "../images/image-product-3-thumbnail.jpg";
import thumb3 from "../images/image-product-4-thumbnail.jpg";
// img arrays
const imgArr = [img0, img1, img2, img3];
const thumbArr = [thumb0, thumb1, thumb2, thumb3];

const ProductImgs = (props) => {
  const changeImg = (num) => {
    let index = props.imgIndex + num;
    if (index > imgArr.length - 1) {
      index = 0;
    } else if (index === -1) {
      index = imgArr.length - 1;
    }

    props.setImgIndex(index);
  }

  const thumbnailClick = (i) => {
    props.setImgIndex(i);
  }

  const toggleGallery = () => {
    if (props.width > 860) {
      document.getElementById("gallery").classList.remove("hidden")
      props.setGalleryVisibility(true);
    }
  }

  return (
    <div
      className={`imgSection ${props.gallery ? "gallery hidden" : ""}`}
      id={props.gallery ? "gallery" : "imgSection"}
    >
      <div className="mainImg">
        <div className="imgBtnContainer" onClick={toggleGallery}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => { changeImg(-1) }}
            className={props.gallery ? "galleryLeftBtn" : "mobileElement"}
          >
            <img src={prevIcon} alt="" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => { changeImg(1) }}
            className={props.gallery ? "galleryRightBtn" : "mobileElement"}
          >
            <img src={nextIcon} alt="" />
          </motion.button>
        </div>
        <img src={imgArr[props.imgIndex]} alt="shoes" />
      </div>
      <div className="thumbnails desktopElement">
        {thumbArr.map((el, i) => {
          let activeClass = props.imgIndex === i ? "active" : "";
          return (
            <motion.img
              whileTap={{ scale: 1.1 }}
              key={i}
              className={`${activeClass} paleHover`}
              src={thumbArr[i]}
              alt="product thumbnail"
              onClick={() => { thumbnailClick(i) }}
            />
          )
        })}
      </div>
    </div>
  )
}
export default ProductImgs;