import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcomepage from "./components/Welcomepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/Welcomepage" element={<Welcomepage />} />
      </Routes>
    </Router>
  );
}

export default App;
