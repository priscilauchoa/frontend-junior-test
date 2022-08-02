import './Header.css';

import logo from '../../assets/logo.svg';
import { ReactComponent as Star } from '../../assets/shooting-star.svg';
import React, { useState } from 'react';
import NavButton from '../NavButton/NavButton';

function Header() {
    const [addTokenClicked, setAddTokenClicked] = useState(true);
    const handleAddToken = () => {
        console.log('add clicked');
        setAddTokenClicked(false);
    };

    return (
        <div className='header'>
            <img src={logo} className='logo' alt='logo' />
            <div className='star_wrapper'>
                <div>
                    <Star className='star' />
                    <h1>Wish Wallet</h1>
                </div>
                {addTokenClicked && (
                    <NavButton
                        link='/token'
                        variant='add-token'
                        onClick={handleAddToken}
                        text='Add Token'
                    />
                )}
            </div>
        </div>
    );
}

export default Header;
