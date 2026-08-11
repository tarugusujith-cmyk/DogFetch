import { useCallback, useEffect, useState } from "react";
import { fetchRandomDog } from "../api/dog";
import type { DogImage } from "../types";

interface UseRandomDogResult {
  dog: DogImage | null;
  isLoading: boolean;
  error: string | null;
  fetchNew: () => void;
}

/**
 * Owns the lifecycle of fetching a random dog photo: the initial load
 * on mount, and re-fetching on demand via fetchNew(). Keeping this in
 * a hook keeps components focused purely on rendering.
 */
export function useRandomDog(): UseRandomDogResult {
  const [dog, setDog] = useState<DogImage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const nextDog = await fetchRandomDog();
      setDog(nextDog);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while fetching a dog photo.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { dog, isLoading, error, fetchNew: load };
}
