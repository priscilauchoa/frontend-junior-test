// import React, { useState } from 'react';
import './Edit.css';
import tokens from '../tokens.js';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Form from '../Form/Form.js';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PageTitle from '../PageTitle/PageTitle';
import Button from '../Button/Button';

function Edit() {
    let { id } = useParams();
    let tokenId = tokens.find((token) => token.id == id);
    let tokenIndex = tokens.indexOf(tokenId);
    let navigate = useNavigate();

    const [token, setToken] = useState(tokens[tokenIndex].token);
    const [balance, setBalance] = useState(tokens[tokenIndex].balance);
    const [messageError, setMessageError] = useState(false);
    const [messageRemove, setMessageRemove] = useState(true);

    function handleSave(e) {
        e.preventDefaut();
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
        // tokens = tokens.filter((token) => token.id == tokenId.id);

        setMessageRemove(true);
        console.log('remove clicked -->', tokens, tokens[tokenIndex], 'id',tokenId.id);
    }

    return (
        <>
            <PageTitle title='Edit Token' />
            <Form
                token={token}
                balance={balance}
                handleSave={(e) => handleSave(e)}
                handleRemove={(e) => handleRemove(e)}
                setToken={setToken}
                setBalance={setBalance}
            />
            {messageError && <ErrorMessage />}
            {messageRemove && (
                <div>
                    <h4>Are you sure you want to delete your token?</h4>
                    <Button
                        variant='save'
                        // onClick={handleRemoveYes}
                        text='YES'
                    />
                    <Button
                        variant='remove'
                        onClick={setMessageRemove(false)}
                        text='NO'
                    />
                </div>
            )}
        </>
    );
}

export default Edit;
