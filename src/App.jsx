import Navbar from "./Navbar";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateBlog" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
