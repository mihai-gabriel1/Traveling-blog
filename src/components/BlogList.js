const BlogList = ({ blogs, title, handleDelete, handleDeleteAll }) => {
  return (
    <div className="blog-list">
      <h2> {title} </h2>
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2> {blog.title} </h2>
          <p> Written by {blog.author} </p>
          <button
            className="blog-delete-btn"
            onClick={() => handleDelete(blog.id)}
          >
            Delete blog
          </button>
        </div>
      ))}
      <button onClick={handleDeleteAll} className="delete-all-blogs">
        Delete all blogs
      </button>
    </div>
  );
};

export default BlogList;
