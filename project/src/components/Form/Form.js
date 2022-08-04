import Button from '../Button/Button';
import NavButton from '../NavButton/NavButton';

function Form(props) {
    return (
        <>
            <form>
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
                    type='text'
                    name='balance'
                    defaultValue={props.balance}
                    onChange={(e) => props.setBalance(e.target.value)}
                    required
                ></input>
                <div className='edit-btns'>
                    <NavButton
                        link='/'
                        variant='remove'
                        onClick={props.handleRemove}
                        text='Remove'
                        className='display'
                    />
                    <Button
                        variant='save'
                        onClick={props.handleSave}
                        text='Save'
                    />
                </div>
            </form>
        </>
    );
}

export default Form;
