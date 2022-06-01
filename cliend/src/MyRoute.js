import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import App from "./App";
const MyRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={FormComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default MyRoute;
