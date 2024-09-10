import { useEffect, useState } from "react";
import { card, fetchCardData } from "./CardFetcher";

function Card({ card }: { card: card }) {
  const [showFront, setShowFront] = useState(false);
  function handleClick() {
    setShowFront(true);
  }

  return (
    <div className="cardholder-card" onClick={handleClick}>
      {!showFront ? (
        <img src="/ActionCard.jpg" className="cardholder-card-image" />
      ) : (
        <>
          <h1>{card.title}</h1>
          <p>{card.instruction}</p>
          <button>Accept</button>
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
      const fetchedCards = await fetchCardData();
      setCards(fetchedCards);
      setIsLoading(false);
    }
    loadCards();
  }, []);

  return (
    <section className="main-section">
      <h2 className="cardholder-title">{title}</h2>
      <div className="cardholder-holder">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {cards.length > 0 && <h3>{cards[0].title}</h3>}
            <Card card={cards[0]} />
            <Card card={cards[1]} />
            <Card card={cards[2]} />
          </>
        )}
      </div>
    </section>
  );
}
