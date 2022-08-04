import Button from '../Button/Button';
import '../RemoveMessage/RemoveMessage.css';

export default function RemoveMessage(props) {
    return (
        <div className='container'>
            <div>
                <h4>Are you sure you want to delete your token?</h4>
                <Button
                    variant='save'
                    onClick={props.handleRemoveConfirmation}
                    text='YES'
                />
                <Button
                    variant='remove'
                    onClick={() => {
                        props.setMessageRemove(false);
                    }}
                    text='NO'
                />
            </div>
        </div>
    );
}
