export function Input({ id, type, text, value }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} value={value}></input>
    </div>
  );
}
