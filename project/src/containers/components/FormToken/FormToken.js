import Button from '../../../components/Button/Button';
import NavButton from '../../../components/NavButton/NavButton';
import './FormToken.css';

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
                    onChange={(e) => props.onTokenChange(e.target.value)}
                    required
                ></input>
                <label>Balance</label>
                <input
                    type='number'
                    name='balance'
                    defaultValue={props.balance}
                    onChange={(e) => props.onBalanceChange(e.target.value)}
                    required
                ></input>
                <div className='control-btns'>
                    {!hideRemoveButton && (
                        <Button
                            variant='remove'
                            onClick={props.onRemove}
                            text='Remove'
                        />
                    )}
                    <Button variant='save' onClick={props.onSave} text='Save' />
                </div>
            </div>
        </>
    );
}

export default Form;
