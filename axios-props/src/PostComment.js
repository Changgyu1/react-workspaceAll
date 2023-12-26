import React, { useEffect, useState } from "react";
import axios from "axios";

const PostComment = () => {
    const [useData, setUserData] = useState([]);
    const [PostComment, setPostComments] = useState([]);
    const [userPost, setUserPost] = useState([]);

    // api를 2개이상 가져올 경우
    useEffect(() => {
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/comments'),
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ])
            // 데이터를 성공적으로 가져왔을 때
            // axios.spread 여러가지 응답을
            // 개별 응답으로 나눠서 제공된 set함수에 전달하는 역할
            .then(axios.spread((usersResponse, commentsReponse, postsResponse) => {
                setUserData(usersResponse.data);
                setPostComments(commentsReponse.data);
                setUserPost(postsResponse.data);
            }))
            .catch(error => {
                console.log("error", error)
            });
    }, []);
    return (
        <div>
            <h2>User 정보</h2>
            {useData.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}

            <h2>게시글</h2>
            {userPost.map(post => (
                <p key={post.id}>{post.body}</p>
            ))}

            <h2>게시물 댓글</h2>
            {PostComment.map(comment => (
                <p key={comment.id}>{comment.body}</p>
            ))}



        </div>
    )
}
export default PostComment;