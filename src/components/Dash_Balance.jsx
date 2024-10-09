import './styles/Dash_Balance.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Balance = ({ balance }) => {
    const [isBalanceVisible, setIsBalanceVisible] = useState(false);

    const handleMouseDown = () => {
        setIsBalanceVisible(true);
    };

    const handleMouseUp = () => {
        setIsBalanceVisible(false);
    };

    return (
        <div className="div-balance">
            <div className="balance-hider neumorph-ui-left">
                {isBalanceVisible && balance !== null ? <p>Balance: ${balance}</p> : <p>Balance: ******</p>}
            </div>
            <div className="balance-button-wrapper">
                <button
                    className="balance-button neumorph-ui-left"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    View Balance
                </button>
            </div>
        </div>
    );
}

Balance.propTypes = {
    balance: PropTypes.number
};

Balance.defaultProps = {
    balance: 0.0
};

export default Balance;