// import React, { useState } from 'react';

import { deleteToken, editToken, getTokens } from '../../store/token.js';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Form from '../components/Form/Form.js';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import PageTitle from '../components/PageTitle/PageTitle';
import RemoveMessage from './components/RemoveMessage/RemoveMessage';
import Header from '../components/Header/Header.js';

function Edit() {
    const tokens = getTokens();
    let { id } = useParams();
    let tokenId = tokens.find((token) => token.id === id);
    let tokenIndex = tokens.indexOf(tokenId);
    let navigate = useNavigate();

    const [token, setToken] = useState(tokens[tokenIndex].token);
    const [balance, setBalance] = useState(tokens[tokenIndex].balance);
    const [messageErrorEmptyInput, setMessageErrorEmptyInput] = useState(false);
    const [messageErrorDuplicated, setMessageErrorDuplicated] = useState(false);
    const [messageRemove, setMessageRemove] = useState(false);

    function handleSave(e) {
        if (token === '' || balance === '') {
            setMessageErrorEmptyInput(true);
            return;
        }

        try {
            editToken({
                token,
                balance,
                index: tokenIndex
            });

            navigate('/', { replace: true });
        } catch (err) {
            setMessageErrorDuplicated(true);
        }
    }

    function handleRemove(e) {
        e.preventDefault();
        setMessageRemove(true);
    }

    function handleRemoveConfirmation() {
        deleteToken(tokenId.id);
        navigate('/', { replace: true });
    }

    return (
        <>
            <Header hideAddButton />
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
            {messageErrorEmptyInput && (
                <ErrorMessage>
                    You missed some field, Please fill all the informations!
                </ErrorMessage>
            )}
            {messageErrorDuplicated && (
                <ErrorMessage>
                    This token already exists, please enter a new one
                </ErrorMessage>
            )}
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
