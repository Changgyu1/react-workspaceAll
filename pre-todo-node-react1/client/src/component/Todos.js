import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3007/api/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("error발생", error));
  }, []);

  return (
    <div>
      <h1>할일 리스트</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo[0]}>
            {todo[1]}
            <li>{todo[2]}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}
