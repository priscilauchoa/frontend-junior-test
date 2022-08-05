import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.js';
import FormToken from '../components/FormToken/FormToken';
import Header from '../components/Header/Header.js';
import PageTitle from '../components/PageTitle/PageTitle';
import { createToken } from '../../store/token.js';

function AddToken() {
    const [token, setToken] = useState('');
    const [balance, setBalance] = useState('');
    const [messageError, setMessageError] = useState(false);
    const [messageErrorDuplicated, setMessageErrorDuplicated] = useState(false);

    let navigate = useNavigate();

    function handleSave(e) {
        if (token === '' || balance === '') {
            setMessageError(true);
            return;
        }

        try {
            createToken({ token: token, balance: balance });

            navigate('/', { replace: true });
        } catch (err) {
            setMessageErrorDuplicated(true);
        }
    }

    return (
        <>
            <Header hideAddButton />
            <PageTitle title='Add Token' />
            <FormToken
                token={token}
                balance={balance}
                onSave={handleSave}
                onTokenChange={setToken}
                onBalanceChange={setBalance}
                hideRemoveButton
            />

            {messageError && (
                <ErrorMessage>
                    You missed some field, Please fill all the informations!
                </ErrorMessage>
            )}
            {messageErrorDuplicated && (
                <ErrorMessage>
                    This token already exists, please enter a new one
                </ErrorMessage>
            )}
        </>
    );
}
export default AddToken;
