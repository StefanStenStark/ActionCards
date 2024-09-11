import { useEffect, useState } from "react";
import "./style.css";
import {
  fetchUniqueTypes,
  fetchAllCardsByType,
  card,
  updateCard,
} from "./CardFetcher";

function CardEdit({ card }: { card: card }) {
  const [newCardTitle, setNewCardTitle] = useState(card.title);
  const [newCardInstruction, setNewCardInstruction] = useState(
    card.instruction
  );

  async function handleUpdate() {
    const updatedCard: card = {
      id: card.id,
      type: card.type,
      title: newCardTitle,
      instruction: newCardInstruction,
    };
    await updateCard(updatedCard);
  }
  return (
    <>
      <div className="cardholder-card">
        <div className="cardholder-card-front">
          <input
            type="text"
            name="title"
            value={newCardTitle}
            onChange={(event) => setNewCardTitle(event.target.value)}
            placeholder="Title"
          />
          <textarea
            name="instruction"
            value={newCardInstruction}
            onChange={(event) => setNewCardInstruction(event.target.value)}
            placeholder="Instruction"
          />
        </div>
        <div className="card-bottom">
          <button onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </>
  );
}

function DropdownSelector({
  onTypeSelect,
}: {
  onTypeSelect: (type: string) => void;
}) {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTypes() {
      setLoading(true);
      const fetchedTypes = await fetchUniqueTypes();
      setTypes(fetchedTypes);
      setLoading(false);
    }

    getTypes();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    onTypeSelect(selectedType);
  };

  return (
    <div className="dropdown-selector">
      <label htmlFor="options">Choose a type:</label>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <select id="options" className="custom-select" onChange={handleChange}>
          <option value="">Select a type</option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default function Deck() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [cards, setCards] = useState<card[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedType) {
      setLoading(true);
      fetchAllCardsByType(selectedType).then((fetchedCards) => {
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
                <div className="cardholder-card">
                  <div className="cardholder-card-front">
                    <h1>New card</h1>
                    <p>New instruction</p>
                  </div>
                  <div className="card-bottom">
                    <button>Create</button>
                  </div>
                </div>

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
