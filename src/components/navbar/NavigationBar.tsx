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
          <Link to="/accueil" className="nav__link">
            Accueil
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/choeur" className="nav__link">
            Choeur
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/direction" className="nav__link">
            Direction
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/repertoire" className="nav__link">
            Repertoire
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/concerts" className="nav__link">
            Concerts
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/medias" className="nav__link">
            Medias
          </Link>
        </li>
        <li className="contacts">
          <Link to="/contacts" className="nav__link">
            contacts
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
