import NavButton from '../NavButton/NavButton';
import '../Button/Button.css';

export default function PageTitle(props) {
    return (
        <div className='edit-btns'>
            <h5>{props.title}</h5>
            <NavButton link='/' variant='back' text='Back' />
        </div>
    );
}
