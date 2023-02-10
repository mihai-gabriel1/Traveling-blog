import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(
    "https://my-json-server.typicode.com/mihai-gabriel1/demo-apidb/blogs"
  );

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div className="loading-message">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
