import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h2>Sorry!</h2>
      <p>The page could not be found...</p>
      <Link to="/">Click to go back to home page...</Link>
    </div>
  );
};

export default NotFound;
