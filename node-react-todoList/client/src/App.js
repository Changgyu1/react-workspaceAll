import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log("error발생", error));
  });

  // npm i axios
  /*
  useEffect(() => {
    // 추후 server에서 Express를 활용해서 todos 데이터가져올 것
    fetch("/")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("에러가 발생했습니다.", error));
  });*/

  return (
    <div>
      <h1>투두 리스트</h1>
      <ul>
        <li>
          {todos.map((todo) => {
            <li key={todo.ID}> {todo.TASK}</li>;
          })}
        </li>
      </ul>
    </div>
  );
}

export default App;