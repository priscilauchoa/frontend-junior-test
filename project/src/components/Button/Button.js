import './Button.css';
function Button(props) {
    return (
        <button
            className={`${props.display} btn-${props.variant}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}
export default Button;
