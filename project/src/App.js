import logo from './assets/logo.svg';
import { ReactComponent as Star } from './assets/shooting-star.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <img src={logo} className='logo' alt='logo' />
            <Star className="star"/>
        </div>
    );
}

export default App;
