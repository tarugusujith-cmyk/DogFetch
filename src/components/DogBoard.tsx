import { useRandomDog } from "../hooks/useRandomDog";
import { Loader } from "./Loader";
import { ErrorState } from "./ErrorState";
import { DogPolaroid } from "./DogPolaroid";

export function DogBoard() {
  const { dog, isLoading, error, fetchNew } = useRandomDog();

  return (
    <div className="board__stage">
      {isLoading && <Loader />}
      {!isLoading && error && <ErrorState message={error} />}
      {!isLoading && !error && dog && <DogPolaroid dog={dog} />}

      <button
        type="button"
        className="fetch-button"
        onClick={fetchNew}
        disabled={isLoading}
      >
        {isLoading ? "Fetching…" : "Fetch another dog"}
      </button>
    </div>
  );
}
