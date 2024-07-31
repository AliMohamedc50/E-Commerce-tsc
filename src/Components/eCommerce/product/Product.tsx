import { Button } from "react-bootstrap";
import styles from "./style.module.css";
const { product, productImg } = styles;
import { TProduct } from "@customTypes/Product";
const Product = ({title, price, img} :TProduct ) => {
  return (
    <div className={product}>
        <div className={productImg}>
        <img
            src={img}
            alt=""
        />
        </div>
        <h2>{title}</h2>
        <h3>{price}EGP</h3>
        <Button variant="info" style={{ color: "white" }}>
            Add to cart
        </Button>
        </div>
    );
};

export default Product;