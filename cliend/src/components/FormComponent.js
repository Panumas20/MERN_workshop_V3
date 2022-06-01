import React from "react";
import { useState } from "react";
import axios from "axios";
import NavbarComponent from "./NavbarComponent";
import Swal from "sweetalert2";

const FormComponent = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    author: "",
  });
  const { title, content, author } = state;
  const inputValue = (name) => (event) => {
    // console.log(name, "=", event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    // console.table({ title, content, author });
    axios
      .post(`${process.env.REACT_APP_API}/create`, {
        title,
        content,
        author,
      })
      .then((response) => {
        Swal.fire("", "บันทึกข้อมูลเรียบร้อย", "success");
        setState({ ...state, title: "", content: "", author: "" });
      })
      .catch((err) => {
        Swal.fire("", err.response.data.error, "error");
        // console.log(err.response.data.error);
      });
  };

  /*======================================================================== Return */

  return (
    <div className="container p-5">
      <NavbarComponent />
      <h1>FormComponents</h1>
      {/* {JSON.stringify(state)} */}
      <form onSubmit={submitForm}>
        {/*=============================== Name */}
        <div className="form-group">
          <label>ชื่อเรื่อง</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={inputValue("title")}
          />
        </div>
        {/*=============================== Content */}
        <div className="form-group pt-2">
          <label>รายละเอียด</label>
          <textarea
            className="form-control"
            value={content}
            onChange={inputValue("content")}
          ></textarea>
        </div>

        {/*=============================== Author */}
        <div className="form-group pt-2">
          <label>ชื่อผู้แต่ง</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={inputValue("author")}
          />
        </div>
        <br />
        <input type="submit" value="บันทึก" className="btn btn-primary " />
      </form>
    </div>
  );
};
export default FormComponent;
