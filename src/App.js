import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import TodoList from "./TodoList";
//import Search from "./Search";

export default function App(props) {
  const [todos, setTodos] = useState(props.data);
  const [filter, setFilter] = useState("");

  function filterTodo(e) {
    let value = e.target.value;
    setFilter(value);
    if (filter !== "") {
      const filteredTodos = todos.filter((todo) =>
        todo.name.toLowerCase().includes(filter.toLowerCase())
      );
      setTodos(filteredTodos);
    }
  }

  function addTodo(name) {
    const newTodo = { id: `${nanoid()}`, name: name, completed: false };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  }

  function editTodo(id, newName) {
    const editedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, name: newName };
      }
      return todo;
    });
    setTodos(editedTodos);
  }

  function toggleTodoCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const todoList = todos.map((todo) => {
    return (
      <TodoList
        key={todo.id}
        id={todo.id}
        name={todo.name}
        checked={todo.completed}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    );
  });

  return (
    <Fragment>
      <h3>Todo App</h3>
      <input value={filter} onChange={filterTodo} />
      <Form addTodo={addTodo} />
      {todoList}
    </Fragment>
  );
}
