import React from "react";
import { Navbar, Nav, NavDropdown , Form, FormControl, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

function Header(props){

    function logout(){
        props.setIsAuth(false);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/" class="nav-link active text-white" style={{fontWeight:"bold"}}>
                H A B A R . COM
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/#home" className="nav-link">Home</Link>
                        <Link to="/" className="nav-link">All news</Link>
                        {
                            props.categories.map((item, i) => (
                                <NavLink activeClassName="active-link" className="nav-link" key={i} to={`/categories/${item.id}/`}>{item.name}</NavLink>
                            ))
                        }
                    </Nav>
                    <Nav>
                    { props.isAuth === true ? 
                        <>
                            <Nav.Link href="#deets" >{props.userdata}</Nav.Link>
                            <Nav.Link href="#deets"  onClick={() => logout()}>Logout</Nav.Link>
                        </>:
                         <>
                            <Nav.Link href="#deets">Registration</Nav.Link>
                            <Link to="/login" className="nav-link">Login</Link>
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