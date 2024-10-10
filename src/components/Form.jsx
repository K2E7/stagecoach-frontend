import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectorContext } from './contexts/SelectorContext';
import { AuthContext } from './contexts/AuthContext';
import NeoButton from './NeoButton';
import axios from 'axios'; // Import the custom Axios instance
import './styles/Form.css';

const Form = () => {
    const { selected } = useContext(SelectorContext);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleLogin = async () => {
        if (!credentials.username || !credentials.password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', credentials);

            const { token, id, username, email, roles } = response.data;

            // Use the login function from AuthContext
            login({
                token,
                id,
                username,
                email,
                roles
            });

            // Clear the error message
            setErrorMessage('');
            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("token",response.data.token);
            // Redirect to the dashboard or home page
            navigate('/dashboard');

        } catch (error) {
            console.error('Error logging in:', error);
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An error occurred during login.');
            }
        }
    };

    return (
        <div className="div-form">
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {selected === "Email" ? (
                <div className="inputWrapper">
                    <div className="form-elem">
                        <div className="formLabel">Email</div>
                        <input
                            className="textfield"
                            type="email"
                            id="email"
                            name="username"
                            value={credentials.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-elem">
                        <div className="formLabel">Password</div>
                        <input
                            className="textfield"
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            ) : (
                <div className="inputWrapper">
                    <div className="form-elem">
                        <div className="formLabel">User ID</div>
                        <input
                            className="textfield"
                            type="text"
                            id="userId"
                            name="username"
                            value={credentials.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-elem">
                        <div className="formLabel">Password</div>
                        <input
                            className="textfield"
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            )}
            <NeoButton text="Submit" className="custom-submit" onClick={handleLogin} />
        </div>
    );
};

export default Form;
