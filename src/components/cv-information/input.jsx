import "./input.css";

export function Input({ id, type, text, value, handleOnChange }) {
  return (
    <div className="input">
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleOnChange}
      ></input>
    </div>
  );
}
