import React, { useEffect, useState} from "react";
import '../css/App.css'
function Board() {


    // 만약에 로컬 스토리지에 저장된 게시글이 있으면
    // 로컬 스토리지에서 게시글 데이터를 불러오기
    // 만약 저장된 게시글이 없으면 [] 빈 배열 가지고옴
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    // 게시글 목록 관리
    const [posts, setPosts] = useState(savedPosts);

    // 새로운 게시글 입력받기
    const [newPost, setNewPost] = useState('');

    // 페이지가 실행될 때나 게시글이 업데이트 될 때 로컬 스토리지에 저장
    // JSON.stringify : 자바스크립트 객체나 배열을 JSON 문자열로 변환하는 함수
    // [posts] 게시글 목록에 어떤 변화가 생길 때마다 갱신된 최신 데이터가 저장
    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);



    // 게시글 추가 함수
    const addPost = () => {
        setPosts([...posts, newPost]);
        setNewPost('');

        // 입력된 게시글을 로컬 스토리지에 저장
        // localStorage 밑에 Item과 setItem 존재함
        // 'posts' 키에 현재 게시글 목록과 새로운 게시글을 추가한 배열을 JSON
        // 문자열로 변환해서 저장
        localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
    }

    // 게시글 삭제하기
    // todoList 할일 목록 유지할 수 있도록 추가해주기
    const deletePost = (index) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);

        
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    const [editingIndex, setEditingIndex] = useState(null);
    const [editTodo, setEditTodo] = useState(''); 

    const startEditing = (index, post) => {
        setEditingIndex(index);
        setEditTodo(post);
    };

    const saveEdit = () => {
        const updatedPosts = [...posts];
        updatedPosts[editingIndex] = editTodo;
        setPosts(updatedPosts);
        setEditingIndex(null);
    };

    const cancelEdit = () => {
        setEditingIndex(null);
        setEditTodo('');
    }

    return (
        <div>
            <h1>게시판</h1>
            <div>
                <textarea
                    rows="6"
                    cols="100"
                    placeholder="게시글을 입력하세요!"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                >
                </textarea>
                <br />
                <button onClick={addPost}>게시글 추가</button>
            </div>
            <div>
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>

                        {editingIndex === index ? (
                            <div id="test">
                                <input
                                type="text"
                                value={editTodo}
                                onChange={(e) => setEditTodo(e.target.value)}/>
                                <button onClick={saveEdit}>저장</button>
                                <button onClick={cancelEdit}>취소</button>
                            </div>
                        ) :(
                            <div id="test">
                                {post}
                                <button onClick={() => deletePost(index)}>삭제하기</button>
                                <button onClick={() => startEditing(index, post)}>수정하기</button>
                            </div>
                        )}


                        </li>   
                    ))}              
                </ul>
            </div>
        </div>
    )

}
export default Board;