import "./App.css";
import backgroundImage from "./assets/background.jpg";

function App() {
  return (
    <main
      className="landing-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay" />
      <section className="content">
      <h1>Eduard Vilgauk</h1>
        <p className="role">Softwareentwickler</p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/eduard-vilgauk-214a65212/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dein-github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;