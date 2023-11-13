import "./button.css";

export function Button({ text, handleOnClick, className }) {
  return (
    <button onClick={handleOnClick} className={className}>
      {text}
    </button>
  );
}
