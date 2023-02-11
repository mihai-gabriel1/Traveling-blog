import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const blog = { title, body, author };

    fetch(
      "https://my-json-server.typicode.com/mihai-gabriel1/demo-apidb/blogs/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }
    ).then(() => {
      alert("Blog has been added.");
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
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
