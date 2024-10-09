import './styles/Dash_Balance.css';
import PropTypes from 'prop-types';

const Balance = () => {
    return (
        <div className="div-balance">
            <div className="balance-hider neumorph-ui-left"></div>
            <div className="balance-button-wrapper">
                <button className="balance-button neumorph-ui-left">View Balance</button>
            </div>
        </div>
    );
}

Balance.propTypes = {
    className: PropTypes.string,
    username: PropTypes.string
};

Balance.defaultProps = {
    className: "neumorph-ui",
    username: "Shinobi"
};

export default Balance;