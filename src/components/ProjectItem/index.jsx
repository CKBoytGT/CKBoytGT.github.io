/* eslint-disable react/prop-types */
import "./index.css";
import { FaGithub } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";

const ProjectItem = ({ img, live, gitHub, caseStudy, name, langs }) => {
  return (
    <div className="proj">
      <img src={img} alt="" />
      <div className="proj-overlay">
        <div className="proj-info">
          {/* <a href="#">test</a> */}
          <div className="proj-name">
            <a href={live} target="_blank" rel="noreferrer">
              {name}
            </a>{" "}
            <span style={{ color: "rgb(var(--accent))" }}>|</span>
            {gitHub && (
              <a
                href={gitHub}
                aria-label={name + " on GitHub"}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            )}
            {caseStudy && (
              <a
                href={caseStudy}
                aria-label={name + " case study on Github Gist"}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineFileSearch />
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
