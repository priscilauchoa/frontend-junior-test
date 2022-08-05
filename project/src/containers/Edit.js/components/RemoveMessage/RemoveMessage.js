import Button from '../../../../components/Button/Button';
import './RemoveMessage.css';

export default function RemoveMessage(props) {
    return (
        <div className='container'>
            <div>
                <h4>Are you sure you want to delete your token?</h4>
                <div className='btn-wrapper'>
                    <Button
                        variant='save'
                        onClick={() => props.handleRemoveConfirmation()}
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
        </div>
    );
}
