// import React, { useState } from 'react';
import './Home.css';
import { ReactComponent as EditIccon } from '../../assets/edit.svg';
import tokens from '../tokens.js';
import { useNavigate } from 'react-router-dom';

function Home() {
    // const [edit, setEdit] = useState(true);
    let navigate = useNavigate();

    function handleEdit(e) {
        // console.log('add clicked -->', e);

        let tokenToEdit = tokens.find((token) => token.id === e);

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
                <tr>
                    <th>Tokens</th>
                    <th>Balance</th>
                </tr>
                {tokens &&
                    tokens.map((item) => {
                        return (
                            <tr>
                                <td id={item.id}>
                                    <button
                                        onClick={(e) => handleEdit(item.id)}
                                    >
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
