import { DogBoard } from "./components/DogBoard";
import "./App.css";

function App() {
  return (
    <div className="board">
      <header className="board__header">
        <p className="board__eyebrow">Random Dog Image · Dog CEO API</p>
        <h1 className="board__title">Good Dog, Fresh Pin</h1>
        <p className="board__subtitle">
          Pull the tag for a brand new dog, fetched live and pinned to the
          board.
        </p>
      </header>

      <DogBoard />

      <footer className="board__footer">
        <p>
          Data source:{" "}
          <a href="https://dog.ceo/dog-api/" target="_blank" rel="noreferrer">
            dog.ceo/dog-api
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
