import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(
    "https://traveling-blog-24f80-default-rtdb.europe-west1.firebasedatabase.app/blogs.json"
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
