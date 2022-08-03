// import React, { useState } from 'react';
import './Edit.css';
import tokens from '../tokens.js';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import NavButton from '../NavButton/NavButton';

function Edit() {
    let { id } = useParams();
    let tokenId = tokens.find((token) => token.id == id);
    let tokenIndex = tokens.indexOf(tokenId);

    const [token, setToken] = useState(tokens[tokenIndex].token);
    const [balance, setBalance] = useState(tokens[tokenIndex].balance);
    const [messageError, setMessageError] = useState(false);

    function handleSave() {
        if (!token) {
            setMessageError(true);
        } else {
            tokens[tokenIndex] = {
                token: token,
                balance: balance
            };
        }
    }
    function handleRemove() {
        console.log('remove clicked -->');
        // tokens[tokenToEdit] = {
        //     token: newToken,
        //     balance: newBalance
        // }
        // }
    }

    // let idToEdit = tokens.find((token) => token.id == id);
    // console.log('token to edit -->', idToEdit);

    return (
        <>
            <form>
                <label>Token</label>
                <input
                    type='text'
                    name='token'
                    defaultValue={token}
                    onChange={(e) => setToken(e.target.value)}
                    required
                ></input>
                <label>Balance</label>
                <input
                    type='text'
                    name='balance'
                    defaultValue={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    required
                ></input>
                <div className='edit-btns'>
                    <NavButton
                        link='/'
                        variant='remove'
                        onClick={handleRemove}
                        text='Remove'
                    />
                    <NavButton
                        link='/'
                        variant='save'
                        onClick={handleSave}
                        text='Save'
                    />
                </div>
            </form>
            {messageError && (
                <h3>
                    You missed some field, Please fill all the informations!
                </h3>
            )}
        </>
    );
}

export default Edit;
