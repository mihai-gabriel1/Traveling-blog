import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Trip to Thailand",
      body: "lorem ipsum...",
      author: "Mario",
      id: 1,
    },

    {
      title: "One week in Greece",
      body: "lorem ipsum...",
      author: "Gabriel",
      id: 2,
    },

    {
      title: "Cristal water in Spain",
      body: "lorem ipsum...",
      author: "George",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const handleDeleteAll = () => {
    setBlogs([]);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All blogs!"
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
      />
    </div>
  );
};

export default Home;
