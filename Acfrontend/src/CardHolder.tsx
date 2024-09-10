export default function CardHolder({ title }: { title: string }) {
  return (
    <section className="main-section">
      <h2 className="cardholder-title">{title}</h2>
      <div className="cardholder-holder">
        <img src="/ActionCard.jpg" className="cardholder-card" />
        <img src="/ActionCard.jpg" className="cardholder-card" />
        <img src="/ActionCard.jpg" className="cardholder-card" />
      </div>
    </section>
  );
}
