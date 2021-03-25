import React from 'react';
import NavBar from '../NavBar/Navbar';
import headerStyle from './Header.module.css';

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.headerNav}>
                <NavBar />
            </div>
            <div className={headerStyle.headerContent}>
                <div>
                    <h4 className="text-center text-light">Md. Ariful Haque</h4>
                    <p className="text-center text-light">Blogger, Programmer, Web Developer...</p>
                </div>
            </div> 
        </header>
    );
};

export default Header;