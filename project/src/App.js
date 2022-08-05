import './App.css';
import React from 'react';
import { createBrowserHistory } from 'history';
import Home from './containers/TokenList/TokenList.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edit from './containers/EditToken.js/EditToken.js';
import AddToken from './containers/AddToken/AddToken.js';

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <div className='App'>
                <Routes>
                    <Route exact path='/' element={<Home />} />
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
