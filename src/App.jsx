import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import CounterH from "./components/CounterH";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/components">Components</Link>
        </li>
        <li>
          <Link to="/contacts">Contacs</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/components/*" element={<Components />} />
        <Route path="/contacts" element={<Contacs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <div>Home</div>;
}
function About() {
  return <div>About</div>;
}
function Components() {
  return (
    <div>
      <h2>Components</h2>
      <ul>
        <li>
          <Link to="counter">Counter</Link>
        </li>
        <li>
          <Link to="stopwatch">StopWatch</Link>
        </li>
      </ul>
      <Routes>
        <Route path="counter" element={<CounterH />} />
        <Route path="stopwatch" element={<StopWatch />} />
      </Routes>
    </div>
  );
}
function Contacs() {
  return <div>Contacs</div>;
}
function NotFound() {
  return <div>404 Not Found</div>;
}
export default App;
