import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHome from "./pages/AppHome";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/app" exact component={AppHome} />
        <Route path="/team" exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
