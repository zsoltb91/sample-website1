import "./Header.css";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";

function Header() {

  const navRef = useRef();
  const navRefMain = useRef(); 

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    navRefMain.current.classList.toggle("navbar_exp");

  };

  const linkToggle = (e) => {
    //e.preventDefault();
    if (navRef.current.className === 'nav responsive_nav'){
    navRef.current.classList.toggle("responsive_nav");
    navRefMain.current.classList.toggle("navbar_exp");
    }
  }

  return (
    <div id="main" ref={navRefMain} className="navbar">
      <div className="logo">
        <h3>
          <span className="title">
            <a href="../../index.hml">Portfolio</a>
          </span>
        </h3>
      </div>
      
      <nav ref={navRef} className="nav">
      <ul>
        <li className="listitem">
          <a href="../../index.hml">Home</a>
        </li>
        <li className="listitem">
          <a onClick={linkToggle} href="#Weather">Weather info</a>
        </li>
        <li className="listitem">
          <a onClick={linkToggle} href="#Memgame">Memory Game</a>
        </li>
      </ul>
      </nav>
      <button onClick={showNavbar} className="hamb-menu"><FaBars/></button>
      
      
    </div>
  );
}

export default Header;
