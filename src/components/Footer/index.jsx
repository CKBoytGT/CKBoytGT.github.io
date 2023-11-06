import "./index.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaMastodon,
  FaDribbble,
} from "react-icons/fa6";

const Footer = () => {

  return (
    <footer>
      <p>Copyright &#169; 2023 Christina K. Boyt. All rights reserved.</p>
      <ul>
        <li>
          <a
            href="https://github.com/CKBoytGT"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ckboyt/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/CKBoyt" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://mastodon.social/@ckboyt"
            target="_blank"
            rel="noreferrer"
          >
            <FaMastodon />
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/CKBoyt"
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
