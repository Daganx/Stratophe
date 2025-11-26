import "./banner.css";

import Navigation from "../Navigation/Navigation.jsx";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <section id="banner">
      <Navigation />
      <section id="banner-info" className="banner-info">
        <div className="banner-text">
          <h1>STRATOPHÉ</h1>
          <h2>Activatrice de potentiel par la Numérologie Stratégique ®</h2>
          <h3>
            Vous avez des questions sur mes services, vous souhaitez échanger au
            préalable ou en savoir plus sur la Numérologie Stratégique ®, je
            suis là pour vous répondre et vous accompagner.
          </h3>
          <Link to="footer" smooth={true} duration={500}>
            Contact
          </Link>
        </div>
      </section>
    </section>
  );
}
