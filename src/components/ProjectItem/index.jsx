/* eslint-disable react/prop-types */
import "./index.css";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ img, live, gitHub, name, langs }) => {
  return (
    <div className="proj">
      <img src={img} alt={name} />
      <div className="proj-overlay">
        <div className="proj-info">
          <div className="proj-name">
            <a href={live} target="_blank" rel="noreferrer">
              {name}
            </a>{" "}
            {gitHub !== "none" && (
              <a
                href={gitHub}
                aria-label={name + " on GitHub"}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            )}
          </div>
          <div className="proj-langs">{langs.join(" | ")}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
