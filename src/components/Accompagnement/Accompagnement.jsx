import React from "react";
import "./accompagnement.css";

// Composant enfant pour afficher chaque carte
const Card = ({
  title,
  subtitle,
  content,
  duration,
  price,
  calendlyLink,
  specialNote,
}) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    <p className="card-subtitle">{subtitle}</p>
    <div className="card-content">
      <p className="intro">💡 {content.intro}</p>
      <ul>
        {content.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="result">👉 Résultat ? {content.result}</p>
    </div>

    <div className="card-footer">
      <p className="duration">Durée : {duration}</p>
      <p className="price">Prix : {price}</p>
    </div>

    {specialNote && <div className="special-note">{specialNote}</div>}

    {/* Bouton de réservation Calendly */}
    <a
      href={calendlyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="booking-button"
    >
      Réserver votre séance 📅
    </a>
  </div>
);

// Composant principal utilisant export default function
export default function AccompagnementSection() {
  const themes = [
    {
      title: "THEME ADULTE",
      subtitle: "(À PARTIR DE 25 ANS)",
      content: {
        intro:
          "Une exploration en profondeur pour mieux se connaître et activer son plein potentiel. Le thème adulte est une consultation unique, un véritable soin de l’âme qui vous offre un éclairage précieux sur qui vous êtes et ce que vous portez en vous. Pendant 2 heures, nous explorerons votre arbre personnel sous toutes ses dimensions :",
        details: [
          "- vos besoins profonds,",
          "- vos forces et talents naturels,",
          "- vos zones de tension et les blocages à dépasser,",
          "- votre plan de vie unique et les cycles d’influences qui vous entourent.",
        ],
        result:
          "Vous gagnez en clarté, en fluidité, en compréhension de vous-même. Vous repartez avec une confiance renforcée, des outils et des repères solides pour prendre des décisions alignées avec votre nature profonde.",
      },
      duration: "2h",
      price: "120€ TTC",
      // LIEN CALENDLY SPÉCIFIQUE ADULTE
      calendlyLink: "https://calendly.com/votre-nom/theme-adulte",
      specialNote: null,
    },
    {
      title: "THÈME ENFANT / ADO / JEUNE ADULTE",
      subtitle: "(-25 ANS)",
      content: {
        intro:
          "Comprendre ses talents, ses besoins et son fonctionnement pour mieux l’accompagner dans son évolution. Cette consultation permet d’offrir à l’enfant ou au jeune adulte une meilleure compréhension de lui-même et donne aux parents des clés concrètes pour l’accompagner avec justesse. Pendant 1h30, nous explorerons :",
        details: [
          "- ses dons et talents naturels,",
          "- ses besoins essentiels,",
          "- son mode de fonctionnement,",
          "- ses ressorts de motivation,",
          "- les cycles qui jalonnent son développement (présent et futur).",
        ],
        result:
          "Vous développez une compréhension plus juste de votre enfant et de votre rôle de parent, vous soutenez son développement et encouragez son épanouissement en respectant son rythme et sa nature profonde.",
      },
      duration: "1h30",
      price: "80€ TTC",
      // LIEN CALENDLY SPÉCIFIQUE ENFANT
      calendlyLink: "https://calendly.com/votre-nom/theme-enfant-ado",
      specialNote: (
        <>
          <span className="bold">Modalités particulières :</span>
          <ul>
            <li>
              - Pour les mineurs, la restitution du thème se fait uniquement
              auprès du ou des parent(s).
            </li>
            <li>
              - À partir de 16 ans : présence possible de l’adolescent sous
              conditions (à discuter en amont de la consultation).
            </li>
            <li>
              - Pour les jeunes adultes (18-25 ans) : restitution du thème avec
              ou sans parent, selon son choix ou uniquement au(x) parent(s) avec
              son accord.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "THÈME COUPLE / ASSOCIÉS",
      subtitle: "",
      content: {
        intro:
          "Mieux comprendre vos fonctionnements respectifs pour une relation harmonieuse, durable et équilibrée. Cette séance en duo permet de décoder le fonctionnement de chacun et la manière dont vos dynamiques se rencontrent, se complètent ou parfois s’opposent au fil du temps. Ensemble nous identifierons :",
        details: [
          "- vos besoins fondamentaux,",
          "- vos zones de friction,",
          "- vos complémentarités,",
          "- les cycles qui influencent votre relation,",
          "- les ajustements qui permettent de retrouver de l’équilibre.",
        ],
        result:
          "Vous repartez avec une meilleure compréhension mutuelle, des clés concrètes pour fluidifier la relation et renforcer le respect des besoins de chacun pour nourrir et poser ainsi les bases d’un équilibre durable.",
      },
      duration: "2h30",
      price: "150€ TTC",
      // LIEN CALENDLY SPÉCIFIQUE COUPLE
      calendlyLink: "https://calendly.com/votre-nom/theme-couple",
      specialNote: null,
    },
    {
      title: "SUIVI ANNUEL",
      content: {
        intro:
          "Ce suivi est réservé aux personnes ayant déjà réalisé un thème complet en Numérologie Stratégique®. Nous revenons sur vos fondamentaux numérologiques avec un focus sur votre plan de vie pour explorer :",
        details: [
          "- les énergies des 12 prochains mois,",
          "- les périodes clés,",
          "- les défis et opportunités,",
          "- les ajustements à envisager pour rester aligné tout au long de l’année.",
        ],
        result:
          "Vous gagnez en visibilité, en fluidité et en efficacité dans vos choix, vous avancez avec confiance et sérénité tout au long de l’année.",
      },
      duration: "1h30",
      price: "100€ TTC",
      // LIEN CALENDLY SPÉCIFIQUE ADULTE
      calendlyLink: "https://calendly.com/votre-nom/theme-suivi",
      specialNote: null,
    },
  ];

  return (
    <section className="accompagnement-section" id="accompagnement">
      <h2>DES CONSULTATIONS PENSÉES POUR CHACUN :</h2>
      <div className="card-container">
        {themes.map((theme, index) => (
          <Card key={index} {...theme} />
        ))}
      </div>
    </section>
  );
}
