import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SelectorContext } from './contexts/SelectorContext';
import NeoButton from './NeoButton';
import './styles/Form.css';

const Form = () => {
    const { selected } = useContext(SelectorContext);
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        usernameOrEmail: '',
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
        if (!credentials.usernameOrEmail || !credentials.password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        try {
            const loginData = {
                username: credentials.usernameOrEmail,
                password: credentials.password
            };

            const response = await axios.post('http://localhost:8080/api/auth/signin', loginData);

            const { token, id, username, email, roles } = response.data;

            localStorage.setItem('user', JSON.stringify({
                token,
                id,
                username,
                email,
                roles
            }));

            // Clear the error message
            setErrorMessage('');

            // Redirect to dashboard or home page
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
                            name="usernameOrEmail"
                            value={credentials.usernameOrEmail}
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
                        <div className="formLabel">User Id</div>
                        <input
                            className="textfield"
                            type="text"
                            id="userId"
                            name="usernameOrEmail"
                            value={credentials.usernameOrEmail}
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
