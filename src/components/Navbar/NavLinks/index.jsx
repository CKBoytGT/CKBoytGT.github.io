/* eslint-disable react/prop-types */
import "./index.css";

const NavLinks = ({ onPress }) => {
    return (
      <ul >
        <li>
          <a href="#about" onClick={onPress}>
            About
          </a>
        </li>
        <li>
          <a href="#work" onClick={onPress}>
            Work
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onPress}>
            Contact
          </a>
        </li>
      </ul>
    );
}

export default NavLinks;