import React, { useState } from "react";

export default function TodoList(props) {
  const [newName, setNewName] = useState("");
  const [isEditing, setEditing] = useState(false);

  function handleEditChange(e) {
    e.preventDefault();
    setNewName(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    props.editTodo(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleEditSubmit}>
      <input
        type="text"
        id={props.id}
        value={newName}
        onChange={handleEditChange}
      />
      <button type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );

  const viewingTemplate = (
    <div>
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.checked}
        onChange={() => props.toggleTodoCompleted(props.id)}
      />
      {props.name}
      <button type="button" onClick={() => props.deleteTodo(props.id)}>
        Delete
      </button>
      <button type="button" onClick={() => setEditing(true)}>
        Edit
      </button>
    </div>
  );

  return <li>{isEditing ? editingTemplate : viewingTemplate}</li>;
}
