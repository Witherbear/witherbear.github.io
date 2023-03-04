import React from "react"
import Post from "/js/components/Post.jsx"

const Posts = () => {
  const blogPosts = [
    {
      title: "First post of the website.",
      body: `This is the first post of the
      website. Goodbye`,
      author: "Witherbear",
      date: "Feb, 17 2023",
    }
  ];

  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
