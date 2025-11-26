import React from "react";
import "./rating.css";

// Vous pouvez définir ces données dans un fichier JSON séparé pour la propreté
const reviews = [
  {
    author: "Sophie M.",
    rating: 5,
    date: "20 nov. 2024",
    text: "Une expérience incroyable ! J'ai gagné en clarté sur mon chemin de vie. Je recommande vivement cette consultation.",
  },
  {
    author: "Marc D.",
    rating: 5,
    date: "15 oct. 2024",
    text: "Le thème de couple a été un éclairage puissant pour comprendre nos zones de friction et nos complémentarités. Merci !",
  },
  {
    author: "Julien R.",
    rating: 5,
    date: "15 oct. 2024",
    text: "Une analyse très fine et des outils concrets pour avancer. Très satisfait.",
  },
  {
    author: "Émilie L.",
    rating: 5,
    date: "15 oct. 2024",
    text: "Le thème de couple a été un éclairage puissant pour comprendre nos zones de friction et nos complémentarités. Merci !",
  },
  {
    author: "David V.",
    rating: 5,
    date: "15 oct. 2024",
    text: "J'ai trouvé les réponses que je cherchais. Je recommande les yeux fermés.",
  },
  // ... ajoutez d'autres avis ...
];

export default function Rating() {
  return (
    <section className="testimonials-section">
      <h2>🌟 Ce qu'ils disent de mes accompagnements</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">"{review.text}"</p>
            <div className="review-footer">
              <span className="rating">{"⭐".repeat(review.rating)}</span>
              <span className="author">{review.author}</span>
              <span className="date"> - {review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
