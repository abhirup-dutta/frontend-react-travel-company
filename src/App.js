import './App.css';
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Arctic from "./components/pages/Arctic/Arctic";
import SignUp from "./components/pages/SignUp";
import Newfoundland from "./components/pages/Newfoundland/Newfoundland";
import Maritimes from "./components/pages/Maritimes/Maritimes";
import AllTours from "./components/pages/AllTours";

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
                <Route path='/all-tours' exact element={<AllTours />} />
                <Route path='/arctic' exact element={<Arctic />} />
                <Route path='/newfoundland' exact element={<Newfoundland />} />
                <Route path='/maritimes' exact element={<Maritimes />} />
                <Route path='/sign-up' exact element={<SignUp />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
