import './App.css';
import Header from "./components/Header/Header.js"
import React from "react";
import Home from './components/Home/Home.js';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
