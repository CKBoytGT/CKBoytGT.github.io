import "./index.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaMastodon,
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
            href="https://twitter.com/CKBoyt"
            aria-label="X"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://mastodon.social/@ckboyt"
            aria-label="Mastodon"
            target="_blank"
            rel="noreferrer"
          >
            <FaMastodon />
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
