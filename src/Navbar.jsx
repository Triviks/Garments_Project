import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './assets/css/Nav.css';
import logo from './assets/images/Vector 11.png';
import compname from './assets/images/Logo Text Holtwood font.png';
import oglogo from './assets/images/IMG_20211201_212641_685-removebg-preview.png';
import { performSearch } from './Global';

function Navbar({ activeButton }) {
    return(
        <>
            <nav className="navbar navbar-expand fixed-top">
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="/">
                        <img src={oglogo} width={50} className='oglogo' />
                        <img src={compname} />
                    </a>

                    {/* <span className='logo'><img src={logo} width={120} /></span> */}
                    
                    <div className="navbar-collapse justify-content-center">
                        <ul className="navbar-nav" id="navbarNav">
                            <li className="nav-item">
                                <Link to='/'className={activeButton === 'home' ? 'active nav-link' : 'nav-link'}>
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className={activeButton === 'about' ? 'active nav-link' : 'nav-link'}>
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/productspage" className={activeButton === 'products' ? 'active nav-link' : 'nav-link'}>
                                    Products
                                </Link>
                            </li>

                        </ul>   
                    </div>
                    
                    <div className="col-0 d-flex align-items-baseline search_container">
                        <span className='search_icon ml-5'><ion-icon name="search-sharp"></ion-icon></span>
                        <input type='search' className='searchBox bg-transparent' id="searchInput" onInput={performSearch()}/>
                    </div>



                </div>
            </nav>
            
            {/* <div className='hamburger'>
                <ion-icon name="menu-outline"></ion-icon>
            </div> */}
            
            <div className='hamburger_menu position-sticky'>
                <Link to='/'className={activeButton === 'home' ? 'active nav-link' : 'nav-link'}>
                    Home
                </Link>
                <Link to="/about" className={activeButton === 'about' ? 'active nav-link' : 'nav-link'}>
                    About
                </Link>
                <Link to="/products" className={activeButton === 'products' ? 'active nav-link' : 'nav-link'}>
                    Products
                </Link>

            </div>

            <div className="search_container-sm">
                <span className='search_icon-sm'><ion-icon name="search-sharp"></ion-icon></span>
                <input type='search' className='form-control searchBox-sm bg-transparent' placeholder='Search'/>
            </div>
        </>
    );
}

export default Navbar;