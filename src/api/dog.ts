import type { DogApiResponse, DogImage } from "../types";

const RANDOM_IMAGE_URL = "https://dog.ceo/api/breeds/image/random";

/**
 * Dog CEO image URLs look like:
 *   https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg
 * The folder name after "breeds/" is "<breed>" or "<breed>-<sub-breed>".
 * This turns that slug into a readable label, e.g. "Afghan Hound".
 */
function breedFromUrl(url: string): string {
  const match = url.match(/breeds\/([^/]+)\//);
  if (!match) return "Mystery Pup";

  const [main, sub] = match[1].split("-");
  const words = sub ? [sub, main] : [main];

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Fetches a single random dog photo using the native Fetch API.
 * Throws on network failure or a non-success API status so the
 * caller can catch it and show an error state.
 */
export async function fetchRandomDog(): Promise<DogImage> {
  const response = await fetch(RANDOM_IMAGE_URL);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data: DogApiResponse = await response.json();

  if (data.status !== "success") {
    throw new Error("The Dog API did not return a usable image.");
  }

  return {
    url: data.message,
    breed: breedFromUrl(data.message),
  };
}
