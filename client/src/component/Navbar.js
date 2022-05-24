import React from 'react';
import { NavLink, Link } from "react-router-dom";
import {Nav,Navbar, NavDropdown} from "react-bootstrap";
import logo from "../logo.png";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import './NavBar.css';
import {FormattedMessage} from "react-intl";
import lang_logo from '../image/language_logo.png';
import login_logo from '../image/login_logo.png';
import {GrLanguage} from 'react-icons/gr';

const NavBar= ({setLocale}) =>{
    return (
        <Navbar bg="nav_bg" variant="light" sticky="top" expand="lg">
            <Navbar.Brand>
                <Nav.Link as={NavLink} to="/" exact><img class = 'logo' src={logo} alt="logo"/></Nav.Link>
            </Navbar.Brand>
            <NavbarToggle/>
            <Navbar.Collapse>
                <Nav className="container-fluid">
                    <Nav.Link as={NavLink} to ="/about">About Course</Nav.Link>
                    <NavDropdown title="Learning">
                        <NavDropdown.Item as={Link} to ="/learning/lesson1">Lesson1</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to ="/learning/lesson2">Lesson2</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to ="/learning/lesson3">Lesson3</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to ="/learning/lesson4">Lesson4</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to ="/learning/lesson5">Lesson5</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to ="/learning/lesson6">Lesson6</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to ="/challenge">Challenge</Nav.Link>
                    <Nav.Link as={NavLink} to ="/faq">FAQ</Nav.Link>
                    {/*<NavDropdown title="Language" className="ml-auto">*/}
                    <Nav.Link as={NavLink} to ="/login" className="ml-auto">
                        <img src={login_logo} alt="login"className="lang_logo" ></img>
                    </Nav.Link>
                    <NavDropdown title={<GrLanguage/>} >

                    <NavDropdown.Item onClick={()=> setLocale('se')}>Swedish</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item onClick={()=> setLocale('en')}>English</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item onClick={()=> setLocale('zh')}>Chinese</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}
export default NavBar;