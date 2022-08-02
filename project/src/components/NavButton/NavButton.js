import { Link } from 'react-router-dom';
import Button from '../Button/Button';


function NavButton(props) {
    return (
        <Link to={props.link}>
            <Button text={props.text} variant={props.variant} onClick={props.onClick}/> 
        </Link>
    );
}
export default NavButton;
