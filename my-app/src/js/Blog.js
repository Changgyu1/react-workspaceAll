import React from "react";

const Blog = () => {
    const posts = [
        {id:1, title:'나의 첫 블로그', content:'블로그입니다.'},
        {id:2, title:'2번 게시물입니다.', content:'내용은 없습니다.'},
    ]
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    {title}
                    {content}
                </div>
            ))}
        </div>
    )
}