import "./button.css";

export function Button({ text, handleOnClick, disabled, className }) {
  if (disabled) {
    return (
      <button onClick={handleOnClick} className={className} disabled hidden>
        {text}
      </button>
    );
  }

  return (
    <button onClick={handleOnClick} className={className}>
      {text}
    </button>
  );
}
