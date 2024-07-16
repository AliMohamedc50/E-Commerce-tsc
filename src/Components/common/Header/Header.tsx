

import style from "./Styles.module.css" ;

import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import HeaderBasket from "../../eCommerce/HeaderBasket/HeaderBasket";
const { headerContainer, headerLogo } = style;

function Header() {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}><span>Our</span><Badge>Ecom</Badge></h1>
        <HeaderBasket />
      </div>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container >
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Nav >
                <Nav.Link href="#home">Login</Nav.Link>
                <Nav.Link href="#link">Register</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
