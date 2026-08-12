import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dogs, setDogs] = useState<string[]>([]);

  const fetchDogs = () => {
    fetch("https://dog.ceo/api/breeds/image/random/5")
      .then((response) => response.json())
      .then((data) => {
        setDogs(data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog images:", error);
      });
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className="board">
      <h1>🐶 Dog Images</h1>

      <div className="dog-grid">
        {dogs.map((dog, index) => (
          <img
            key={index}
            src={dog}
            alt={`Dog ${index + 1}`}
          />
        ))}
      </div>

      {/* Fetch button below the images */}
      <button className="fetch-btn" onClick={fetchDogs}>
        🐶 Fetch Dogs
      </button>
    </div>
  );
}

export default App;