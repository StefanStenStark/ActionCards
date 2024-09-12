import { useState, useEffect } from "react";
import "./style.css";

export default function AcceptCardButton() {
  const [startTimer, setStartTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (startTimer && timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [startTimer, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      {!startTimer ? (
        <button className="card-button" onClick={() => setStartTimer(true)}>
          Accept
        </button>
      ) : (
        <p>{formatTime(timeLeft)}</p>
      )}
    </>
  );
}
