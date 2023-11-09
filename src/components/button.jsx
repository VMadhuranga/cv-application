export function Button({ text, handleOnClick, disabled }) {
  if (disabled) {
    return (
      <button onClick={handleOnClick} disabled hidden>
        {text}
      </button>
    );
  }

  return <button onClick={handleOnClick}>{text}</button>;
}
