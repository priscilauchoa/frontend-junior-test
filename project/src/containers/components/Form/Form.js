import Button from '../../../components/Button/Button';
import NavButton from '../../../components/NavButton/NavButton';
import './Form.css';

function Form(props) {
    const { hideRemoveButton } = props;

    return (
        <>
            <div className='form'>
                <label>Token</label>
                <input
                    type='text'
                    name='token'
                    defaultValue={props.token}
                    onChange={(e) => props.setToken(e.target.value)}
                    required
                ></input>
                <label>Balance</label>
                <input
                    type='number'
                    name='balance'
                    defaultValue={props.balance}
                    onChange={(e) => props.setBalance(e.target.value)}
                    required
                ></input>
                <div className='control-btns'>
                    {!hideRemoveButton && (
                        <NavButton
                            link='/'
                            variant='remove'
                            onClick={props.handleRemove}
                            text='Remove'
                        />
                    )}
                    <Button
                        variant='save'
                        onClick={props.handleSave}
                        text='Save'
                    />
                </div>
            </div>
        </>
    );
}

export default Form;
