import React from "react";
import "./about.css";

import { Link } from "react-scroll";

const PROFILE_IMAGE_URL =
  "https://placehold.co/300x350/577372/ffffff?text=Photo+Oph%C3%A9lie";

export default function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">À PROPOS DE MOI</h2>

      <div className="about-content-container">
        {/* 1. Bloc Photo de Profil */}
        <div className="about-photo-block">
          <img
            src={PROFILE_IMAGE_URL}
            alt="Photo de profil d'Ophélie"
            className="profile-image"
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
          <p className="photo-caption">Ophélie – Numérologue Stratégique®</p>
        </div>

        {/* 2. Bloc Texte de Présentation */}
        <div className="about-text-block">
          <p>
            Je m’appelle <span className="bold">Ophélie</span> – un prénom qui
            vient du grec <span className="italic">Ophelia</span>, signifiant «
            aide » ou « secours ». Peut-être est-ce là au fond, que se cache mon
            goût pour l’accompagnement ? Mon prénom résonne avec la vibration
            <span className="bold"> 7</span>, symbole d’intuition, de
            sensibilité et de réflexion profonde. Tout au long de mon parcours,
            cette énergie m’a guidée vers l’observation et la compréhension de
            l’humain.
          </p>

          <p>
            Un parcours concret, les pieds sur terre, mais toujours attentive à
            ce qui se joue en profondeur. Après des études en
            histoire-géographie, j’ai exploré différents environnements
            professionnels entre organisation, coordination commerciale et
            accompagnement des équipes.
          </p>

          <p>
            Les nombres, quant à eux, m’ont toujours parlé. Sensible aux
            énergies et aux messages subtils qu’ils portent, j’ai choisi la
            Numérologie comme second métier, un moyen d’unir mon goût pour
            l’analyse, l’écoute et l’accompagnement, avec un outil{" "}
            <span className="bold">
              concret, structuré, puissant et éclairant
            </span>
            .
          </p>

          <p className="cta-paragraph">
            <span className="bold">
              Formée et certifiée en Numérologie Stratégique®
            </span>
            , je mets aujourd’hui ma sensibilité, mon sens de l’analyse et mes
            compétences au service de celles et ceux qui cherchent un éclairage,
            un déclic ou une meilleure compréhension d’eux-mêmes.
          </p>

          <p className="final-cta">
            Faites le choix d’un accompagnement solide et éclairant :{" "}
            <Link
              className="cta-link"
              to="accompagnement"
              smooth={true}
              duration={500}
            >
              Réserver une séance{" "}
            </Link>
            et découvrons ensemble tout ce que votre thème peut révéler.
          </p>
        </div>
      </div>
    </section>
  );
}
