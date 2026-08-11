export function Loader() {
  return (
    <div className="polaroid polaroid--loading" role="status" aria-live="polite">
      <span className="polaroid__pin" aria-hidden="true" />
      <div className="polaroid__photo polaroid__photo--placeholder">
        <span className="spinner" aria-hidden="true" />
      </div>
      <p className="polaroid__caption polaroid__caption--muted">
        Sniffing one out…
      </p>
    </div>
  );
}
