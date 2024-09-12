import { useEffect, useState } from "react";
import "./style.css";
import { fetchAllCardsByType, card, fetchCardData } from "./CardFetcher";
import CardEdit from "./CardEdit";
import DropdownSelector from "./DropdownSelector";
import CreateNewCard from "./CreateNewCard";

export default function Deck() {
  const [selectedType, setSelectedType] = useState("all");
  const [cards, setCards] = useState<card[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedType) {
      setLoading(true);
      const fetchData =
        selectedType === "all"
          ? fetchCardData()
          : fetchAllCardsByType(selectedType);

      fetchData.then((fetchedCards) => {
        setCards(fetchedCards);
        setLoading(false);
      });
    }
  }, [selectedType]);

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
                {cards.map((card, index) => (
                  <CardEdit key={index} card={card} />
                ))}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
