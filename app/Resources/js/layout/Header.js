import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Site de tutoriel</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="home"><NavItem>Accueil</NavItem></LinkContainer>
                    <LinkContainer to="page1"><NavItem>Menu 1</NavItem></LinkContainer>
                    <LinkContainer to="page2"><NavItem>Menu 2</NavItem></LinkContainer>
                    <LinkContainer to="students"><NavItem>Elèves</NavItem></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
