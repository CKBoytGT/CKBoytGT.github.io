import "./index.css";
import logo from "../../assets/images/ckboyt-logo.png";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className="sticky">
      <div id="header-border">
        <div id="header-container">
          <div id="site-logo">
            <a href="/" aria-label="homepage of ckboyt.com">
              <img src={logo} alt="C. K. Boyt logo"></img>
            </a>
          </div>
          <button
            id="hamburger"
            className="desktop-hidden-in"
            onClick={toggleHamburger}
            aria-label={hamburgerOpen ? "close the menu" : "open the menu"}
          >
            {hamburgerOpen ? <VscChromeClose /> : <VscMenu />}
          </button>
          <nav className="mobile-hidden-flex">
            <NavLinks />
          </nav>
        </div>
        {hamburgerOpen && (
          <nav className="desktop-hidden-flex">
            <NavLinks onPress={toggleHamburger} />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
