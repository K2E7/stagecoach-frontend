import './styles/Dash_Welcome.css';
import PropTypes from 'prop-types';

const Welcome = ({ username, accountNumber }) => {
    return (
        <div className="div-welcome">
            <div className="TopText">Welcome</div>
            <div className="UserName">{username}</div>
            <div className="BottomText">#{accountNumber}</div>
        </div>
    );
}

Welcome.propTypes = {
    username: PropTypes.string,
    accountNumber: PropTypes.string
};

Welcome.defaultProps = {
    username: "Shinobi",
    accountNumber: "4CC0UN7NUMB3R"
};

export default Welcome;
