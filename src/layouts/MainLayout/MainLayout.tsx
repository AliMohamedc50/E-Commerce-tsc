import { Container } from "react-bootstrap"
import Style from "./style.module.css"
import Header from "@components/common/Header/Header"
import Footer from "@components/common/Footer/Footer"

const {container, wrapper} = Style

function MainLayout() {
  return (
    <Container className={container}>
        <Header />
        <div className={wrapper}></div>
        <Footer />
    </Container>
  )
}

export default MainLayout
