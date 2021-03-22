import Presentation from "./components/createPresentation/createPresentation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";

export default function App() {
  return (
    <div className="App">
      <h1>presentation</h1>
      <Router>
        <Route path="/presentations">
          <Presentation />
        </Route>
        <Route path="/all">
          <MainPage />
        </Route>
      </Router>
    </div>
  );
}
