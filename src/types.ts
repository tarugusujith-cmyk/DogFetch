// Shape of the response from https://dog.ceo/api/breeds/image/random
export interface DogApiResponse {
  message: string; // image URL
  status: "success" | "error";
}

// What the app actually works with once the response is parsed
export interface DogImage {
  url: string;
  breed: string;
}
