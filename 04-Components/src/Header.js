import logo from "./logo.svg";

function Header() {
  return (
    <header>
      <nav>
        <img className="img-logo" src={logo} alt="Logo" width="80" />
        <ul className="nav-link">
          <li className="list-link">
            <a href="#">Pricing</a>
          </li>
          <li className="list-link">
            <a href="#">About</a>
          </li>
          <li className="list-link">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
