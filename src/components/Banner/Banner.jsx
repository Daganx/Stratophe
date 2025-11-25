import "./banner.css";

import Navigation from "../Navigation/Navigation.jsx";

export default function Banner() {
  return (
    <section id="banner">
      <Navigation />
      <section id="banner-info" className="banner-info">
        <div className="banner-text">
          <h1>STRATOPHÉ</h1>
          <h2>Activatrice de potentiel par la Numérologie Stratégique ®</h2>
        </div>
      </section>
    </section>
  );
}
