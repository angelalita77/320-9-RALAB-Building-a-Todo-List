import { useState } from "react";

export default function TextInput({ dispatch }) {

    // create state to hook text from input field
    // upon load the field will be empty
    // initial state = ""
    const[text, setText]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // code to grab text into setText
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
