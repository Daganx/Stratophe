import "./approche.css";

import approcheIllustration from "../../assets/images/approche/approche.png";

export default function Approche() {
  return (
    <section id="approche" className="approche">
      <div className="approche-illustration">
        <img src={approcheIllustration} alt="" />
      </div>
      <div className="approche-text">
        <h2>
          Une approche stratégique et intuitive pour un accompagnement
          sur-mesure
        </h2>
        <p>
          Ici, pas de voyance, mais une approche claire, structurée et
          résolument ancrée dans la compréhension de ce que les nombres révèlent
          de vous. Les nombres ne prédisent pas : ils décrivent votre énergie,
          vos dynamiques internes, vos points d’appui et vos zones de tension.
          Formée et certifiée en Numérologie Stratégique ®, j’allie analyse,
          intuition et sens de l’écoute pour vous offrir une lecture fine et
          profonde de votre identité.
        </p>
        <p>Mon rôle est de :</p>
        <ul>
          <li>Révéler des forces que vous sous-estimez</li>
          <li>Éclairer les blocages qui freinent votre élan</li>
          <li>Mettre de la clarté là où tout peut sembler confus</li>
          <li>Vous aider à avancer avec fluidité, confiance et sérénité</li>
        </ul>
        <p>
          Si vous êtes prêt(e) à vous découvrir autrement, à mettre en lumière
          votre potentiel et à avancer avec plus de confiance et de sens, je
          serai ravie de vous accompagner.
        </p>
      </div>
    </section>
  );
}
