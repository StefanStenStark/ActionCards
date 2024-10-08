import { useEffect, useState } from "react";
import { card, fetchCardsByType } from "../../CardFetcher";
import AcceptCardButton from "./AcceptCardButton";
import "../../styling/style.css";

function Card({ card }: { card: card }) {
  const [showFront, setShowFront] = useState(false);
  const [selectedImage] = useState<string>(
    localStorage.getItem("selectedCardImage") || "FutureCard"
  );

  function handleClick() {
    setShowFront(true);
  }

  return (
    <div className="cardholder-card" onClick={handleClick}>
      {!showFront ? (
        <img src={`/${selectedImage}.jpg`} className="cardholder-card-image" />
      ) : (
        <>
          <div className="cardholder-card-front">
            <h3 className="cardholder-card-title">{card.title}</h3>
            <p>{card.instruction}</p>
          </div>

          <div className="card-bottom">
            <AcceptCardButton />
          </div>
        </>
      )}
    </div>
  );
}

export default function CardHolder({ title }: { title: string }) {
  const [cards, setCards] = useState<card[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCards() {
      const fetchedCards = await fetchCardsByType(title);
      setCards(fetchedCards);
      setIsLoading(false);
    }
    loadCards();
  }, [title]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : cards.length >= 3 ? (
        <section className="main-section">
          <h2 className="cardholder-title">{title}</h2>
          <div className="cardholder-holder">
            <Card card={cards[0]} />
            <Card card={cards[1]} />
            <Card card={cards[2]} />
          </div>
        </section>
      ) : null}
    </>
  );
}
