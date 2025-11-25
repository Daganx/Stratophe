import "./intro.css";

import numberImage from "../../assets/images/intro/number.PNG";

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-left">
        <h2>LA NUMEROLOGIE : UN OUTIL POUR VOUS RÉVÉLER</h2>
        <h3>
          Et si les clés de votre équilibre personnel, professionnel et
          relationnel étaient cachées dans vos noms, prénoms et votre date de
          naissance ?{" "}
        </h3>
        <p className="intro-text">
          Chacun possède en lui un potentiel unique. Il suffit parfois d’allumer
          la bonne lumière pour le révéler. La numérologie est cet outil
          puissant : précis, structuré et profondément éclairant, elle met en
          lumière ce qui demande à s’exprimer. C’est une véritable boussole
          intérieure, un levier de transformation personnelle, professionnelle
          et relationnelle qui vous aide à vous retrouver et activer pleinement
          ce que vous portez déjà en vous.
        </p>
        <div className="intro-list">
          <p>En explorant votre thème numérologique, vous découvrirez :</p>
          <ul>
            <li>Vos forces naturelles et vos besoins profonds</li>
            <li>Les dynamiques qui influencent vos choix et vos relations</li>
            <li>Vos blocages et les moyens de les dépasser</li>
            <li>
              Les ressources et les outils concrets qui vous permettront
              d’avancer avec confiance.
            </li>
          </ul>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-illustration">
          <img src={numberImage} alt="" />
        </div>
      </div>
    </section>
  );
}
