// import React, { useState } from 'react';
import './Home.css';
import { getTokens } from '../../store/token.js';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table/Table.js';
import Header from '../components/Header/Header.js';

function Home() {
    const tokens = getTokens();
    let navigate = useNavigate();
    let currentTokens = JSON.parse(window.localStorage.getItem('token'));

    function handleEdit(id) {
        let tokenToEdit = tokens.find((token) => token.id == id);
        navigate(`/edit/${tokenToEdit.id}`, { replace: true });
    }

    return (
        <>
            <Header />
            <div className='fill'>
                <h5 className='mg'>Tokens</h5>
                <h5>Balance</h5>
            </div>

            {currentTokens &&
                currentTokens.map((item) => {
                    return (
                        <Table
                            id={item.id}
                            handleEdit={handleEdit}
                            token={item.token}
                            balance={item.balance}
                            left='left'
                            right='right'
                        />
                    );
                })}
        </>
    );
}

export default Home;
