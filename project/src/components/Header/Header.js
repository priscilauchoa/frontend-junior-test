import './Header.css';
import logo from '../../assets/logo.svg';
import { ReactComponent as Star } from '../../assets/shooting-star.svg';
import React, { useState } from 'react';
// import NavButton from '../NavButton/NavButton';

function Header() {
    // const [addTokenClicked, setAddTokenClicked] = useState(true);
  

    return (
        <div className='header'>
            <div className='logo-wrapper'>
                <img src={logo} className='logo' alt='logo' />
            </div>
            <div className='star-wrapper'>
                <div>
                    <Star className='star' />
                    <h1>Wish Wallet</h1>
                </div>
                {/* {addTokenClicked && ( */}
                    {/* <NavButton
                        link='/add'
                        variant='add-token'
                        onClick={handleAddToken}
                        text='Add Token'
                    /> */}
                {/* )} */}
            </div>
        </div>
    );
}

export default Header;
