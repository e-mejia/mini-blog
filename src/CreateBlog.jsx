import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const [author, setAuthor] = useState("Zeviel");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, blogBody, author };
    console.log(blog);

    setIsPending(true);

    fetch("http://localhost:7000/blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog added");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={blogBody}
          onChange={(e) => {
            setBlogBody(e.target.value);
          }}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Zeviel">Zeviel</option>
          <option value="Zharai">Zharai</option>
          <option value="Zoe">Zoe</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Add Blog...</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
