import React from "react";
import { Navbar, Nav,NavDropdown , Form, FormControl, Button } from "react-bootstrap";


function Header(props){
    function logout(){
        props.setIsAuth(false);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Habar.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">All News</Nav.Link>
                        <Nav.Link href="#deets">Sports</Nav.Link>
                        <Nav.Link href="#deets">Politcs</Nav.Link>
                        <Nav.Link href="#deets">Business</Nav.Link>
                    </Nav>
                    <Nav>
                    { props.isAuth === true ? 
                        <>
                            <Nav.Link href="#deets" >{props.userdata}</Nav.Link>
                            <Nav.Link href="#deets"  onClick={() => logout()}>Logout</Nav.Link>
                        </>:
                         <>
                            <Nav.Link href="#deets">Registration</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="#deets">RU</Nav.Link>
                            <Nav.Link href="#deets">EN</Nav.Link>
                        </>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}


export default Header;