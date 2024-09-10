import { useState } from "react";

export default function AcceptCardButton() {
  const [startTimer, setStartTimer] = useState(false);

  return (
    <>
      {!startTimer ? (
        <button onClick={() => setStartTimer(true)}>Accept</button>
      ) : (
        <p>02:00</p>
      )}
    </>
  );
}
