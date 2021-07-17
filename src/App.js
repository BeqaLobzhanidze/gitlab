import "./App.css";
import RoutingPage from "./RoutingPage";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <RoutingPage />
      </Router>
    </div>
  );
}

export default App;
