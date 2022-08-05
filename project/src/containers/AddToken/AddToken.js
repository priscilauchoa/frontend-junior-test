import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.js';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header.js';
import PageTitle from '../components/PageTitle/PageTitle';
import { createToken } from '../../store/token';

function AddToken() {
    const [token, setToken] = useState('');
    const [balance, setBalance] = useState('');
    const [messageError, setMessageError] = useState(false);
    const [messageErrorDuplicated, setMessageErrorDuplicated] = useState(false);

    let navigate = useNavigate();

    function handleSave(e) {
        console.log('no token typed');

        if (token === '' || balance === '') {
            setMessageError(true);
            console.log('no token typed');
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
            <Form
                token={token}
                balance={balance}
                handleSave={handleSave}
                setToken={setToken}
                setBalance={setBalance}
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
