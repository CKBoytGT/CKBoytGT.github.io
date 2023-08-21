import "./App.css";
import Navbar from "./components/Navbar";
import CrystalBall from "./components/CrystalBall";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <section id="about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          suscipit condimentum malesuada. Cras maximus sollicitudin volutpat.
          Nam ut pretium nisl, vel iaculis ante. Cras faucibus fringilla ipsum
          sit amet mollis. Nam mattis finibus est, et pulvinar elit convallis
          eu. Cras suscipit mauris eu nisi finibus, at accumsan elit pharetra.
          Maecenas id finibus tellus.
        </p>
      </section>
      <section id="work">
        <h2>Work</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          suscipit condimentum malesuada. Cras maximus sollicitudin volutpat.
          Nam ut pretium nisl, vel iaculis ante. Cras faucibus fringilla ipsum
          sit amet mollis. Nam mattis finibus est, et pulvinar elit convallis
          eu. Cras suscipit mauris eu nisi finibus, at accumsan elit pharetra.
          Maecenas id finibus tellus.
        </p>
        <p>
          Pellentesque eros nibh, tristique ac quam quis, porta sagittis nisl.
          Nulla id urna non mi efficitur placerat. Mauris mollis dignissim urna
          volutpat vestibulum. Pellentesque eu commodo sapien, nec pellentesque
          nibh. Phasellus eros velit, egestas et magna ac, commodo dapibus
          augue. Integer facilisis enim magna, ac convallis tellus commodo eget.
          Integer ac erat lectus. Nam eget posuere erat. Suspendisse potenti.
          Phasellus ultricies turpis ut odio fringilla scelerisque. Vestibulum
          quis enim sit amet lacus sagittis consectetur eget a libero. In
          placerat suscipit lorem, non consectetur sapien feugiat in.
        </p>
        <p>
          Cras nibh lacus, euismod sit amet mi ac, pulvinar porttitor quam.
          Integer mauris enim, imperdiet eu posuere non, dictum at orci. Proin
          placerat sem at lacus fermentum vestibulum. Donec semper vulputate
          metus ut ultricies. Vestibulum iaculis porttitor nisi, sed
          pellentesque odio molestie non. In eget viverra purus. In vehicula
          ligula sed gravida ultricies. Etiam feugiat et lorem id maximus.
          Praesent placerat lectus vitae lorem elementum tincidunt. Nunc
          sagittis laoreet molestie. Morbi pulvinar enim dictum, tristique sem
          sit amet, malesuada ante. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Proin ac placerat
          enim, id dapibus lectus.
        </p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          suscipit condimentum malesuada. Cras maximus sollicitudin volutpat.
          Nam ut pretium nisl, vel iaculis ante. Cras faucibus fringilla ipsum
          sit amet mollis. Nam mattis finibus est, et pulvinar elit convallis
          eu. Cras suscipit mauris eu nisi finibus, at accumsan elit pharetra.
          Maecenas id finibus tellus.
        </p>
        <p>
          Pellentesque eros nibh, tristique ac quam quis, porta sagittis nisl.
          Nulla id urna non mi efficitur placerat. Mauris mollis dignissim urna
          volutpat vestibulum. Pellentesque eu commodo sapien, nec pellentesque
          nibh. Phasellus eros velit, egestas et magna ac, commodo dapibus
          augue. Integer facilisis enim magna, ac convallis tellus commodo eget.
          Integer ac erat lectus. Nam eget posuere erat. Suspendisse potenti.
          Phasellus ultricies turpis ut odio fringilla scelerisque. Vestibulum
          quis enim sit amet lacus sagittis consectetur eget a libero. In
          placerat suscipit lorem, non consectetur sapien feugiat in.
        </p>
        <p>
          Cras nibh lacus, euismod sit amet mi ac, pulvinar porttitor quam.
          Integer mauris enim, imperdiet eu posuere non, dictum at orci. Proin
          placerat sem at lacus fermentum vestibulum. Donec semper vulputate
          metus ut ultricies. Vestibulum iaculis porttitor nisi, sed
          pellentesque odio molestie non. In eget viverra purus. In vehicula
          ligula sed gravida ultricies. Etiam feugiat et lorem id maximus.
          Praesent placerat lectus vitae lorem elementum tincidunt. Nunc
          sagittis laoreet molestie. Morbi pulvinar enim dictum, tristique sem
          sit amet, malesuada ante. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Proin ac placerat
          enim, id dapibus lectus.
        </p>
      </section>
      <footer>Footer</footer>
      {/* <div>
        <CrystalBall
          className="logo"
          style={{
            height: "40rem",
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
          </a>{" "}
          | <FaLinkedin style={{ fill: "rgb(var(--accent)" }} />{" "}
          <a
            href="https://www.linkedin.com/in/ckboyt/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div> */}
    </>
  );
}

export default App;
