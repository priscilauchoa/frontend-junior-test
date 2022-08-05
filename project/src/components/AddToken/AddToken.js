import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';
import Form from '../Form/Form';
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

            navigate('/home', { replace: true });
        }
    }

    return (
        <>
            <PageTitle title='Add Token' />
            <Form
                token={token}
                balance={balance}
                handleSave={handleSave}
                setToken={setToken}
                setBalance={setBalance}
            />
            {/* <button onClick={(e) => handleSave(e)}></button> */}

            {messageError && <ErrorMessage />}
        </>
    );
}
export default AddToken;
