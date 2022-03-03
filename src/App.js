import "./App.css";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHome from "./pages/AppHome";
import Community from "./pages/Community";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/dicommunity" exact component={HomePage} />
        <Route path="/app" exact component={AppHome} />
        <Route path="/community" exact component={Community} />
      </Switch>
    </Router>
  );
}

export default App;
