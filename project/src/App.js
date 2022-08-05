import './App.css';
import Header from './components/Header/Header.js';
import React from 'react';
import Home from './components/Home/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edit from './components/Edit.js/Edit.js';
import AddToken from './components/AddToken/AddToken.js';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Routes>
                    <Route exact path='/home' element={<Home />} />
                </Routes>
                <Routes>
                    <Route path='/add' element={<AddToken />} />
                </Routes>
                <Routes>
                    <Route path='/edit/:id' element={<Edit />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
