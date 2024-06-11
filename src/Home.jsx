import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

// const { data, isPending, error } = useFetch('"http://localhost:7000/blogs"');

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:7000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
        });
    }, 1000);
  }, []);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {/* {error && <div>{error}</div>} */}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All my blogs!" />}
    </div>
  );
}
