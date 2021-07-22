import "./App.css";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route exact path="/home" component={Home} />;
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
