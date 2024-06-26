import './Button.css';
function Button(props) {
    return (
        <button
            className={`btn-${props.variant}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}
export default Button;
