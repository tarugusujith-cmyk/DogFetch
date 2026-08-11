import type { DogImage } from "../types";

interface DogPolaroidProps {
  dog: DogImage;
}

export function DogPolaroid({ dog }: DogPolaroidProps) {
  return (
    <figure className="polaroid">
      <span className="polaroid__pin" aria-hidden="true" />
      <div className="polaroid__photo">
        <img src={dog.url} alt={`A ${dog.breed}`} />
      </div>
      <figcaption className="polaroid__caption">{dog.breed}</figcaption>
    </figure>
  );
}
