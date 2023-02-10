import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("title test");
  const [content, setContent] = useState("content test");
  const [author, setAuthor] = useState("author test");

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
