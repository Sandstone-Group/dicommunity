import "./App.css";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHome from "./pages/AppHome";
import Community from "./pages/Community";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/dicommunity" component={HomePage} />
        <Route path="/app" exact component={AppHome} />
        <Route path="/community" exact component={Community} />
        <Route path="/myaccount" exact component={Community} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/about" exact component={About} />
        <Route path="/team" exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
