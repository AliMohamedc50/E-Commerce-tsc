// import Logo from "../../../assets/svg/cart.svg?react"
import Logo from "@assets/svg/cart.svg?react"
import style from "./styles.module.css"

const {basketContainer, basketQuantity} = style;
const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo />
      <div className={basketQuantity}>0</div>
    </div>
  )
}

export default HeaderBasket
