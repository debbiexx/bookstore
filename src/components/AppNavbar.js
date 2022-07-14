//original app navbar layout


import React, { useState, useEffect } from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
// import * as Icons from "react-icons/fa";
import { ButtonCart, ButtonSign } from './Button';



export default function AppNavbar () {
    const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
    return (
        <Navbar expand="lg"  className="nav-border px-sm-4">
        <Nav.Link as ={Link} to="/"><img src={logo} alt="logo" className='navbar-logo'/></Nav.Link>
        <ul className='navbar-nav align-items-center'>
            <li className='m-auto'>
                <small className='navbar-text'>Welcome to our bookstore!</small>
            </li>
        </ul>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='navbar-text'>
                    <ButtonCart>
                        <span className='mx-2'>
                        <i className="fa fa-cart-plus" />
                    </span>
                    Home&nbsp;
                    </ButtonCart>
                    </Nav.Link>
                    
                <Nav.Link as={Link} to="/" className='navbar-text'>
                    <ButtonCart>
                    Categories&nbsp;
                    </ButtonCart>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/" className='navbar-text'>
                    <ButtonCart>
                    Best Sellers&nbsp;
                    </ButtonCart>
                    </Nav.Link>
                   
                    <Nav.Link as={Link} to="/register" className='navbar-text'>
                            <ButtonSign>&nbsp;SIGNUP&nbsp; </ButtonSign></Nav.Link>	
                
                    
            </Nav>
        </Navbar.Collapse>
    </Navbar>

    )
  
}
