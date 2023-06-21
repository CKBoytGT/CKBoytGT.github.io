import './App.css'
import CrystalBall from "./components/CrystalBall"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function App() {

  return (
    <>
      <div>
        <CrystalBall
          className="logo"
          style={{
            height: "33rem",
            width: "auto",
            overflow: "visible",
            paddingTop: "5rem",
          }}
        />
      </div>
      <h1>I see a bright future ahead...</h1>
      <div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Until then: <FaGithub style={{ fill: "rgb(var(--accent)" }} />{" "}
          <a
            href="https://github.com/CKBoytGT"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a> |{" "}
          <FaLinkedin style={{ fill: "rgb(var(--accent)" }} />{" "}
          <a
            href="https://www.linkedin.com/in/ckboyt/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </>
  );
}

export default App
