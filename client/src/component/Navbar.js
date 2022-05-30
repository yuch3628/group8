import React from 'react';
import { NavLink, Link } from "react-router-dom";
import {Nav,Navbar, NavDropdown} from "react-bootstrap";
import logo from "../logo.png";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import './NavBar.css';
import {FormattedMessage} from "react-intl";


const NavBar= ({setLocale}) =>{
    return (
        <Navbar bg="nav_bg" sticky="top" expand="lg">
            <Navbar.Brand>
                <Nav.Link as={NavLink} to="/" exact><img className= 'logo' src={logo} alt="logo"/></Nav.Link>
            </Navbar.Brand>
            <NavbarToggle/>
            <Navbar.Collapse>
                <Nav className="container-fluid ">
                    <Nav.Link as={NavLink} to ="/about" className='nav_context'>
                        <FormattedMessage id = "aboutcourse" defaultMessage="About course"/>
                    </Nav.Link>
                    <NavDropdown title={<span className="nav-dropdown">Learning</span>}>
                        <NavDropdown.Item as={Link} to ="/learning/lesson1">
                            <FormattedMessage id = "lesson1" defaultMessage="Supermarket"/>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                         <NavDropdown.Item as={Link} to ="/learning/lesson2">
                             <FormattedMessage id = "lesson2" defaultMessage="Campus"/>
                         </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to ="/learning/lesson3">
                            <FormattedMessage id = "lesson3" defaultMessage="Restaurant"/>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to ="/learning/lesson4">
                            <FormattedMessage id = "lesson4" defaultMessage="Zoo"/>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to ="/learning/lesson5">
                            <FormattedMessage id = "lesson5" defaultMessage="Breakfast"/>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Link} to ="/learning/lesson6">
                            <FormattedMessage id = "lesson6" defaultMessage="Soft drinks"/>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to ="/challenge" className='nav_context'>
                        <FormattedMessage id = "challenge" defaultMessage="Challenge"/>
                    </Nav.Link>
                    <Nav.Link as={NavLink} to ="/faq" className='nav_context'>
                        <FormattedMessage id = "faq" defaultMessage="FAQ"/>
                    </Nav.Link>
                    <NavDropdown title={<span className="nav-dropdown"><FormattedMessage id = "language" defaultMessage="Language"/></span>} align={{ lg: 'end' }} className='ml-auto nav_context'>
                        <NavDropdown.Item onClick={()=> setLocale('fr')}>
                            <FormattedMessage id = "french" defaultMessage="French"/>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item onClick={()=> setLocale('en')}>
                            <FormattedMessage id = "english" defaultMessage="English"/>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item onClick={()=> setLocale('zh')}>
                            <FormattedMessage id = "mandarin" defaultMessage="Mandarin"/>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item onClick={()=> setLocale('es')}>
                            <FormattedMessage id = "spanish" defaultMessage="Spanish"/>
                        </NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}
export default NavBar;