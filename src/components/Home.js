import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
    setData,
  } = useFetch(
    "https://my-json-server.typicode.com/mihai-gabriel1/demo-apidb/blogs"
  );

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setData(newBlogs);
  };

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div className="loading-message">Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs!"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
