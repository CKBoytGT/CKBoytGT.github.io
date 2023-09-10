/* eslint-disable react/prop-types */
import "./index.css";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({ img, live, gitHub, name, langs }) => {
  const langString = langs.join(" | ");
  return (
    <div className="proj">
      <img src={img} alt={name} />
      <div className="proj-overlay">
        <div className="proj-info">
          <div className="proj-name">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>{" "}
            <a href={gitHub} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="proj-langs">{langString}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
