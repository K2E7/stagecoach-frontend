import './styles/Dash_Welcome.css';
import PropTypes from 'prop-types';

const Welcome = ({ username }) => {
    return (
        <div className="div-welcome">
            <div className="TopText">Welcome</div>
            <div className="UserName">{username}</div>
            <div className="BottomText">#4CC0UNTNUMB3R</div>
        </div>
    );
}

Welcome.propTypes = {
    className: PropTypes.string,
    username: PropTypes.string
};

Welcome.defaultProps = {
    className: "neumorph-ui",
    username: "Shinobi"
};

export default Welcome;