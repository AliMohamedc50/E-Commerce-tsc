import { NavLink } from "react-router-dom"
import HeaderBasket from "@components/eCommerce/HeaderBasket/HeaderBasket";


import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import style from "./Styles.module.css" ;

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
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="Categories">Categories</Nav.Link>
                <Nav.Link as={NavLink} to="Products:s">Products</Nav.Link>
                <Nav.Link as={NavLink} to="about-us">AboutUs</Nav.Link>
            </Nav>
            <Nav >
                <Nav.Link as={NavLink} to="login">Login</Nav.Link>
                <Nav.Link as={NavLink} to="register">Register</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header