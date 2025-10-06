export default function TextInput({ state, setState }) {
  return (
    <input
      type="text"
      value={state}
      placeholder="Enter task here..."
      onChange={(e) => setState(e.target.value)}
    />
  );
}
