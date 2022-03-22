import "./App.css";
import Login from "./screens/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/navbar" element={<NavBar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
