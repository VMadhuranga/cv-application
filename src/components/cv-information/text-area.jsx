export function TextArea({ id, text, rows = 4, value }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <textarea id={id} rows={rows} value={value}></textarea>
    </div>
  );
}
