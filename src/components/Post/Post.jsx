import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post">
      <h5>ID: {id}</h5>
      <h3>Title: {title}</h3>
      {/* option one :using link */}
      <p>
        <Link to={`/post/${id}`}>Show Post Details</Link>
      </p>
      {/* option two: using button in link */}
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      {/* option three: button by navigation */}
      <button onClick={handleNavigation}>Show More</button>
    </div>
  );
};

export default Post;
