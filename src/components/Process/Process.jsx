import React from "react";
import "./process.css";

export default function Process() {
  const steps = [
    {
      title: "Réservation & Paiement",
      details: (
        <>
          Choisissez votre thème et votre créneau via l’outil de réservation en
          ligne (consultations possibles en soirée et week-end). Au moment de la
          réservation, vous me transmettez vos éléments d’identité : **noms,
          prénoms, date de naissance** tels qu’ils figurent sur votre état
          civil.
        </>
      ),
      icon: "🗓️",
    },
    {
      title: "Mail de Confirmation",
      details: (
        <>
          Un mail vous est envoyé pour confirmer votre rendez-vous et repréciser
          les modalités de la séance. Vous y trouverez toutes les informations
          nécessaires pour la préparation.
        </>
      ),
      icon: "📧",
    },
    {
      title: "Préparation du Thème (Par la consultante)",
      details: (
        <>
          Sur la base des informations transmises, je prépare en amont de la
          consultation l’intégralité de votre thème en **Numérologie
          Stratégique®**. Cette analyse minutieuse de votre profil, qui
          nécessite plusieurs heures de travail préparatoire, m'offre une
          lecture précise, approfondie et personnalisée de votre personnalité et
          temporalité.
        </>
      ),
      icon: "🧠",
    },
    {
      title: "Consultation à Distance (Visio)",
      details: (
        <>
          Pour vous offrir plus de flexibilité et de confort, la restitution du
          thème se déroule à distance (**via Google Meet ou WhatsApp**).
          <p className="visio-requirements">
            Afin de garantir le bon déroulement, il est indispensable de
            disposer d’un appareil (ordinateur, tablette ou smartphone) muni
            d’une caméra et d’un microphone, et d’être dans un environnement
            calme, sans bruit ni sollicitations extérieures.
          </p>
          <div className="visio-image-container"></div>
        </>
      ),
      icon: "💻",
    },
    {
      title: "Restitution Détaillée",
      details: (
        <>
          La consultation dure entre **1h30 et 2h15** selon le thème choisi.
          Nous explorons votre thème en profondeur, avec des explications
          claires et personnalisées.
        </>
      ),
      icon: "💬",
    },
    {
      title: "Enregistrement (Optionnel)",
      details: (
        <>
          Suivant votre accord, la séance pourra être enregistrée pour que vous
          puissiez la réécouter, consolider vos apprentissages et intégrer des
          conseils pratiques et stratégiques.
        </>
      ),
      icon: "🎙️",
    },
  ];

  return (
    <section className="deroulement-section">
      <h2 className="deroulement-title">COMMENT SE DÉROULE UNE SÉANCE ?</h2>
      <p className="deroulement-intro">
        Vous avez choisi de vous offrir un moment unique d’observation et
        d’accompagnement pour explorer votre potentiel et vos dynamiques
        personnelles.
      </p>

      <ol className="deroulement-steps">
        {steps.map((step, index) => (
          <li key={index} className="step-item">
            <div className="step-header">
              <span className="step-number">{index + 1}</span>
              <h3 className="step-title">
                {step.icon} {step.title}
              </h3>
            </div>
            <div className="step-details">{step.details}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
