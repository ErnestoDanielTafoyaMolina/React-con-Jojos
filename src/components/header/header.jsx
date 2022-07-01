import React from "react";
import './header.css';
import { logo } from '../../assets/images/index_images';
const Header = () =>{
    return(<>
        <header>
            <div className="logo md-4">
                <img src={logo} alt="jojo logo" />
            </div>
            <div className="nav md-8">
                <nav>JOJO'S Wiki</nav>
            </div>
        </header>
    </>);
};

export default Header;