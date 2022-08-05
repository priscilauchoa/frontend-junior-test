// import React, { useState } from 'react';

import { deleteToken, editToken, getTokens } from '../tokens.js';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Form from '../Form/Form.js';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PageTitle from '../PageTitle/PageTitle';
import RemoveMessage from '../RemoveMessage/RemoveMessage';

function Edit() {
    const tokens = getTokens();
    let { id } = useParams();
    let tokenId = tokens.find((token) => token.id == id);
    let tokenIndex = tokens.indexOf(tokenId);
    let navigate = useNavigate();

    const [token, setToken] = useState(tokens[tokenIndex].token);
    const [balance, setBalance] = useState(tokens[tokenIndex].balance);
    const [messageError, setMessageError] = useState(false);
    const [messageRemove, setMessageRemove] = useState(false);

    function handleSave(e) {
        console.log('token', token);

        if (token === '' || balance === '') {
            setMessageError(true);
            console.log('no token typed');
        } else {
            console.log('XXX', tokenIndex);
            editToken({token: token, balance:balance, id: tokenIndex})
            tokens[tokenIndex] = {
                ...tokens[tokenIndex],
                token: token,
                balance: balance
            };
            navigate('/home', { replace: true });
        }
    }

    function handleRemove(e) {
        e.preventDefault();
        setMessageRemove(true);
    }

    function handleRemoveConfirmation() {
        deleteToken(tokenId.id);
        navigate('/home', { replace: true });
    }

    return (
        <>
            <PageTitle title='Edit Token' />
            <Form
                token={token}
                balance={balance}
                handleSave={(e) => handleSave(e)}
                handleRemove={(e) => handleRemove(e)}
                setMessageRemove={setMessageRemove}
                setToken={setToken}
                setBalance={setBalance}
            />
            {messageError && <ErrorMessage />}
            {messageRemove && (
                <>
                    <RemoveMessage
                        handleRemoveConfirmation={handleRemoveConfirmation}
                        setMessageRemove={setMessageRemove}
                    />
                </>
            )}
        </>
    );
}

export default Edit;
