import React, { useState, useEffect, useCallback } from "react";
import '../css/App.css'
import 해달 from '../img/안들린다.jpg';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [count, setCount] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState(''); 

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
    setCount((count) => count + 1);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setCount((count) => count - 1);
  };

  const startEditing = (index, todo) => {
    setEditingIndex(index);
    setEditTodo(todo);
  };

  const saveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = editTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditTodo('');
  };

  useEffect(() => {
    document.title = `할일 갯수 : ${count}`;
  }, [count]);

  return (
    <div>
      <h2>To do List</h2>
      <div id="test">
      <img src={해달}/>
      <br/>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button onClick={addTodo}>추가하기</Button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <div id="test">
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <button onClick={saveEdit}>저장</button>
                <button onClick={cancelEdit}>취소</button>
              </div>
            ) : (
              <div id="test">
                {todo}
                <DialogActions>
                <Button onClick={() => startEditing(index, todo)}>수정하기</Button>
                <Button onClick={() => removeTodo(index)}>삭제하기</Button>
                </DialogActions>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniApp() {
  return (
    <div>
      <TodoList />
    </div>
  );
}
export default MiniApp;
/*
my-app
map 배열 객체 메서드
배열의 각 요소에서 함수를 호출하고, 그 함수의 반환값으로
새로운 객체를 생성
예제코드 :
const newArray = array.map(value, index, array) => {});

value : 현재 배열 안에 있는 배열의 요소
index : 배열 안에 있는 자리값
array : 배열의 원본
반환값{} : 새로운 배열에서 해당하는 인덱스에 들어갈 값

{todos.map((todo, index) => (
  <li key={index}>  
  {todo}
  <button onClick={() => removeTodo(index)}>삭제하기</button>
  </li>
))}

array.map((요소, 자리값, 만약 새로운 배열이 필요하다면 배열 값 넣어줌) => {
  // 리턴값으로 새로운 배열을 구성

key={index} map 함수로 요소를 생성할 때 각 요소에 고유한 key 값을 지정
react 각 값에 대한 번호를 부여함으로써 목록을 부여된 번호로 추적하기 위해 사용됨
})

*/