import { useState } from "react";
import { card, deleteCard, updateCard } from "./CardFetcher";
import "./style.css";

export default function CardEdit({
  card,
  onDelete,
}: {
  card: card;
  onDelete: (id: number) => void;
}) {
  const [newCardType, setNewCardType] = useState(card.type);
  const [newCardTitle, setNewCardTitle] = useState(card.title);
  const [newCardInstruction, setNewCardInstruction] = useState(
    card.instruction
  );

  async function handleUpdate() {
    const updatedCard: card = {
      id: card.id,
      type: newCardType,
      title: newCardTitle,
      instruction: newCardInstruction,
    };
    await updateCard(updatedCard);
  }
  async function handleDelete(id: number) {
    await deleteCard(id);
    onDelete(id);
  }
  return (
    <>
      <div className="cardholder-card">
        <div className="cardholder-card-front">
          <label htmlFor="type">Type:</label>
          <input
            className="cardholder-input"
            type="text"
            id="type"
            name="type"
            value={newCardType}
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
          <button className="card-button" onClick={handleUpdate}>
            Update
          </button>
          <button
            className="card-button"
            onClick={() => handleDelete(card.id!)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
