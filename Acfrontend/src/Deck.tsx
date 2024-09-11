import "./style.css";

function CardEdit() {
  return (
    <div className="cardholder-card">
      <>
        <div className="cardholder-card-front">
          <h1>Title</h1>
          <p>Do the thing with the thing</p>
        </div>

        <div className="card-bottom"></div>
      </>
    </div>
  );
}

function DropdownSelector() {
  return (
    <div className="dropdown-selector">
      <label htmlFor="options">Choose an type:</label>
      <select id="options" className="custom-select">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default function Deck() {
  return (
    <>
      <main>
        <section className="main-section">
          <DropdownSelector />
          <h2 className="cardholder-title">Title</h2>
          <div className="cardholder-holder">
            <CardEdit />
          </div>
        </section>
      </main>
    </>
  );
}
