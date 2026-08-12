import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dogs, setDogs] = useState<string[]>([]);

  // Function to fetch 5 dog images
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

  // Fetch dogs when the page loads
  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className="board">
      <div className="board__header">
        <h1>🐶 Dog Images</h1>

        <button className="fetch-btn" onClick={fetchDogs}>
           Fetch Dogs
        </button>
      </div>

      <div className="dog-grid">
        {dogs.map((dog, index) => (
          <div className="dog-card" key={index}>
            <img
              src={dog}
              alt={`Dog ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;