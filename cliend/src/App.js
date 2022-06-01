import "./App.css";
import axios from "axios";
import NavbarComponent from "./components/NavbarComponent";
import { useState, useEffect } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/blogs`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="container p-5">
        <NavbarComponent />
        {blogs.map((blog, index) => (
          <div
            className="row"
            key={index}
            style={{ borderBottom: "1px solid silver" }}
          >
            <div className="col pt-3 pb-2">
              <h2>{blog.title}</h2>
              <p>{blog.content.substring(0, 180)}</p>
              <p className="text-muted">{blog.author}</p>
              <p className="text-muted">
                {new Date(blog.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
