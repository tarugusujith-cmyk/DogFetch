interface ErrorStateProps {
  message: string;
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="note" role="alert">
      <span className="note__pin" aria-hidden="true" />
      <p className="note__title">The leash slipped</p>
      <p className="note__message">{message}</p>
    </div>
  );
}
