import Button from '../../../../components/Button/Button';
import './RemoveModal.css';

export default function RemoveModal(props) {
    return (
        <div className='container'>
            <div>
                <h4>Are you sure you want to delete your token?</h4>
                <div className='btn-wrapper'>
                    <Button
                        variant='save'
                        onClick={() => props.onConfirm()}
                        text='YES'
                    />
                    <Button
                        variant='remove'
                        onClick={() => {
                            props.onCancel(false);
                        }}
                        text='NO'
                    />
                </div>
            </div>
        </div>
    );
}
