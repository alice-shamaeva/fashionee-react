import './Button.css'

function Button({ children, onClick, type="button" }) {
    return (
        <div className="button-wrapper">
            <button className="button" type={type} onClick={onClick}>{children}</button>
            <div className="vertical-line"></div>
        </div>
    );
}

export default Button;
