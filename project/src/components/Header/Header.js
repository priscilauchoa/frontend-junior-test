import './Header.css';
import logo from '../../assets/logo.svg';
import { ReactComponent as Star } from '../../assets/shooting-star.svg';
import NavButton from '../NavButton/NavButton';

function Header(props) {
    const { hideAddButton } = props;

    return (
        <header>
            <div className='logo-wrapper'>
                <img src={logo} className='logo' alt='logo' />
            </div>
            <div className='fill'>
                <div>
                    <Star className='star' />
                    <h1>Wish Wallet</h1>
                </div>
                {!hideAddButton && (
                    <NavButton
                        link='/add'
                        variant='add-token'
                        text='Add Token'
                    />
                )}
            </div>
        </header>
    );
}

export default Header;
