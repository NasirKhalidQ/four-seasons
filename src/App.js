import "./App.css";
import NavBar from "./Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
