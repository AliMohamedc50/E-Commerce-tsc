import { useAppDispatch } from "@store/hook";
import { TProduct } from "@customTypes/Product";
import {addToCart} from "@store/cart/cartSlice"
import { Button } from "react-bootstrap";   
import styles from "./style.module.css"; 
const { product, productImg } = styles;
const Product = ({id, title, price, img} :TProduct ) => {

    const dispatch = useAppDispatch()
    const addToCarthandler = () => {
        dispatch(addToCart(id))
    }
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
        <Button variant="info" style={{ color: "white" }} onClick={addToCarthandler}>
            Add to cart
        </Button>
        </div>
    );
};

export default Product;