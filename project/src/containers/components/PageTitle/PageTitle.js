import NavButton from '../../../components/NavButton/NavButton';

export default function PageTitle(props) {
    return (
        <div className='control-btns'>
            <h5>{props.title}</h5>
            <NavButton link='/' variant='back' text='Back' />
        </div>
    );
}
