import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleNavigator = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>This is all about the post</p>
      <h3>Title: {post.title}</h3>
      <p>Details: {post.body}</p>
      <button onClick={handleNavigator}>Go Back</button>
    </div>
  );
};

export default PostDetails;
