import React from "react";
import "./footer.css";

export default function Footer() {
  // Remplacer ces placeholders par les vraies informations de votre cliente
  const contactEmail = "stratophe@nom-de-societe.fr";
  const phoneNumber = "06 XX XX XX XX";
  const siretNumber = "XXX XXX XXX XXXX";
  const companyName = "Stratophé";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer" id="footer">
      <div className="footer-content">
        {/* Bloc 1: Informations de Contact */}
        <div className="footer-block contact-info">
          <h3>Contactez-moi</h3>
          <p>
            <i className="fas fa-envelope"></i> E-mail :
            <a href={`mailto:${contactEmail}`} className="contact-link">
              {" "}
              {contactEmail}
            </a>
          </p>
          <p>
            <i className="fas fa-phone"></i> Tél. Pro :
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="contact-link"
            >
              {" "}
              {phoneNumber}
            </a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Consultation à distance
            (Visio)
          </p>
        </div>

        {/* Bloc 2: Mentions Légales & SIRET */}
        <div className="footer-block legal-info">
          <h3>Mentions Légales</h3>
          <p>
            &copy; {currentYear} {companyName}
          </p>
          <p>SIRET : {siretNumber}</p>
          <p className="legal-links">
            <a href="#cgu" className="link-item">
              CGU / CGV
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
