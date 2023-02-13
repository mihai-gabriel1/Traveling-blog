import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview">
          <Link to={`/blogs/${blog.id}/`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>Written by {blog.author}</p>
          <button
            className="blog-delete-btn"
            onClick={() => handleDelete(blog.id)}
          >
            Delete blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
