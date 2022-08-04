// import React, { useState } from 'react';
// import tokens from '../tokens.js';
// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button/Button';
import NavButton from '../NavButton/NavButton';

function Form(props) {
    // let { id } = useParams();
    // let tokenId = tokens.find((token) => token.id == id);
    // let tokenIndex = tokens.indexOf(tokenId);

    // const [token, setToken] = useState(tokens[tokenIndex].token);
    // const [balance, setBalance] = useState(tokens[tokenIndex].balance);
    // const [messageError, setMessageError] = useState(false);

    // function handleSave() {
    //     if (!token) {
    //         setMessageError(true);
    //     } else {
    //         tokens[tokenIndex] = {
    //             ...tokens[tokenIndex],
    //             token: token,
    //             balance: balance
    //         };
    //     }
    // }
    // function handleRemove() {
    //     console.log('remove clicked -->');
    // }

    // let idToEdit = tokens.find((token) => token.id == id);
    // console.log('token to edit -->', idToEdit);

    return (
        <>
            <form>
                <label>Token</label>
                <input
                    type='text'
                    name='token'
                    defaultValue={props.token}
                    // onChange={(e) => setToken(e.target.value)}
                    onChange={(e) => props.setToken(e.target.value)}
                    required
                ></input>
                <label>Balance</label>
                <input
                    type='text'
                    name='balance'
                    defaultValue={props.balance}
                    onChange={(e) => props.setBalance(e.target.value)}
                    // onChange={(e) => setBalance(e.target.value)}
                    required
                ></input>
                <div className='edit-btns'>
                    <NavButton
                        link='/'
                        variant='remove'
                        onClick={props.handleRemove}
                        text='Remove'
                        diplay='none'
                    />
                    <Button
                        variant='save'
                        onClick={props.handleSave}
                        text='Save'
                    />
                </div>
            </form>
            {/* {props.messageError && (
                <h3>
                    You missed some field, Please fill all the informations!
                </h3>
            )} */}
        </>
    );
}

export default Form;
