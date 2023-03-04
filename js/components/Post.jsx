import React from "react"

const Post = ({ post: { title, body,
    date, author }}) => {
    return (
        <div className="post-container">
            <h1 className="title">{title}: {date} by {author}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Post;
