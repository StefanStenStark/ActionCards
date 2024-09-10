export default function CardHolder({ title }: { title: string }) {
  return (
    <section className="main-section">
      <h2>{title}</h2>
      <img src="/ActionCard.jpg" className="cardholder-card" />
    </section>
  );
}
