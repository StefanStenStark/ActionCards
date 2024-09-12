import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Deck from "./Deck";
import Profile from "./Profile";
import ActionCardsPage from "./ActionCardsPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/ActionCards" element={<ActionCardsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Deck" element={<Deck />} />
      </Routes>
    </Router>
  );
}

export default App;
