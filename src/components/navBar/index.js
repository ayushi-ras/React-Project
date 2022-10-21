import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
            <Nav>
                <img src="https://www.logodesign.net/images/tutorials/restaurent-logos/restaurant-logo-designer-needs.png" alt="logo" height={78} width={130}/>
                <NavLogo to ="/React-project" >
                    FOOD CIRCLE
                </NavLogo>
                
                <Bars />

                <NavMenu>
                    <NavLink
                        to="/React-project"
                        activeStyle={{ color: 'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeStyle={{ color: 'black' }}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activeStyle={{ color: 'black' }}
                    >
                        Contact
                    </NavLink>

                    <NavBtn>
                        <NavBtnLink to="/Order-Now">ORDER NOW</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;
