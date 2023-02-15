import "./Header.css";

function Header() {
  return (
    <nav id="main" className="navbar">
      <div className="logo">
        <h3>
          <span className="title">
            <a href="../../index.hml">Portfolio</a>
          </span>
        </h3>
      </div>

      <ul>
        <li>
          <a href="../../index.hml">Home</a>
        </li>
        <li>
          <a href="#Weather">Weather info</a>
        </li>
        <li>
          <a href="#Memgame">Memory Game</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
