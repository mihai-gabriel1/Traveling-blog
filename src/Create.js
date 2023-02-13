import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(e);
    // Prevents the blog from being refreshed after the entry has been created.
    const blog = { title, body, author };

    setIsPending(true);

    fetch("https://my-json-server.typicode.com/mihai-gabriel1/demo-apidb/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("Blog has been added.");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog content:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="luigi">Luigi</option>
          <option value="gabriel">Gabriel</option>
          <option value="john">John</option>
        </select>

        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog..</button>}
      </form>
    </div>
  );
};

export default Create;
