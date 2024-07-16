import { Container } from "react-bootstrap"
import Style from "./style.module.css"
import Header from "../../Components/common/Header/Header"

const {container, wrapper} = Style

function MainLayout() {
  return (
    <Container className={container}>
        <Header />
        <div className={wrapper}></div>
      MainLayout
    </Container>
  )
}

export default MainLayout
