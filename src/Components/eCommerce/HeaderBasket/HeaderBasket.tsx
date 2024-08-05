import { useAppSelector } from "@store/hook";
import Logo from "@assets/svg/cart.svg?react"
import style from "./styles.module.css"

const {basketContainer, basketQuantity} = style;
const HeaderBasket = () => {
  
  const cartItems = useAppSelector((state) => state.Cart.items)
  
  const totalQuantity = Object.values(cartItems).reduce((accumulator, currentValue) => accumulator + currentValue, 0 )
  return (
    <div className={basketContainer}>
      <Logo />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  )
}

export default HeaderBasket
