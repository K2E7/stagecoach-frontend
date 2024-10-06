import "./styles/NeoButton.css";
import PropTypes from 'prop-types';

const NeoButton = ({ text, className, onClick }) => {
    return (
        <div className={`neo-button-wrapper ${className}`}>
            <button className={`neo-button ${className}`} type="submit" onClick={onClick}>{text}</button>
        </div>
    )
}

NeoButton.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
};

NeoButton.defaultProps = {
    className: "",
    onClick: () => { }
};

export default NeoButton;