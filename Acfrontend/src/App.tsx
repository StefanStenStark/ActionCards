import "./styling/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import DeckPage from "./pages/Deckpage";
import ProfilePage from "./pages/ProfilePage";
import ActionCardsPage from "./pages/ActionCardsPage";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ActionCards" element={<ActionCardsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Deck" element={<DeckPage />} />
      </Routes>
    </Router>
  );
}

export default App;
