// import React, { useState } from 'react';

import { deleteToken, editToken, getTokens } from '../../store/token.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormToken from '../components/FormToken/FormToken.js';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import PageTitle from '../components/PageTitle/PageTitle';
import Header from '../components/Header/Header.js';
import RemoveModal from './components/RemoveModal/RemoveModal';

function Edit() {
    const tokens = getTokens();
    let { id } = useParams();
    let tokenRecord = tokens.find((token) => token.id === id);
    let tokenIndex = tokens.indexOf(tokenRecord);
    let navigate = useNavigate();

    const [token, setToken] = useState(tokenRecord?.token);
    const [balance, setBalance] = useState(tokenRecord?.balance);
    const [messageErrorEmptyInput, setMessageErrorEmptyInput] = useState(false);
    const [messageErrorDuplicated, setMessageErrorDuplicated] = useState(false);
    const [removeModalOpen, setRemoveModalOpen] = useState(false);

    useEffect(() => {
        console.log('### tokenindex', tokenIndex);
        if (tokenIndex === -1) {
            navigate('/', { replace: true });
        }
    }, [tokenIndex, navigate]);

    function handleSave() {
        if (token === '' || balance === '') {
            setMessageErrorEmptyInput(true);
            return;
        }

        try {
            editToken({
                ...tokenRecord,
                token,
                balance
            });

            navigate('/', { replace: true });
        } catch (err) {
            setMessageErrorDuplicated(true);
        }
    }

    function handleRemove() {
        setRemoveModalOpen(true);
    }

    function handleRemoveConfirmation() {
        deleteToken(tokenRecord);
        navigate('/', { replace: true });
    }

    return (
        <>
            <Header hideAddButton />
            <PageTitle title='Edit Token' />
            <FormToken
                token={token}
                balance={balance}
                onSave={handleSave}
                onRemove={handleRemove}
                onTokenChange={setToken}
                onBalanceChange={setBalance}
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
            {removeModalOpen && (
                <RemoveModal
                    onConfirm={handleRemoveConfirmation}
                    onCancel={setRemoveModalOpen}
                />
            )}
        </>
    );
}

export default Edit;
