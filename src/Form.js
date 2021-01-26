import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h5>
          <label htmlFor="newTodo">Things to be done</label>
        </h5>
        <input
          type="text"
          id="new-todo"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
