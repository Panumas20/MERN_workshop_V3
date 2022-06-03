import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import SingleComponent from "./components/SingleComponent";

import App from "./App";

const MyRoute = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/create" element={<FormComponent />} />
        <Route path="/blog/:slug" element={<SingleComponent />} />
        {/* <Route path="/blog/:slug" element={<SingleComponent props={} />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
