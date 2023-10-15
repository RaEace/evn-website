import "./NavigationBar.css";

import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1>Header</h1>
  </header>
);

const Navbar = () => (
  <nav className="sticky navbar">
    <div className="brand  display__logo">
      <Link to="/top" className="nav__link">
        <span className="logo">EVN</span>
      </Link>
    </div>
    <input type="checkbox" id="nav" className="hidden" />
    <label htmlFor="nav" className="nav__open">
      <i></i>
      <i></i>
      <i></i>
    </label>
    <div className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <Link to="/home" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/portfolio" className="nav__link">
            Portfolio
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

const MainContent = () => (
  <main>
    <section className="home">
      <div id="home">
        <h1>Home</h1>
      </div>
    </section>
  </main>
);

const NavigationBar = () => (
  <>
    <Header />
    <Navbar />
    <MainContent />
  </>
);
export default NavigationBar;
