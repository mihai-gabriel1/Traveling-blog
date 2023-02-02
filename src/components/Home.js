import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const handleDeleteAll = () => {
    setBlogs([]);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div className="loading-message">Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs!"
          handleDelete={handleDelete}
          handleDeleteAll={handleDeleteAll}
        />
      )}
    </div>
  );
};

export default Home;
