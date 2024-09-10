import { useState } from "react";

function Card() {
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
          <h1>clean oven</h1>
          <p>clean the oven as good as you can</p>
          <button>Accept</button>
        </>
      )}
    </div>
  );
}

export default function CardHolder({ title }: { title: string }) {
  return (
    <section className="main-section">
      <h2 className="cardholder-title">{title}</h2>
      <div className="cardholder-holder">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
