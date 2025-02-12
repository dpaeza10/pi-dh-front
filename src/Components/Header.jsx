import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../public/images/Logo.svg';
import '../Styles/header.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <div className='logoContainer'>
                    <img src={Logo} alt="logo" />
                    <h2>Más rápido y <br/>más barato</h2>
                </div>
            </Link>
            <div className='headerButtonsContainer'>
                <button>Login</button>
                <button>Register</button>
            </div>
        </nav>
    );
}

export default Navbar;