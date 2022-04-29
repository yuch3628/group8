import React from 'react';
import { NavLink, Link } from "react-router-dom";
import {Nav,Navbar, NavDropdown} from "react-bootstrap";
import logo from "../logo.png";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import './NavBar.css';
import {FormattedMessage} from "react-intl";
// import en from "../i18n/en";
// import se from "../i18n/se";
// import zh from "../i18n/zh";

const NavBar= ({setLocale}) =>{
    return (
        <Navbar bg="nav_bg" variant="light" sticky="top" expand="lg">
            <Navbar.Brand>
                <Nav.Link as={NavLink} to="/" exact><img src={logo}/></Nav.Link>
            </Navbar.Brand>
            <NavbarToggle/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={NavLink} to ="/about">About Course</Nav.Link>
                    <NavDropdown title="Learning">
                        <NavDropdown.Item as={Link} to ="/learning/alllesson">
                            <FormattedMessage id = "alllesson"
                                              defaultMessage="All Lessons "/>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
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
                    <Nav.Link as={NavLink} to ="/setting">Setting</Nav.Link>
                    <Nav.Link as={NavLink} to ="/challenge">Challenge</Nav.Link>
                    <Nav.Link as={NavLink} to ="/faq">FAQ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                <NavDropdown title="Language">
                    <NavDropdown.Item onClick={()=> setLocale('se')}>Swedish</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item onClick={()=> setLocale('en')}>English</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item onClick={()=> setLocale('zh')}>Chinese</NavDropdown.Item>
                </NavDropdown>

            </Nav>
        </Navbar>
    );
}
export default NavBar;