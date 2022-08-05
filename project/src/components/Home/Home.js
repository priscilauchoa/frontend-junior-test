// import React, { useState } from 'react';
import './Home.css';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { getTokens } from '../tokens.js';
import { useNavigate } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';
import Table from '../Table/Table.js';
import { useEffect } from 'react';

function Home() {
    const tokens = getTokens();
    let navigate = useNavigate();
    let currentTokens = JSON.parse(window.localStorage.getItem('token'));

    console.log('edit btn clicked',tokens)
    
    function handleEdit(id) {
        console.log('edit btn clicked',tokens)
        let tokenToEdit = tokens.find((token) => token.id == id);
        navigate(`/edit/${tokenToEdit.id}`, { replace: true });
    }

    return (
        <>
            <table>
                <NavButton link='/add' variant='add-token' text='Add Token' />
                <tr>
                    <th>Tokens</th>
                    <th>Balance</th>
                </tr>
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
            </table>
        </>
    );
}

export default Home;
