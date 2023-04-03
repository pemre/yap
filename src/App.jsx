import React, { useState, useEffect } from "react";
import { Button } from "./Button/Button";
import { Flex } from "./Flex/Flex";
import { Header } from "./Header/Header";
import { IconDelete } from "./Icons/IconDelete";
import { Switch } from "./Switch/Switch";

import "./styles.css";

export const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const title = prompt();

    if (!title) {
      return;
    }

    setTodos([
      ...todos,
      { id: Date.now(), text: title.trim(), completed: false },
    ]);
  };

  const handleRenameTodo = (id) => {
    const oldTitle = todos.find((t) => t.id === id).text;
    const title = prompt("Rename", oldTitle);

    setTodos(
      todos.map((todo) =>
        todo.id === id && title ? { ...todo, text: title } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const dragIndex = e.dataTransfer.getData("index");
    const newTodos = [...todos];
    const [draggedTodo] = newTodos.splice(dragIndex, 1);
    newTodos.splice(index, 0, draggedTodo);
    setTodos(newTodos);
  };

  return (
    <>
      <Flex>
        <Header>Yap</Header>
        <Button success sizeL onClick={() => handleAddTodo()}>
          +
        </Button>
      </Flex>

      <ol style={{ "--length": todos.length }}>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            style={{ "--i": index + 1 }}
          >
            <div className="title" onClick={() => handleRenameTodo(todo.id)}>
              {todo.text}
            </div>

            <Button danger sizeM onClick={() => handleDeleteTodo(todo.id)}>
              <IconDelete />
            </Button>

            <div style={{ marginRight: "1rem" }} />

            <Switch
              checked={todo.completed}
              onClick={() => handleToggleTodo(todo.id)}
            />
          </li>
        ))}
      </ol>
    </>
  );
};
