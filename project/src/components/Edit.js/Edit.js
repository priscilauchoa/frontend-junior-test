// import React, { useState } from 'react';
import './Edit.css';
import tokens from '../tokens.js';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import NavButton from '../NavButton/NavButton';
import Form from '../Form/Form.js';
import { useNavigate } from 'react-router-dom';

function Edit() {
    let { id } = useParams();
    let tokenId = tokens.find((token) => token.id == id);
    let tokenIndex = tokens.indexOf(tokenId);
    let navigate = useNavigate();

    const [token, setToken] = useState(tokens[tokenIndex].token);
    const [balance, setBalance] = useState(tokens[tokenIndex].balance);
    const [messageError, setMessageError] = useState(false);

    function handleSave(e) {
        // e.preventDefaut();
        console.log('token', token);

        if (token === '' || balance === '') {
            setMessageError(true);
            console.log('no token typed');
        } else {
            tokens[tokenIndex] = {
                ...tokens[tokenIndex],
                token: token,
                balance: balance
            };
            navigate('/', { replace: true });
        }
    }
    function handleRemove() {
        console.log('remove clicked -->');
    }

    // let idToEdit = tokens.find((token) => token.id == id);
    // console.log('token to edit -->', idToEdit);

    return (
        <>
            <div className='edit-btns'>
                <h5>Edit Token</h5>
                <NavButton link='/' variant='back' text='Back' />
            </div>
            <Form
                token={token}
                balance={balance}
                handleSave={(e) => handleSave(e)}
                handleRemove={handleRemove}
                setToken={setToken}
                setBalance={setBalance}
            />
            {messageError && (
                <h3>
                    You missed some field, Please fill all the informations!
                </h3>
            )}
        </>
    );
}

export default Edit;
