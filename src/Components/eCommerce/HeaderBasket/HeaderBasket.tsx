import { useAppSelector } from "@store/hook";
import Logo from "@assets/svg/cart.svg?react"
import style from "./styles.module.css"
import { getCartTotalQuantitySelector } from "@store/cart/selector";

const {basketContainer, basketQuantity} = style;
const HeaderBasket = () => {

  const totalQuantity = useAppSelector(getCartTotalQuantitySelector)

  console.log("render")
  return (
    <div className={basketContainer}>
      <Logo />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  )
}

export default HeaderBasket
