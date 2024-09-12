import { useEffect, useState } from "react";
import "./style.css";
import { fetchAllCardsByType, card, fetchCardData } from "./CardFetcher";
import CardEdit from "./CardEdit";
import DropdownSelector from "./DropdownSelector";
import CreateNewCard from "./CreateNewCard";

export default function Deck() {
  const [selectedType, setSelectedType] = useState("All");
  const [cards, setCards] = useState<card[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedType) {
      setLoading(true);
      const fetchData =
        selectedType === "All"
          ? fetchCardData()
          : fetchAllCardsByType(selectedType);

      fetchData.then((fetchedCards) => {
        setCards(fetchedCards);
        setLoading(false);
      });
    }
  }, [selectedType]);
  function handleCardDelete(id: number) {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  }

  return (
    <>
      <main>
        <section className="main-section">
          <DropdownSelector onTypeSelect={setSelectedType} />
          <h2 className="cardholder-title">
            {selectedType ? selectedType : "Title"}
          </h2>

          <div className="cardholder-holder">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <CreateNewCard
                  selectedType={selectedType}
                  cards={cards}
                  setCards={setCards}
                />
                {cards.map((card) => (
                  <CardEdit
                    key={card.id}
                    card={card}
                    onDelete={handleCardDelete}
                  />
                ))}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
