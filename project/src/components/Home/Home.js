// import React, { useState } from 'react';
import './Home.css';
import { ReactComponent as EditIccon } from '../../assets/edit.svg';
import tokens from '../tokens.js';
import { useNavigate } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';

function Home() {
    // const [edit, setEdit] = useState(true);
    let navigate = useNavigate();

    function handleEdit(id) {
        let tokenToEdit = tokens.find((token) => token.id == id);

        // console.log('token to edit -->', tokenToEdit);
        navigate(`/edit/${tokenToEdit.id}`, { replace: true });

        // tokens[tokenToEdit] = {
        //     token: newToken,
        //     balance: newBalance
        // }
    }

    return (
        <>
            <table>
                <NavButton link='/add' variant='add-token' text='Add Token' />
                <tr>
                    <th>Tokens</th>
                    <th>Balance</th>
                </tr>
                {tokens &&
                    tokens.map((item) => {
                        return (
                            <tr>
                                <td key={item.id}>
                                    <button onClick={() => handleEdit(item.id)}>
                                        <EditIccon className='edit' />
                                    </button>
                                    {item.token}
                                </td>
                                <td>{item.balance}</td>
                            </tr>
                        );
                    })}
            </table>
        </>
    );
}

export default Home;
