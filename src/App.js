import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHome from "./pages/AppHome";
import {
  Reports,
  ReportsOne,
  ReportsTwo,
  ReportsThree,
} from "./pages/Community";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/app" exact component={AppHome} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/team" exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
