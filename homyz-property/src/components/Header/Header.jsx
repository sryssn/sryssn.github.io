import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

export const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [navbarColor, setNavbarColor] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return {right: !menuOpened && "-100%"}
        }
    }

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setNavbarColor(true)
        } else {
            setNavbarColor(false)
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <section className={navbarColor ? "h-wrapper h-sticky" : "h-wrapper"}>
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} loading="lazy" />
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="#residencies">Residencies</a>
                        <a href="#value">Our Value</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#getstarted">Get Started</a>
                        <button className="button">
                            <a href="mailto:suryo.ssn11@gmail.com">Contact</a>
                        </button>
                    </div>
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                <BiMenuAltRight size={30} />
                </div>
                </OutsideClickHandler>
            </div>
        </section>
    )
}
