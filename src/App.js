import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    /*
     * Updates in React
     * Switch --> Routes
     * component --> element
     */
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
