// src/App.tsx

import { useState } from "react";
import Gallery from "./components/Gallery";  // ✅ Fixed import path
import "./styles.css";

export default function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <main>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}


