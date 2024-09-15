import { useState, useEffect } from "react";
import "../styling/Profile.css";
import "../styling/style.css";

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState<string>(
    localStorage.getItem("selectedCardImage") || "ForeverCard"
  );

  const cardImages = [
    "ForeverCard",
    "FutureCard",
    "MysticCard",
    "RoyalCard",
    "RoyalFairyCard",
  ];

  useEffect(() => {
    localStorage.setItem("selectedCardImage", selectedImage);
  }, [selectedImage]);

  return (
    <main>
      <section className="profile-main">
        <section className="profile-top">
          <div className="pofile-pictures">
            <p>Stefan</p>
            <img src="./Me.png" alt="Profile" className="profile-picture" />
            <img
              src={`/${selectedImage}.jpg`}
              alt="Selected Card"
              className="profile-card-image"
            />
          </div>

          <div className="profile-stats">
            <p>Cards completed: 20</p>
            <p>Cards completed in the same day: 5</p>
            <p>Days in a row: 4</p>
            <p>Top days in a row: 10</p>
          </div>
        </section>

        <div className="card-image-selection">
          <h3>Select Card Image:</h3>
          <div className="card-image-options">
            {cardImages.map((image) => (
              <img
                key={image}
                src={`/${image}.jpg`}
                alt={image}
                className={`card-image-option ${
                  selectedImage === image ? "selected" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}

            <div className="card-image-container">
              <img
                src={"./VikingCard.jpg"}
                className="card-image-option disabled-card"
              />
              <p className="hover-message">Compleate 35 cards to unlock!</p>
            </div>

            <div className="card-image-container">
              <img
                src={"./FairyCard.jpg"}
                className="card-image-option disabled-card"
              />
              <p className="hover-message">Do card 12 days in a row!</p>
            </div>

            <div className="card-image-container">
              <img
                src={"./DarkVinesCard.jpg"}
                className="card-image-option disabled-card"
              />
              <p className="hover-message">Compleate 9 cards in a day!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
