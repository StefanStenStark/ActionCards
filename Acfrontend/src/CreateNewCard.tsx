import { useState } from "react";
import { card, createCard } from "./CardFetcher";

export default function CreateNewCard({
  selectedType,
  cards,
  setCards,
}: {
  selectedType: string;
  cards: card[];
  setCards: React.Dispatch<React.SetStateAction<card[]>>;
}) {
  const [newCardType, setNewCardType] = useState(selectedType);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardInstruction, setNewCardInstruction] = useState("");
  async function handleCreate() {
    if (!selectedType) return;

    const newCard: card = {
      type: newCardType,
      title: newCardTitle,
      instruction: newCardInstruction,
    };

    const createdCard = await createCard(newCard);

    if (createdCard) {
      setCards([...cards, createdCard]);
    }
  }

  return (
    <div className="cardholder-card">
      <div className="cardholder-card-front">
        <label htmlFor="type">Type:</label>
        <input
          className="cardholder-input"
          type="text"
          id="type"
          name="type"
          value={selectedType}
          onChange={(event) => setNewCardType(event.target.value)}
          placeholder="Type"
        />

        <label htmlFor="title">Title:</label>
        <input
          className="cardholder-input"
          type="text"
          id="title"
          name="title"
          value={newCardTitle}
          onChange={(event) => setNewCardTitle(event.target.value)}
          placeholder="Title"
        />

        <label htmlFor="instruction">Instruction:</label>
        <textarea
          className="cardholder-input"
          id="instruction"
          name="instruction"
          value={newCardInstruction}
          onChange={(event) => setNewCardInstruction(event.target.value)}
          placeholder="Instruction"
        />
      </div>
      <div className="card-bottom">
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}
