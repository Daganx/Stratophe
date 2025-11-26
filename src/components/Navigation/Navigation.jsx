import "./navigation.css";

import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <nav id="navigation" className="navigation">
      <ul>
        <Link to="intro" smooth={true} duration={500}>
          Numérologie
        </Link>
        <Link to="accompagnement" smooth={true} duration={500}>
          Thèmes
        </Link>
        <Link to="rating" smooth={true} duration={500}>
          Avis
        </Link>
        <Link to="footer" smooth={true} duration={500}>
          Contact
        </Link>
      </ul>
    </nav>
  );
}
