import React, { useState, useEffect, useCallback } from 'react';




function PreticeTwo() {

    // 할일 목록 배열을 위한 state 생성
    const [todos, setTodos] = useState([]);
    // 할 일 추가하기 위한 input String state 생성
    const [newTodo, setNewTodo] = useState('');
    // 할 일이 추가될 때마다 자동으로 할 일 갯수 추가해주는
    // count state 생성
    const [count, setCount] = useState(0);

    // 할 일이 추가될 때 사용 하는 함수
    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
        setCount(count + 1);
    };
    // 할 일을 삭제하는 함수
    const removeTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos.splice(index, 1);
        setTodos(updateTodos);
        
        // 할 일 삭제할 경우 count 감소
        setCount(count -1);
    };
    useEffect (() => {
        document.title = `할일 갯수 : ${count}`;
    },[count]);
    


    return (

        <div>
            <h1>게시글 총 갯수 : {count}</h1>
            
            <input type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>추가하기</button>
            
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                    {todo}
                        <button onClick={() => removeTodo(index)}>삭제하기</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PreticeTwo;
