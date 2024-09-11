import { useState } from "react";
import { card, updateCard } from "./CardFetcher";

export default function CardEdit({ card }: { card: card }) {
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
