import "./text-area.css";

export function TextArea({ id, text, rows = 4, value, handleOnChange }) {
  return (
    <div className="text-area">
      <label htmlFor={id}>{text}</label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
}
