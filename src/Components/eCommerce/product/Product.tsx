import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "@store/hook";
import { TProduct } from "@customTypes/Product";
import {addToCart} from "@store/cart/cartSlice"
import { Button, Spinner } from "react-bootstrap";
import styles from "./style.module.css"; 
const { product, productImg } = styles;

const Product = memo(({id, title, price, img, max, quantity} :TProduct ) => {
    const dispatch = useAppDispatch()
    const [isBtnDesable, setIsBtnDesable] = useState(false)

    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false

    useEffect(()=> {
        if (!isBtnDesable) {
            return;
        }
        const debounc = setTimeout(()=> {
            setIsBtnDesable(false)
        },300)
        return () => clearTimeout(debounc)
    },[isBtnDesable])

    const addToCarthandler = () => {
        dispatch(addToCart(id))
        setIsBtnDesable(true)
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
        <span>
            {quantityReachedToMax 
            ? "You reach to the limit" 
            : `You can add ${currentRemainingQuantity} item(s)`}
        </span>
        <Button 
            variant="info"
            disabled={isBtnDesable || quantityReachedToMax}
            style={{ color: "white" }}
            onClick={addToCarthandler}>
                {
                isBtnDesable
                ? <><Spinner animation="border" size="sm"/>loading...</> 
                : quantityReachedToMax 
                ? "Can't add more to cart"
                : "Add to cart" }
        </Button>
        </div>
    );
});

export default Product;