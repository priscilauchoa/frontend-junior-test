import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';
import Form from '../Form/Form';
import Header from '../Header/Header.js';
import PageTitle from '../PageTitle/PageTitle';
import { createToken } from '../tokens';

function AddToken() {
    const [token, setToken] = useState('');
    const [balance, setBalance] = useState('');
    const [messageError, setMessageError] = useState(false);
    let navigate = useNavigate();

    function handleSave(e) {
        console.log('no token typed');

        if (token === '' || balance === '') {
            setMessageError(true);
            console.log('no token typed');
        } else {
            createToken({ token: token, balance: balance });

            navigate('/', { replace: true });
        }
    }

    return (
        <>
            <Header hideAddButton />
            <PageTitle title='Add Token' />
            <Form
                token={token}
                balance={balance}
                handleSave={handleSave}
                setToken={setToken}
                setBalance={setBalance}
                hideRemoveButton
            />

            {messageError && <ErrorMessage />}
        </>
    );
}
export default AddToken;
