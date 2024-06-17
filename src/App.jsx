import Navbar from "./Navbar";
import Home from "./Home";
import NewBlog from "./NewBlog";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewBlog" element={<NewBlog />} />
          <Route path="/CreateBlog" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
