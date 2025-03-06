import "./index.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaBluesky,
  FaCodepen,
  FaDribbble,
} from "react-icons/fa6";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright &#169; 2023-{year} Christina K. Boyt. All rights reserved.</p>
      <ul>
        <li>
          <a
            href="https://github.com/CKBoytGT"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ckboyt/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://bsky.app/profile/ckboyt.com"
            aria-label="Bluesky"
            target="_blank"
            rel="noreferrer"
          >
            <FaBluesky />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/CKBoyt"
            aria-label="CodePen"
            target="_blank"
            rel="noreferrer"
          >
            <FaCodepen />
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/CKBoyt"
            aria-label="Dribbble"
            target="_blank"
            rel="noreferrer"
          >
            <FaDribbble />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
