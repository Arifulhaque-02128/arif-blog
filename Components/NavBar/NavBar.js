import React from 'react';
import Link from 'next/link';
import navStyle from './Navbar.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {
    return (
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="/">
                <img className={navStyle.logo} src="/logo.png" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle className="btn btn-light mx-3" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link href="/">
                        <Nav.Link className="my-auto mx-4 font-weight-bold text-light" href="/">Home</Nav.Link>
                    </Link>
                    <Link href="/addBlog">
                        <button className="btn btn-dark mx-3"> Add Blog </button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;